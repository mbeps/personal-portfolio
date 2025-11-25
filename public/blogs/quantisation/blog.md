- [1 - Introduction](#1---introduction)
- [2 - Theoretical Foundations of Numerical Representation](#2---theoretical-foundations-of-numerical-representation)
	- [2.1 Floating Point Representation (IEEE 754)](#21-floating-point-representation-ieee-754)
	- [2.2 Integer Representation and Fixed Point](#22-integer-representation-and-fixed-point)
	- [2.3 The Role of Bit-Width](#23-the-role-of-bit-width)
	- [2.4 Extended Quantisation Targets](#24-extended-quantisation-targets)
- [3 - The Mathematics of Uniform Affine Quantisation](#3---the-mathematics-of-uniform-affine-quantisation)
	- [3.1 The Quantisation Function](#31-the-quantisation-function)
	- [3.2 The Dequantisation Function](#32-the-dequantisation-function)
	- [3.3 Determining Scale ($S$) and Zero-Point ($Z$)](#33-determining-scale-s-and-zero-point-z)
	- [3.4 Matrix Multiplication in Quantised Arithmetic](#34-matrix-multiplication-in-quantised-arithmetic)
- [4 - Granularity of Quantisation](#4---granularity-of-quantisation)
	- [4.1 Per-Tensor Quantisation](#41-per-tensor-quantisation)
	- [4.2 Per-Channel (Per-Axis) Quantisation](#42-per-channel-per-axis-quantisation)
	- [4.3 Per-Token (Per-Row) Quantisation](#43-per-token-per-row-quantisation)
	- [4.4 Group-wise Quantisation](#44-group-wise-quantisation)
- [5 - Levels of Quantisation Implementation](#5---levels-of-quantisation-implementation)
	- [5.1 Post-Training Quantisation (PTQ)](#51-post-training-quantisation-ptq)
	- [5.2 Quantisation-Aware Training (QAT)](#52-quantisation-aware-training-qat)
	- [5.3 Comparative Summary](#53-comparative-summary)
- [6 - The Outlier Challenge in LLMs](#6---the-outlier-challenge-in-llms)
	- [6.1 Emergent Features](#61-emergent-features)
	- [6.2 The Impact on Quantisation](#62-the-impact-on-quantisation)
- [7 - Deep Dive: Modern Quantisation Algorithms](#7---deep-dive-modern-quantisation-algorithms)
	- [7.1 LLM.int8(): Mixed-Precision Decomposition](#71-llmint8-mixed-precision-decomposition)
	- [7.2 GPTQ: Optimal Brain Quantisation (OBQ)](#72-gptq-optimal-brain-quantisation-obq)
	- [7.3 AWQ: Activation-aware Weight Quantisation](#73-awq-activation-aware-weight-quantisation)
	- [7.4 SmoothQuant: Smoothing Activation Outliers](#74-smoothquant-smoothing-activation-outliers)
	- [7.5 QLoRA: 4-bit NormalFloat and Double Quantisation](#75-qlora-4-bit-normalfloat-and-double-quantisation)
	- [7.6 Summary of Algorithm Characteristics](#76-summary-of-algorithm-characteristics)
- [8 - Empirical Performance Analysis](#8---empirical-performance-analysis)
	- [8.1 The 4-bit "Sweet Spot" and Performance Cliffs](#81-the-4-bit-sweet-spot-and-performance-cliffs)
	- [8.2 Quantisation as Regularization](#82-quantisation-as-regularization)
	- [8.3 Performance Comparison Table](#83-performance-comparison-table)
- [9 - Comparative Analysis against Other Compression Approaches](#9---comparative-analysis-against-other-compression-approaches)
	- [9.1 Quantisation vs. Pruning](#91-quantisation-vs-pruning)
	- [9.2 Quantisation vs. Distillation](#92-quantisation-vs-distillation)
	- [9.3 Summary Table](#93-summary-table)
- [10 - Hardware Implications: The Roofline Model](#10---hardware-implications-the-roofline-model)
- [11 - Conclusion](#11---conclusion)
- [References](#references)


# 1 - Introduction

The ascendancy of Large Language Models (LLMs), epitomised by architectures such as the Transformer, has fundamentally altered the landscape of Artificial Intelligence. Models ranging from billions to trillions of parameaters (such as GPT-5, Gemini 3 Pro, Claude Sonnet 4.5, etc) demonstrate emergent capabilities in reasoning, coding, and creative generation. However, this capabilities curve is inextricably linked to a resource curve that has become increasingly unsustainable. The memory footprint and computational requirements for serving these models have grown exponentially, hitting the "Memory Wall"; a critical hardware bottleneck where data movement, rather than arithmetic throughput, dictates system performance.

The deployment of these models is a resource-intensive endeavor with significant economic and environmental costs. An LLM with $P$ parameters stored in half-precision (FP16, 16-bit) requires $2P$ bytes of memory merely to load the weights. A 65-billion parameter model, for instance, requires over 780 GB of GPU memory for fine-tuning in standard 16-bit precision, necessitating a cluster of high-end GPUs (e.g., NVIDIA A100s). Similarly, a 175-billion parameter model demands approximately 350 GB of VRAM solely for inference, ignoring the additional overhead of the Key-Value (KV) cache. This immense requirement renders deployment on edge devices, consumer workstations, or even standard cloud instances largely infeasible, creating a barrier to the democratization of advanced AI.

Quantisation has emerged as the premier solution to this scalability crisis. Unlike pruning (which removes connections) or distillation (which trains smaller student models), quantisation reduces the precision of the numerical representation of weights and activations. By mapping continuous floating-point values to discrete low-bit integers (e.g., INT8, INT4), quantisation reduces memory usage, increases data transfer speeds, and enables the use of high-throughput integer arithmetic units.

This report provides an exhaustive technical analysis of quantisation for LLMs. It establishes the mathematical foundations of affine mapping, explores the distinct challenges posed by the heavy-tailed distributions of Transformer features, and derives the working mechanisms of state-of-the-art (SOTA) algorithms including LLM.int8(), GPTQ, AWQ, SmoothQuant, and QLoRA. It concludes with a comparative analysis against alternative compression paradigms.

# 2 - Theoretical Foundations of Numerical Representation

To understand quantisation, one must first rigorously define the baseline representations used in deep learning: Floating Point and Fixed Point arithmetic. The transition between these domains is not merely a truncation of bits but a mapping between continuous and discrete vector spaces. A helpful analogy is the compression of a high-resolution digital photograph into a JPEG file; information is selectively discarded to reduce file size, with the goal of preserving the most visually important details.

## 2.1 Floating Point Representation (IEEE 754)
Standard deep learning training utilises 32-bit (FP32) or 16-bit (FP16/BF16) floating-point numbers. A floating-point number $x$ is represented as:

$$x = (-1)^s \times (1.m) \times 2^{e - B}$$

Where:
* $s$ is the sign bit.
* $m$ is the mantissa (significand), representing the precision.
* $e$ is the exponent, determining the dynamic range.
* $B$ is the bias.

![alt text]({BASE}/image-1.png)

> Comparison of FP32 and BF16 formats. BF16 retains the 8-bit exponent of FP32, maintaining dynamic range crucial for training stability.

BF16 (Brain Floating Point) has become the standard for LLM training. Unlike FP16, which allocates 5 bits to the exponent and 10 to the mantissa, BF16 retains the 8-bit exponent of FP32 but truncates the mantissa to 7 bits. This preserves the dynamic range of FP32, which is crucial for gradient stability during training, at the cost of precision. This trade-off is acceptable because neural networks are notoriously resilient to noise in the mantissa, provided the gradient magnitudes (governed by the exponent) are preserved.

## 2.2 Integer Representation and Fixed Point
Integers are represented using two's complement or unsigned formats. In the context of neural networks, we treat these as fixed-point numbers. An $n$-bit integer $q$ can represent $2^n$ distinct levels. For an unsigned integer, the range is $[0, 2^n - 1]$. For a signed integer, the range is $[-2^{n-1}, 2^{n-1} - 1]$.

The transition from Floating Point to Integer is the core operation of quantisation. This is a lossy compression technique involving two distinct errors:

* **Rounding Error:** The continuous value is rounded to the nearest discrete level. This introduces quantisation noise, often modelled as additive uniform noise $\mathcal{U}(-\frac{\Delta}{2}, \frac{\Delta}{2})$ where $\Delta$ is the step size.
* **Clipping Error:** Values outside the representable dynamic range are saturated (clamped) to the minimum or maximum distinct value. Minimising the clipping error often requires choosing a clipping threshold that is smaller than the absolute maximum of the signal, thereby sacrificing outliers to preserve the resolution of the central distribution.

## 2.3 The Role of Bit-Width
The choice of bit-width ($n$) fundamentally dictates the trade-off between model size and fidelity.

* **INT8 (8-bit):** Provides 256 levels. This is often considered "safe" for post-training quantisation of activations and weights in moderate-sized models.
* **INT4 (4-bit):** Provides only 16 levels. This is the current standard for weight-only quantisation in large LLMs (e.g., Llama 2, Falcon). The gap between 256 levels and 16 levels is immense, requiring sophisticated calibration to place those 16 levels optimally.
* **INT2 (2-bit) / Ternary:** Provides 4 or 3 levels. Research into 1-bit (binary) or 1.58-bit (ternary) models suggests that with specialised architectures (like BitNet), LLMs can function in this regime, though standard post-training quantisation often fails catastrophically here.

## 2.4 Extended Quantisation Targets
While model weights are the most common target, quantisation can be applied to several numerical components, each presenting unique challenges:

* **Weights:** Static parameters fixed after training. Predictable distributions make them easier to quantise with high fidelity.
* **Activations:** Dynamic intermediate outputs that change with input. Their input-dependent nature and susceptibility to outliers make them significantly harder to quantise without accuracy loss.
* **KV Cache:** In Transformer models, the Key-Value (KV) cache stores attention states to accelerate generation. Quantising the KV cache is critical for reducing the memory bottleneck during long-sequence generation and increasing throughput.
* **Gradients:** Gradients can be quantised during backpropagation to reduce communication overhead in distributed training. This is the most challenging form, as optimisation convergence is highly sensitive to gradient precision.


# 3 - The Mathematics of Uniform Affine Quantisation

The most prevalent form of quantisation in modern hardware is Uniform Affine Quantisation. It assumes that the discrete quantisation levels are evenly spaced. This method maps a real-valued tensor $X_{f}$ (floating point) to an integer tensor $X_{q}$ (quantised) and vice-versa.



## 3.1 The Quantisation Function
The mapping is defined by a scaling factor $S$ and a zero-point $Z$. The mathematical formulation is:

$$X_{q} = \text{Clamp}\left( \text{Round}\left( \frac{X_{f}}{S} + Z \right), q_{min}, q_{max} \right)$$

Where:
* $X_{f}$ is the input floating-point value.
* $S \in \mathbb{R}^+$ is the scale factor (step size between quantisation levels). It must be large enough to cover the dynamic range but small enough to preserve precision.
* $Z \in \mathbb{Z}$ is the zero-point, which maps the floating-point zero to an integer value. This ensures that zero padding (common in CNNs and Transformers) is represented exactly without error.
* $q_{min}, q_{max}$ are the limits of the integer range (e.g., -128 and 127 for INT8).
* $\text{Round}(\cdot)$ is usually rounding to the nearest integer.

![alt text]({BASE}/image-2.png)

> Uniform Affine Quantisation. The real range $[x_{min},x_{max}]$ is mapped to integers. The zero-point $Z$ shifts the integer distribution so that the floating-point $0$ is perfectly represented.

## 3.2 The Dequantisation Function
To perform operations or recover the approximation of the original value, we apply the inverse affine transformation:

$$\hat{X}_{f} = S \times (X_{q} - Z)$$

Here, $\hat{X}_{f}$ is the approximation of $X_{f}$. The error $\epsilon = X_{f} - \hat{X}_{f}$ constitutes the quantisation noise.

## 3.3 Determining Scale ($S$) and Zero-Point ($Z$)
The parameters $S$ and $Z$ are derived from the dynamic range of the input tensor, defined by $[x_{min}, x_{max}]$.

**Asymmetric Quantisation:** In asymmetric quantisation, we map the full range $[x_{min}, x_{max}]$ to $[q_{min}, q_{max}]$.
The scale $S$ is calculated as:

$$S = \frac{x_{max} - x_{min}}{q_{max} - q_{min}}$$

The zero-point $Z$ is derived by setting the dequantised value of $Z$ to be $0$:

$$0 = S(Z - Z_{real}) \implies Z = \text{Round}\left( - \frac{x_{min}}{S} + q_{min} \right)$$

This approach allows the quantised range to be fully utilised regardless of the distribution's center. However, the non-zero $Z$ introduces computational overhead in matrix multiplication (cross-terms involving $Z$).

**Symmetric Quantisation:** Symmetric quantisation restricts the zero-point $Z$ to be 0 (or specifically centered). This forces the floating-point range to be symmetric around zero, i.e., $[-\alpha, \alpha]$, where $\alpha = \max(|x_{min}|, |x_{max}|)$.

$$S = \frac{\alpha}{2^{n-1} - 1}$$
$$Z = 0$$

Symmetric quantisation is computationally more efficient because the term $(X_{q} - Z)$ simplifies to $X_{q}$, removing a subtraction operation during inference. However, if the data distribution is heavily skewed (e.g., ReLU activations which are strictly non-negative), symmetric quantisation wastes half of the quantisation levels on the negative range that contains no data.

## 3.4 Matrix Multiplication in Quantised Arithmetic
In an LLM, the dominant operation is Matrix Multiplication (GEMM): $Y = XW + b$.
Let $X$ be the activation and $W$ be the weight. If both are quantised:

$$X \approx S_x (X_q - Z_x)$$
$$W \approx S_w (W_q - Z_w)$$

The multiplication becomes:

$$Y \approx S_x S_w (X_q - Z_x)(W_q - Z_w)$$
$$Y \approx S_x S_w (X_q W_q - X_q Z_w - Z_x W_q + Z_x Z_w)$$

This equation reveals the computational cost. The term $X_q W_q$ is the standard integer matrix multiplication, which is very fast on hardware (e.g., NVIDIA Tensor Cores or CPU AVX-512 VNNI instructions). The other terms involving $Z$ are overheads.
If $Z_w = 0$ (symmetric weights) and $Z_x = 0$ (symmetric activations), the equation collapses to:

$$Y \approx S_x S_w (X_q W_q)$$

This requires only one floating-point multiplication ($S_x S_w$) per output element after the integer accumulation. This is why symmetric quantisation is preferred for high-performance inference.


# 4 - Granularity of Quantisation

The definitions of $x_{min}$ and $x_{max}$ determine the granularity, a critical factor in LLM performance. The granularity defines the scope over which the scaling factors are shared. A broader scope (e.g., whole tensor) is more efficient but less precise; a narrower scope (e.g., per channel) is more precise but adds metadata overhead.

![alt text]({BASE}/image-3.png)

> Quantisation Granularity. Per-tensor shares one scale for the whole matrix. Per-channel assigns a scale per row/column. Group-wise splits channels into smaller blocks (e.g., 128 elements) for finer control over outliers.

## 4.1 Per-Tensor Quantisation
One pair of $(S, Z)$ is calculated for the entire weight matrix $W$. This is the most hardware-efficient approach as it requires storing only one scale per tensor. However, it yields high error if the matrix has varying ranges across rows or columns, which is almost guaranteed in large Transformer weights.

## 4.2 Per-Channel (Per-Axis) Quantisation
A distinct $(S_i, Z_i)$ is assigned to each output channel (column) of the weight matrix. This is the standard for weights in LLMs because it aligns with the dot-product operation. Each output neuron effectively computes a dot product with its own unique scaling factor. This significantly reduces error without changing the GEMM implementation complexity significantly.

## 4.3 Per-Token (Per-Row) Quantisation
This is typically used for activations. Since activation magnitudes vary dynamically depending on the input token, calculating scale factors for each token (row of $X$) is essential for accuracy. This is technically more challenging because the scale factors must be computed "on the fly" during inference (Dynamic Quantisation), whereas weight scales can be pre-computed.

## 4.4 Group-wise Quantisation
The weight matrix is split into small groups (e.g., 128 consecutive elements). Each group gets its own scale and zero-point. This is a refinement of per-channel quantisation.

* **Motivation:** Even within a single channel, weight distributions can vary.
* **Implementation:** The matrix is reshaped from $[C_{out}, C_{in}]$ to $[C_{out}, C_{in}/G, G]$. Scales are computed for the last dimension.
* **Impact:** This is highly effective for LLMs because it localises the impact of outliers. Modern 4-bit methods like QLoRA and GPTQ rely heavily on group-wise quantisation (often with block size 128) to maintain accuracy at low bit-widths.


# 5 - Levels of Quantisation Implementation

There are two primary paradigms for applying quantisation to neural networks: Post-Training Quantisation (PTQ) and Quantisation-Aware Training (QAT). The choice between them represents a fundamental trade-off between implementation cost and model performance.

## 5.1 Post-Training Quantisation (PTQ)
PTQ is the process of quantising a pre-trained model without re-training (optimising via gradients). It involves:

1.  **Calibration:** Running a small subset of data (e.g., 128 sequences from C4 or WikiText) through the model to collect statistics ($x_{min}, x_{max}$) for activations.
2.  **Conversion:** Computing $S$ and $Z$ and converting weights.

* **Advantages:** Extremely fast and requires little data. Essential for massive LLMs (e.g., 175B parameters) where re-training is computationally prohibitive.
* **Disadvantages:** Can lead to significant accuracy drop if the precision loss is too high, especially for lower bit-widths (4-bit or 2-bit). Most modern advancements (GPTQ, AWQ) are advanced forms of PTQ that use optimisation algorithms to minimise the PTQ error.

## 5.2 Quantisation-Aware Training (QAT)
QAT simulates the effects of quantisation during the training (or fine-tuning) process. The forward pass simulates the rounding and clamping, allowing the model to adapt its weights to minimise the loss incurred by this noise.

**The Straight-Through Estimator (STE)**
A mathematical challenge in QAT is that the Round and Clamp functions are non-differentiable (their gradients are 0 almost everywhere). To allow backpropagation, QAT uses the Straight-Through Estimator (STE).
Mathematically, for a quantisation function $Q(x)$:

$$\frac{\partial L}{\partial x} \approx \frac{\partial L}{\partial Q(x)}$$

The STE essentially passes the gradient through the quantisation block unchanged (or clipped), ignoring the fact that the derivative of Round is zero. This approximation works surprisingly well in practice.
For LLMs, full QAT is rare due to cost. However, techniques like QLoRA can be seen as a hybrid, where adapters are trained while the base model is quantised. Furthermore, recent research into "1-bit LLMs" like BitNet necessitates QAT because the perturbation from FP16 to 1-bit is too large for PTQ to handle.

## 5.3 Comparative Summary
The following table summarizes the trade-offs between these two paradigms:

| Feature                   | Post-Training Quantisation (PTQ)                 | Quantisation-Aware Training (QAT)                   |
| :------------------------ | :----------------------------------------------- | :-------------------------------------------------- |
| **Workflow**              | Applied to a fully trained model; no retraining. | Simulates quantization during training/fine-tuning. |
| **Computational Cost**    | Low; requires only calibration steps.            | High; requires full or partial retraining.          |
| **Data Requirement**      | Small, representative calibration dataset.       | Large, representative training dataset.             |
| **Accuracy Preservation** | Moderate; can degrade at $\le$4-bit.             | High; model learns to compensate for noise.         |
| **Best Use Case**         | Rapid deployment, limited resources.             | Accuracy-critical applications, aggressive low-bit. |


# 6 - The Outlier Challenge in LLMs

A nuanced understanding of LLM quantisation requires addressing the "Outlier Problem". Research  has shown that Transformer-based LLMs exhibit heavy-tailed distributions in their activations.

## 6.1 Emergent Features
As models scale (specifically beyond 6.7B parameters), extreme outliers emerge in the feature dimensions (activations). These outliers are not random; they are systematic and persist in specific channels across tokens. Magnitudes can be $100\times$ larger than the median value. These features are often associated with attention heads performing specific syntactic functions (e.g., identifying separators).

## 6.2 The Impact on Quantisation
Recall the scale formula: $S = \frac{x_{max} - x_{min}}{2^n - 1}$.
If $x_{max}$ is driven by a single outlier (e.g., 100) while the majority of data is in $[-1, 1]$, the scale $S$ becomes very large. This collapses the small, informative values (the signal) into just one or two quantisation bins (e.g., 0 and 1). This loss of resolution destroys the model's performance (perplexity explosion).
Standard uniform quantisation fails for LLMs because of these activation outliers. The following sections detail modern algorithms designed specifically to solve this.


# 7 - Deep Dive: Modern Quantisation Algorithms

This section analyses the specific mathematical and algorithmic innovations in current SOTA methods.

## 7.1 LLM.int8(): Mixed-Precision Decomposition
**Problem:** Activation outliers destroy INT8 accuracy at scale (>6.7B params).
**Solution:** Do not quantise the outliers.
**Mechanism:**
LLM.int8()  introduces a dynamic decomposition of the matrix multiplication.
Let $X \in \mathbb{R}^{T \times h}$ be the input activation and $W \in \mathbb{R}^{h \times d}$ be the weight.

1.  **Outlier Detection:** Identify columns in $X$ where values exceed a threshold $\alpha$ (e.g., $\alpha=6.0$). Let these indices be $O = \{i \mid |X_{:,i}| > \alpha\}$.
2.  **Decomposition:** Split $X$ and $W$ into two parts:
    * $X_{out} = X_{:, O}$ (Outlier features, high precision)
    * $X_{int} = X_{:, \neg O}$ (Regular features, quantisable)
    * $W_{out} = W_{O, :}$
    * $W_{int} = W_{\neg O, :}$
3.  **Mixed Calculation:**

$$Y = \text{MatMul}_{FP16}(X_{out}, W_{out}) + \text{MatMul}_{INT8}(Q(X_{int}), Q(W_{int}))$$

![alt text]({BASE}/image-4.png)

> LLM.int8() Matrix Decomposition. The input matrix is analyzed for outliers (shown in red). Columns containing outliers are separated into a sparse FP16 matrix. The remaining regular values (blue) are quantised to INT8. The matrix multiplications happen separately and are summed.


**Key Insight:** The number of outlier channels is extremely small (< 0.1%). Thus, 99.9% of the computation is done in INT8, yielding speed and memory benefits, while the 0.1% crucial for accuracy remains in FP16. This was the first method to enable 175B model inference on consumer hardware without performance degradation. The computational cost of separating the matrices is non-trivial, which can sometimes make inference slower than pure FP16 on very fast GPUs, despite the memory savings.

## 7.2 GPTQ: Optimal Brain Quantisation (OBQ)
**Problem:** Round-to-nearest (RTN) is not the optimal way to quantise weights. Quantising one weight introduces an error that could be compensated for by adjusting neighbouring unquantised weights.
**Theory:**
GPTQ  is based on the Taylor expansion of the loss function with respect to the weights. We want to minimise the squared error between the output of the full-precision layer and the quantised layer:

$$E = \| WX - \hat{W}X \|_2^2$$

The Hessian matrix $H = 2XX^T$ represents the curvature of this error surface. The optimal adjustment to a weight $w_q$ involves the inverse Hessian $H^{-1}$.
**Algorithm:**
GPTQ quantises weights column-by-column. When a weight $w_i$ is quantised to $q(w_i)$, the error is $\delta = q(w_i) - w_i$. To minimise the total error, GPTQ updates the remaining unquantised weights $W_F$ using the inverse Hessian:

$$\delta_F = - \frac{w_i - q(w_i)}{[H^{-1}]_{ii}} \cdot (H^{-1})_{:, i}$$

This equation dictates how the "damage" from quantising one weight should be "repaired" by shifting all other weights.
**Innovation:**
Calculating $H^{-1}$ and updating it iteratively is $O(d^3)$. For a 175B model, this is too slow. GPTQ introduces:

1.  **Lazy Batch Updates:** Instead of updating the whole matrix after every weight, update a block of columns (e.g., 128) at a time.
2.  **Cholesky Decomposition:** Utilises Cholesky decomposition for numerically stable and efficient inverse Hessian information.

**Result:** GPTQ enables high-accuracy 3-bit and 4-bit weight quantisation, compressing a 175B model to fit on 2x A100s or even fewer, with perplexity nearly identical to FP16. It requires calibration data to estimate the Hessian (usually just 128 samples).

## 7.3 AWQ: Activation-aware Weight Quantisation
**Problem:** GPTQ relies on the Hessian (requiring second-order information and inverse calculation) and can optimise weights based on calibration data, but it treats all weights as theoretically updateable. Some weights are simply more important ("salient") than others.
**Key Insight:** Weights are not equally important. The importance of a weight $w$ is not defined by its own magnitude, but by the magnitude of the activation $x$ it multiplies. A weight multiplying a large activation contributes significantly to the output error.
**Mechanism:**
AWQ does not quantise the salient weights (top 1%) directly. However, keeping mixed precision (FP16 for 1% weights, INT4 for rest) is hardware inefficient (requires splitting kernels like LLM.int8()).
Instead, AWQ uses Activation-aware Scaling.
It searches for a scaling factor $s > 1$ to apply to the salient channels in the activation $X$. To preserve mathematical equivalence ($Y = XW$), the corresponding weights $W$ must be scaled by $1/s$.

$$Y = (X \cdot s) \cdot (W \cdot \frac{1}{s})$$

The activations $X$ are scaled up (making them larger).
The weights $W$ are scaled down (making them smaller).
Why does this help? When $W$ is scaled down ($W' = W/s$), and then quantised, the relative error of quantisation decreases for these salient weights. The optimal $s$ is found via a grid search to minimise the quantisation error of the layer output.

$$s^* = \operatorname*{argmin}_s \| Q(W \cdot s^{-1}) \cdot (X \cdot s) - WX \|_2^2$$

AWQ is widely used because it preserves the hardware-friendly uniform quantisation format (no mixed INT8/FP16 kernels needed during inference) while achieving high accuracy.

## 7.4 SmoothQuant: Smoothing Activation Outliers
**Problem:** Activations are hard to quantise due to outliers (range $[-100, 100]$). Weights are easy to quantise (range $[-1, 1]$).
**Solution:** Migrate the difficulty from activations to weights.
**Mechanism:**
SmoothQuant performs a mathematically equivalent transformation offline.

$$Y = XW = (X \text{diag}(s)^{-1}) \cdot (\text{diag}(s) W) = \hat{X} \hat{W}$$

Where $s$ is a smoothing scale vector.
Ideally, we want $\hat{X}$ to have no outliers. We achieve this by dividing the activation channel $j$ by $s_j$. To keep the multiplication valid, we multiply the weight row $j$ by $s_j$.
The migration strength $\alpha$ controls how much difficulty is moved:

$$s_j = \max(|X_j|)^\alpha / \max(|W_j|)^{1-\alpha}$$

If $\alpha = 0.5$, the "difficulty" (magnitude) is shared equally.
This squashes the activation outliers, making $X$ easy to quantise to INT8. The weights $W$ become "spikier", but since weights are quantised offline with high precision or per-channel granularity, they can handle it.
This enables W8A8 (8-bit Weight, 8-bit Activation) quantisation, which is the holy grail for speed, as it allows fully integer GEMM operations (unlike weight-only quantisation which still requires FP16 math for the accumulation).

## 7.5 QLoRA: 4-bit NormalFloat and Double Quantisation
**Problem:** Fine-tuning large models requires loading the full FP16 weights into memory (e.g., 65B model -> 130GB), plus gradient states.
**Solution:** Keep the base model frozen in 4-bit, and fine-tune only a Low-Rank Adapter (LoRA).
**Innovations:**

* **4-bit NormalFloat (NF4):** Standard uniform quantisation assumes a uniform distribution. Neural network weights follow a Normal (Gaussian) distribution. NF4 is an information-theoretically optimal data type based on quantile quantisation. The quantisation levels correspond to the quantiles of the Normal distribution ($N(0, 1)$). This minimizes the error for Gaussian weights better than uniform integers. The quantisation levels $q_i$ are derived from the quantiles of the standard normal distribution.

    $$q_i = \frac{1}{2} \left( Q_X\left(\frac{i}{2^k + 1}\right) + Q_X\left(\frac{i + 1}{2^k + 1}\right) \right)$$

    This ensures that each bin has an equal expected number of values, maximizing the information content (entropy) of the 4-bit code.

* **Double Quantisation:** The quantisation constants ($S$) for the blocks themselves take up memory (32-bit floats). QLoRA quantises these constants (e.g., from FP32 to FP8). This "quantisation of quantisation constants" saves roughly 0.37 bits per parameter. For a 65B parameter model, this small saving accumulates to approximately 3GB of VRAM.
* **Paged Optimizers:** Using NVIDIA Unified Memory to offload optimizer states to CPU RAM when VRAM spikes.

**Empirical Validation and Limitations**
QLoRA allows fine-tuning a 65B parameter model on a single 48GB GPU. Empirical evaluations demonstrate its effectiveness: the Guanaco family of models, fine-tuned using QLoRA, achieved 99.3% of ChatGPT's performance on the Vicuna benchmark with a 65B model, using far fewer resources than full fine-tuning.
However, QLoRA has limitations. It is unsuitable for tasks requiring substantial new knowledge injection, such as Continual Pre-training (CPT), as low-rank adapters cannot capture the large parameter shifts needed for learning vast amounts of new factual information. Additionally, the on-the-fly dequantization adds computational overhead, potentially slowing down training compared to full-precision methods.

## 7.6 Summary of Algorithm Characteristics
The following table summarises the key attributes of these modern quantisation algorithms.

| Feature                 | LLM.int8()                           | GPTQ                             | AWQ                      | SmoothQuant                | QLoRA                          |
| :---------------------- | :----------------------------------- | :------------------------------- | :----------------------- | :------------------------- | :----------------------------- |
| **Primary Mechanism**   | Mixed Precision (Outlier Separation) | Hessian-based Error Minimisation | Activation-aware Scaling | Activation Smoothing       | NormalFloat Data Type          |
| **Quantisation Target** | Weight & Activation (INT8)           | Weight Only (INT4/3)             | Weight Only (INT4)       | Weight & Activation (INT8) | Weight Only (INT4)             |
| **Inference Hardware**  | Standard GPUs (slow due to split)    | Efficient Custom Kernels         | Efficient Custom Kernels | Integer GEMM Units         | Efficient Dequant Kernels      |
| **Calibration Needed?** | No (Dynamic)                         | Yes (Hessian)                    | Yes (Scaling Search)     | Yes (Smoothing Factor)     | No (Data Type Fixed)           |
| **Key Strength**        | Accuracy at Scale (>6.7B)            | High Compression (4-bit)         | Hardware Efficiency      | GenSpeed (W8A8 GEMM)       | Training/Finetuning Efficiency |


# 8 - Empirical Performance Analysis

Quantifying the trade-off between efficiency and accuracy is central to deployment decisions. Empirical analysis reveals distinct trends in how quantisation impacts model performance.

## 8.1 The 4-bit "Sweet Spot" and Performance Cliffs
Research consistently indicates that 4-bit quantisation represents an optimal balance point for modern LLMs. Sophisticated algorithms (like GPTQ and AWQ) allow 4-bit models to retain performance highly comparable to 16-bit baselines. However, a "performance cliff" is often observed below 4 bits, where moving to 3-bit or 2-bit precision causes sharp accuracy degradation.

## 8.2 Quantisation as Regularization
Counter-intuitively, quantisation can sometimes improve performance over the full-precision baseline. The lossy nature of quantisation introduces noise that acts as a form of regularization, preventing overfitting and potentially helping the optimization process escape poor local minima.

## 8.3 Performance Comparison Table
The following data synthesizes performance across various models and methods:

| Model         | Baseline | Method          | Benchmark  | Baseline Score | Quantised Score | Recovery |
| :------------ | :------- | :-------------- | :--------- | :------------- | :-------------- | :------- |
| Llama-3 8B    | BF16     | PTQ (INT8/INT4) | HellaSwag  | 82.5           | 81.9            | 96%      |
| Qwen-72B      | BF16     | GPTQ 4-bit      | Avg. Acc   | 71.76          | 71.38           | ~99%     |
| Llama-3 70B   | FP16     | AWQ 4-bit       | MATH (Acc) | 50.15          | 44.47           | 89%      |
| Llama-3 70B   | FP16     | GPTQ 4-bit      | MATH (Acc) | 50.15          | 40.52           | 81%      |
| Various (70B) | FP16     | W8A8            | HumanEval  | ~76.0          | ~75.9           | 99.9%    |

Source: Synthesized from recent empirical studies.$^{28, 31, 32, 33}$


# 9 - Comparative Analysis against Other Compression Approaches

While quantisation is the dominant technique for LLM deployment, it exists alongside Pruning and Distillation.

## 9.1 Quantisation vs. Pruning
Pruning involves setting weight values to zero.

* **Unstructured Pruning:** Zeros out individual weights. This creates sparse matrices.
    * *Analysis:* While theoretically reducing FLOPs, standard hardware (GPUs) cannot efficiently accelerate unstructured sparsity. It often leads to slower inference due to memory fragmentation and lack of cache locality.
* **Structured Pruning (N:M Sparsity):** Removes entire channels or adheres to patterns (e.g., NVIDIA's 2:4 sparsity).
    * *Analysis:* Hardware supported (Ampere architecture), but aggressive structured pruning (e.g., 50%) often degrades LLM accuracy more severely than 4-bit quantisation.
* **Comparison:** Quantisation (e.g., 4-bit) reduces memory by 4x and bandwidth by 4x consistently. Pruning is harder to control and optimise for hardware. Modern trends favour quantisation.

## 9.2 Quantisation vs. Distillation
Distillation trains a smaller "student" model to mimic a larger "teacher" model.

* **Analysis:** Distillation requires expensive training (retraining the student on massive datasets). Quantisation (PTQ) is calibration-based and takes minutes/hours.
* **Complexity:** Distillation changes the model architecture. Quantisation preserves the architecture but changes the datatype.
* **Combination:** Distillation and Quantisation are orthogonal. One can distill a large model into a smaller one, and then quantise the smaller one for maximum efficiency.

## 9.3 Summary Table

| Feature              | Quantisation (PTQ)   | Unstructured Pruning         | Structured Pruning     | Knowledge Distillation |
| :------------------- | :------------------- | :--------------------------- | :--------------------- | :--------------------- |
| **Primary Goal**     | Reduce Precision     | Remove Weights               | Remove Structures      | Architecture Reduction |
| **Training Cost**    | Low (Calibration)    | High (Retraining)            | High (Retraining)      | Very High (Retraining) |
| **Hardware Speedup** | High (Tensor Cores)  | Low (without specialized HW) | Moderate (2:4 support) | High (Smaller Model)   |
| **Memory Reduction** | 2x - 4x - 8x         | Sparse (needs compression)   | Moderate               | High                   |
| **LLM Suitability**  | Excellent (GPTQ/AWQ) | Good (SpQR)                  | Moderate               | Moderate (Data hungry) |


# 10 - Hardware Implications: The Roofline Model

To understand why quantisation is so effective for LLMs, one must apply the Roofline Model.
Performance (FLOPs/s) is limited by either:

1.  **Compute Bound:** The peak arithmetic capability of the chip.
2.  **Memory Bandwidth Bound:** The speed at which data can be moved from VRAM to the compute units.

**The Insight:** LLM generation (decoding) is an auto-regressive process. It generates one token at a time. This involves loading the entire weight matrix $W$ to multiply with a single token vector $x$.
Arithmetic Intensity = Ops / Bytes $\approx$ 1 (very low).
LLM inference is almost always Memory Bandwidth Bound.
Quantisation from FP16 (16-bit) to INT4 (4-bit) reduces the data size by $4\times$. This effectively quadruples the memory bandwidth available to the weights, leading to a theoretical $4\times$ speedup in token generation, even if the compute unit speed remains constant. This explains why 4-bit quantisation is the industry standard for LLM serving.


# 11 - Conclusion

Quantisation has evolved from a simple signal processing technique into the linchpin of modern Large Language Model deployment. The transition from naive rounding to sophisticated, optimization-based methods like GPTQ, AWQ, and QLoRA reflects a deeper understanding of the distinct statistical properties of Transformer models—specifically, the challenge of activation outliers and the resilience of weights to noise.
The mathematical theory underpinning these advancements relies on affine transformations, Hessian-based error minimisation, and information-theoretic optimal data types. For the Master's level practitioner, the key takeaway is that quantisation is not merely "lossy compression"; it is a transformation of the compute paradigm from memory-bound floating-point operations to bandwidth-efficient integer arithmetic.
Future research points toward 1-bit LLMs (e.g., BitNet ) and the co-design of quantization-aware hardware accelerators. Additionally, understanding the impact of quantisation on Alignment and Safety remains a critical frontier.

# References

1. Dettmers, T., Lewis, M., Belkada, Y., & Zettlemoyer, L. (2022).
   [**LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale**](https://arxiv.org/abs/2208.07339). ([arXiv][8])

2. Xiao, G., Zhang, X., Han, S., & others (2023).
   [**SmoothQuant: Accurate and Efficient Post-Training Quantization for Large Language Models**](https://arxiv.org/abs/2211.10438). ([arXiv][9])

3.  Yuan, Z., Niu, L., Liu, J., Liu, W., Wang, X., Shang, Y., … Wu, B. (2023).
    [**RPTQ: Reorder-based Post-training Quantization for Large Language Models**](https://arxiv.org/abs/2304.01089). ([arXiv][10])

4.  Frantar, E., Ashkboos, S., Hoefler, T., & Alistarh, D. (2022).
    [**GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers**](https://arxiv.org/abs/2210.17323). ([arXiv][11])

5.  Lin, J., Tang, T., Yang, Y., Guo, Y., Wu, X., & others (2023).
    [**AWQ: Activation-aware Weight Quantization for LLMs**](https://arxiv.org/abs/2306.00978). ([ResearchGate][12])

6.  Dettmers, T., Pagnoni, A., Holtzman, A., & Zettlemoyer, L. (2023).
    [**QLoRA: Efficient Finetuning of Quantized LLMs**](https://arxiv.org/abs/2305.14314). ([arXiv][13])

7.  Chee, J., Dao, T., Frantar, E., & Alistarh, D. (2023).
    [**QuIP: 2-Bit Quantization of Large Language Models with Guarantees**](https://arxiv.org/abs/2307.13380). ([arXiv][14])

8.  Dettmers, T., Svirschevski, R. A., Egiazarian, V., Kuznedelev, D., Frantar, E., Ashkboos, S., … Alistarh, D. (2024).
    [**SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression**](https://arxiv.org/abs/2306.03078). ([arXiv][15])

9.  Li, Z., Sun, M., Zhang, X., & Han, S. (2023).
    [**Outlier Suppression+: Accurate Quantization of Large Language Models by Equivalent and Optimal Transformation**](https://arxiv.org/abs/2309.15531). ([GitHub][16])

10. Liu, Z., Li, Z., Lee, Y., You, Y., Denil, M., & Han, S. (2024).
    [**Rotated Runtime Smooth: Training-free Activation Smoothing for Accurate INT4 LLM Inference**](https://arxiv.org/abs/2409.20361). ([ResearchGate][17])

11. Wang, S., Xiao, G., Li, C., Liang, Y., & Han, S. (2024).
    [**BitNet: Scaling 1-bit Transformers for Large Language Models**](https://arxiv.org/abs/2402.17764). ([arXiv][18])

12. Chee, J., Dao, T., Frantar, E., & Alistarh, D. (2023).
    [**QuIP: 2-Bit Quantization of Large Language Models with Guarantees**](https://arxiv.org/abs/2307.13380). ([arXiv][14])

13. Frantar, E., Singh, S. P., & Alistarh, D. (2022).
    [**Optimal Brain Compression: A Framework for Accurate Post-Training Quantization and Pruning**](https://arxiv.org/abs/2208.11580). ([ar5iv][19])

