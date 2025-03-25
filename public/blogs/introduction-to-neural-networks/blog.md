- [**1. Neural Network Fundamentals**](#1-neural-network-fundamentals)
  - [**1.1 Introduction to Artificial Neural Networks**](#11-introduction-to-artificial-neural-networks)
  - [**1.2 Biological Inspiration**](#12-biological-inspiration)
  - [**1.3 Basic Components and Structure**](#13-basic-components-and-structure)
      - [**Example of basic computation in a neuron:**](#example-of-basic-computation-in-a-neuron)
- [**2. Perceptrons and Single-Layer Networks**](#2-perceptrons-and-single-layer-networks)
  - [**2.1 Perceptron Structure**](#21-perceptron-structure)
  - [**2.2 Transfer/Threshold Functions**](#22-transferthreshold-functions)
    - [**Sign Function**](#sign-function)
    - [**Step Function**](#step-function)
    - [**Sigmoid Function**](#sigmoid-function)
    - [**Hyperbolic Tangent ($\\tanh$) Function**](#hyperbolic-tangent-tanh-function)
  - [**2.3 Linearly Separable Functions**](#23-linearly-separable-functions)
    - [**AND Function**](#and-function)
    - [**OR Function**](#or-function)
    - [**Example**](#example)
  - [**2.4 Training Methods**](#24-training-methods)
    - [**2.4.1 Error Correction Method / Perceptron Learning Rule**](#241-error-correction-method--perceptron-learning-rule)
      - [**Example:**](#example-1)
    - [**2.4.2 Delta Rule / Widrow-Hoff Learning Rule / Least Mean Square Rule**](#242-delta-rule--widrow-hoff-learning-rule--least-mean-square-rule)
      - [**Example:**](#example-2)
    - [**2.4.3 Generalised Delta Rule**](#243-generalised-delta-rule)
      - [**Example with sigmoid transfer function:**](#example-with-sigmoid-transfer-function)
  - [**2.5 Limitations of Single-Layer Networks**](#25-limitations-of-single-layer-networks)
- [**3. Multi-Layer Networks**](#3-multi-layer-networks)
  - [**3.1 Structure and Function**](#31-structure-and-function)
  - [**3.2 Representational Power**](#32-representational-power)
  - [**3.3 Non-linearity**](#33-non-linearity)
- [**4. Backpropagation**](#4-backpropagation)
  - [**4.1 Gradient Descent in Neural Networks**](#41-gradient-descent-in-neural-networks)
  - [**4.2 Weight Updates**](#42-weight-updates)
    - [**4.2.1 Hidden to Output Layer**](#421-hidden-to-output-layer)
      - [**Example calculation**:](#example-calculation)
    - [**4.2.2 Input to Hidden Layer**](#422-input-to-hidden-layer)
      - [**Example calculation**:](#example-calculation-1)
  - [**4.3 Backpropagation Example**](#43-backpropagation-example)
    - [**Forward Pass Calculation:**](#forward-pass-calculation)
    - [**Backward Pass Calculation:**](#backward-pass-calculation)
  - [**4.4 Training Considerations**](#44-training-considerations)
    - [**Local vs Global Minima**](#local-vs-global-minima)
    - [**Function Approximation**](#function-approximation)
    - [**Practical Implementation Considerations**](#practical-implementation-considerations)
  - [**4.5 Epochs, Batches, and Iterations**](#45-epochs-batches-and-iterations)
    - [**Training Approaches**](#training-approaches)
- [**5. Preventing Overfitting**](#5-preventing-overfitting)
  - [**5.1 Generalisation Techniques**](#51-generalisation-techniques)
    - [**Validation Set Approach**](#validation-set-approach)
    - [**Weight Decay**](#weight-decay)
  - [**5.2 Early Stopping**](#52-early-stopping)
  - [**5.3 Network Structure Modifications**](#53-network-structure-modifications)
    - [**Limiting Network Complexity**](#limiting-network-complexity)
    - [**Dynamic Structure Modification**](#dynamic-structure-modification)
    - [**Ensemble Methods**](#ensemble-methods)
    - [**Training Tips for Better Generalisation**](#training-tips-for-better-generalisation)
- [**6. Advanced Neural Networks**](#6-advanced-neural-networks)
  - [**6.1 Deep Neural Networks**](#61-deep-neural-networks)
  - [**6.2 Vanishing Gradient Problem**](#62-vanishing-gradient-problem)
    - [**Cause of Vanishing Gradients**](#cause-of-vanishing-gradients)
    - [**Solutions to the Vanishing Gradient Problem**](#solutions-to-the-vanishing-gradient-problem)
  - [**6.3 Convolutional Neural Networks (CNN)**](#63-convolutional-neural-networks-cnn)
    - [**Motivation for CNNs**](#motivation-for-cnns)
    - [**CNN Architecture**](#cnn-architecture)
  - [**6.4 Recurrent Neural Networks (RNN)**](#64-recurrent-neural-networks-rnn)
    - [**RNN Architecture**](#rnn-architecture)
    - [**RNN Variations**](#rnn-variations)
    - [**RNN Applications**](#rnn-applications)
  - [**6.5 ChatGPT and Large Language Models**](#65-chatgpt-and-large-language-models)
    - [**Evolution of Language Models**](#evolution-of-language-models)
    - [**Transformer Architecture**](#transformer-architecture)


# **1. Neural Network Fundamentals**

## **1.1 Introduction to Artificial Neural Networks**

**Artificial Neural Networks (ANNs)** are mathematical functions that can produce approximations of real values, discrete values (integer or categorical), or vectors of values. They're built out of a densely interconnected set of units where each unit takes real-valued inputs (possibly the outputs of other units) and produces a single real-valued output (which may become the input to other units).

ANNs are particularly useful for:
- Pattern recognition
- Classification tasks
- Function approximation
- Data processing
- Robotics
- Control systems


## **1.2 Biological Inspiration**

ANNs were inspired by biological neurons and their connectionist nature in the human brain:

- The human brain contains approximately $10^{11}$ neurons and $10^{15}$ synapses, with a cycle time of $10^{-3}$ seconds
- Biological neurons have dendrites that receive signals, a cell body (soma) that processes them, and an axon that transmits signals to other neurons
- **Synapses** are junctions that allow signal transmission between neurons and may be excitatory or inhibitory
- When inputs reach a threshold, an **action potential** (electrical pulse) is sent along the axon to outputs

While inspired by biological neurons, ANNs have many simplifications and inconsistencies:
- ANNs output a single value, whereas biological neurons output complex time series of spikes
- ANNs use simplified mathematical models rather than detailed biochemical processes

There have been two main directions in neural network research:
1. Trying to simulate how the human brain works (modeling the process)
2. Producing machine learning methodologies (modeling the outcome without mimicking the process)

![alt text](/blogs/introduction-to-neural-networks/blogs/img/image.png)

> Showing applications of neural networks

## **1.3 Basic Components and Structure**

The fundamental building block of an ANN is a **neuron** (also called a node or unit). Neural network nodes have:

- **Input edges**, each with an associated weight
- **Output edges** (with weights)
- An **activation level** (function of inputs)
- A **transfer/activation function**

The key components and their relationships are:

1. **Weights**: Connection strengths between neurons that can be positive or negative and may change during learning

2. **Input function**: Typically calculated as the weighted sum of inputs:
   $$s_j = \sum_{i=1}^{N} (w_{i,j} \times x_i)$$
   Where:
   - $s_j$ is the input to neuron $j$
   - $w_{i,j}$ is the weight from input $i$ to neuron $j$
   - $x_i$ is the value of input $i$
   - $N$ is the number of inputs

3. **Activation function**: A non-linear function $g$ applied to the input sum:
   $$\text{activation}_j = g(s_j) = g\left(\sum_{i=1}^{N} (w_{i,j} \times x_i)\right)$$

4. **Network structure**: ANNs typically have:
   - An **input layer** that receives external data
   - One or more **hidden layers** for processing
   - An **output layer** that produces the final result

   ![alt text](/blogs/introduction-to-neural-networks/img/image-1.png)

   > Showing a feedforward network structure

5. **Bias**: Most neurons include a bias term that allows shifting the activation function:
   $$s_j = w_{0,j} + \sum_{i=1}^{N} (w_{i,j} \times x_i)$$
   Where:
   - $w_{0,j}$ is the bias term (often implemented by setting $x_0 = 1$)

#### **Example of basic computation in a neuron:**

Let's consider a neuron with 3 inputs: $x_1 = 0.5$, $x_2 = 1.0$, $x_3 = -0.5$
With weights: $w_1 = 0.4$, $w_2 = 0.8$, $w_3 = -0.3$, and bias $w_0 = 0.2$

The input sum would be:
$$s = w_0 + (w_1 \times x_1) + (w_2 \times x_2) + (w_3 \times x_3)$$
$$s = 0.2 + (0.4 \times 0.5) + (0.8 \times 1.0) + (-0.3 \times (-0.5))$$
$$s = 0.2 + 0.2 + 0.8 + 0.15 = 1.35$$

If using a sigmoid activation function 
$$g(s) = \frac{1}{1+e^{-s}}$$

the output would be:
$$g(1.35) = \frac{1}{1+e^{-1.35}} \approx 0.794$$

# **2. Perceptrons and Single-Layer Networks**

## **2.1 Perceptron Structure**

A **perceptron** is the simplest type of artificial neural network, consisting of a single neuron. It was one of the earliest models of neural networks developed in the 1950s.

The perceptron takes several binary inputs and produces a single binary output based on a weighted sum of the inputs. The structure includes:

- A set of inputs ($x_1, x_2, ..., x_n$)
- Associated weights ($w_1, w_2, ..., w_n$)
- A **bias** weight ($w_0$) with constant input $x_0 = 1$
- A **threshold** (th) that determines when the perceptron activates

![alt text](/blogs/introduction-to-neural-networks/img/image-2.png)

> Showing perceptron structure with inputs, weights, and output

The perceptron computes the weighted sum of inputs plus the bias term:

$$s = (w_0 \times x_0) + (w_1 \times x_1) + (w_2 \times x_2) + ... + (w_n \times x_n) = \sum_{i=0}^{n} (w_i \times x_i)$$

Where:
- $s$ is the weighted sum
- $w_i$ are the weights
- $x_i$ are the inputs
- $w_0$ is often represented as a bias weight with $x_0 = 1$

This sum is then passed through a threshold function to produce the output:

$$\text{output} = g(s)$$

## **2.2 Transfer/Threshold Functions**

The **transfer function** (also called **threshold** or **activation function**) determines the output of the perceptron based on the weighted sum of inputs. Common transfer functions include:

### **Sign Function**
$$g(s) = 
\begin{cases}
1, & \text{if } s > 0 \\
-1, & \text{if } s < 0
\end{cases}$$

The output is either 1 or -1 depending on the input. This can be used for binary classification where:
- If the total input is positive, the sample is assigned to class 1
- If the total input is negative, the sample is assigned to class -1

![alt text](/blogs/introduction-to-neural-networks/img/image-6.png)

*The continuous version of the sign function is the hyperbolid tangent function*

### **Step Function**
$$g(s) = 
\begin{cases}
1, & \text{if } s \geq t \\
0, & \text{if } s < t
\end{cases}$$

Where:
- $t$ is a threshold value (often 0).

![alt text](/blogs/introduction-to-neural-networks/img/image-5.png)

*The continuous version of the sign function is the sigmoid function*


### **Sigmoid Function**
$$g(s) = \frac{1}{1 + e^{-s}}$$

![alt text](/blogs/introduction-to-neural-networks/img/image-4.png)

> Sigmoid function

The sigmoid function has several advantages:
- Maps any real-valued number into the range (0, 1) - useful for representing probability
- Nearly linear around 0 but flattens toward the ends - squashes outlier values toward 0 or 1
- Differentiable, which is important for training algorithms

With the sigmoid function, we have the partial derivative:
$$\frac{\partial g(s)}{\partial s} = g(s)(1 - g(s))$$

This derivative is key for training algorithms like backpropagation.

### **Hyperbolic Tangent ($\tanh$) Function**
$$g(s) = \tanh(s) = \frac{e^s - e^{-s}}{e^s + e^{-s}} = 2\left(\frac{1}{1 + e^{-2s}}\right) - 1$$

Similar to the sigmoid, but outputs values in the range $[-1, 1]$ instead of $[0, 1]$.

![alt text](/blogs/introduction-to-neural-networks/img/image-3.png)

> Hyperbolid tangent $\tanh$ function


## **2.3 Linearly Separable Functions**

A **linearly separable function** is one where the input space can be divided by a hyperplane (a line in 2D, a plane in 3D, etc.) such that all inputs on one side of the hyperplane are in one class, and all inputs on the other side are in the other class.

![alt text](/blogs/introduction-to-neural-networks/img/image-7.png)

A single perceptron can only compute linearly separable functions. This is both a strength (simplicity) and a limitation (can't solve more complex problems).

For a perceptron with weights $w_0, w_1, ..., w_n$, the decision boundary is defined by:
$$w_0 + w_1x_1 + w_2x_2 + ... + w_nx_n = 0$$

Examples of linearly separable functions that a perceptron can compute:

### **AND Function**
With weights $w_1 = w_2 = 1.0$ and bias $w_0 = -1.5$:

| $x_1$ | $x_2$ | $s = w_0 + w_1x_1 + w_2x_2$ | $g(s)$ (Step function) |
| ----- | ----- | --------------------------- | ---------------------- |
| 0     | 0     | $-1.5 + 0 + 0 = -1.5$       | 0                      |
| 0     | 1     | $-1.5 + 0 + 1 = -0.5$       | 0                      |
| 1     | 0     | $-1.5 + 1 + 0 = -0.5$       | 0                      |
| 1     | 1     | $-1.5 + 1 + 1 = 0.5$        | 1                      |

![alt text](/blogs/introduction-to-neural-networks/img/image-8.png)

### **OR Function**
With weights $w_1 = w_2 = 1.0$ and bias $w_0 = -0.5$:

| $x_1$ | $x_2$ | $s = w_0 + w_1x_1 + w_2x_2$ | $g(s)$ (Step function) |
| ----- | ----- | --------------------------- | ---------------------- |
| 0     | 0     | $-0.5 + 0 + 0 = -0.5$       | 0                      |
| 0     | 1     | $-0.5 + 0 + 1 = 0.5$        | 1                      |
| 1     | 0     | $-0.5 + 1 + 0 = 0.5$        | 1                      |
| 1     | 1     | $-0.5 + 1 + 1 = 1.5$        | 1                      |

![alt text](/blogs/introduction-to-neural-networks/img/image-9.png)

### **Example**
If we have the following 2-dimensional examples from two classes:
- Class A: [-2 -2]; [2 2]
- Class B: [3 3]

We can use a perceptron to distinguish between them because the data is linearly separable.

However, for data that isn't linearly separable (like the XOR function), a single perceptron cannot correctly classify all points.


## **2.4 Training Methods**

The weights of a perceptron must be adjusted to solve a particular problem. There are three primary methods for training single-layer networks:
1. [Error Correction Method / Perceptron Learning Rule](#241-error-correction-method)
2. [Delta Rule](#242-delta-rule)
3. [Generalised Delta Rule](#243-generalised-delta-rule)

### **2.4.1 Error Correction Method / Perceptron Learning Rule**

The **error correction method/perceptron learning rule** adjusts weights based on the error between the desired output and the actual output.

**Algorithm:**
1. Begin with random weights
2. Repeat until stopping condition:
   - For each training example, update each weight by:
   $$w_i \leftarrow w_i + \Delta w_i$$
   $$\Delta w_i = \alpha(t - g(s))x_i$$

Where:
- $\alpha$ is the **learning rate** (controls how quickly weights change)
- $t$ is the target output (desired value)
- $g(s)$ is the actual output from the network
- $x_i$ is the input value

**Intuition behind the update rule:**
- If $t = g(s)$, no update is needed
- If $t > g(s)$ (perceptron outputs -1 when target is 1), increase weights associated with positive inputs
- If $t < g(s)$ (perceptron outputs 1 when target is -1), decrease weights associated with positive inputs

**Convergence Theorem:** If the boundary between classes is linear, and the learning rate $\alpha$ is small enough, the error correction method will find it within a finite number of steps, classifying all training examples correctly.

#### **Example:**

Let's consider a simple perceptron with two input features plus bias, using the error correction method with learning rate $\alpha = 0.5$ and step function $g(s) = \begin{cases} 1, & \text{if } s \geq 0 \\ 0, & \text{otherwise} \end{cases}$.

Initial weights: $w_0 = 0.5$ (bias), $w_1 = 1.0$, $w_2 = -0.5$

***Example 1: No update needed***

Input: $x_1 = 2$, $x_2 = 1$, desired output $t = 1$

Calculate weighted sum:
$s = w_0 \cdot 1 + w_1 \cdot x_1 + w_2 \cdot x_2$
$s = 0.5 \cdot 1 + 1.0 \cdot 2 + (-0.5) \cdot 1$
$s = 0.5 + 2.0 - 0.5 = 2.0$

Apply activation function:
$g(s) = 1$ (since $s \geq 0$)

Since $g(s) = t = 1$, no update is needed.

***Example 2: Update needed***

Input: $x_1 = 1$, $x_2 = 3$, desired output $t = 0$

Calculate weighted sum:
$s = w_0 \cdot 1 + w_1 \cdot x_1 + w_2 \cdot x_2$
$s = 0.5 \cdot 1 + 1.0 \cdot 1 + (-0.5) \cdot 3$
$s = 0.5 + 1.0 - 1.5 = 0.0$

Apply activation function:
$g(s) = 1$ (since $s \geq 0$)

Since $g(s) = 1$ and $t = 0$, update is needed:

$w_0 \leftarrow w_0 + \alpha(t - g(s)) \cdot 1$
$w_0 \leftarrow 0.5 + 0.5(0 - 1) \cdot 1$
$w_0 \leftarrow 0.5 - 0.5 = 0$

$w_1 \leftarrow w_1 + \alpha(t - g(s)) \cdot x_1$
$w_1 \leftarrow 1.0 + 0.5(0 - 1) \cdot 1$
$w_1 \leftarrow 1.0 - 0.5 = 0.5$

$w_2 \leftarrow w_2 + \alpha(t - g(s)) \cdot x_2$
$w_2 \leftarrow -0.5 + 0.5(0 - 1) \cdot 3$
$w_2 \leftarrow -0.5 - 1.5 = -2.0$

Updated weights: $w_0 = 0$, $w_1 = 0.5$, $w_2 = -2.0$

### **2.4.2 Delta Rule / Widrow-Hoff Learning Rule / Least Mean Square Rule**

The **delta rule/Widrow-Hoff learning rule/least mean square rule** is based on gradient descent and minimizes the squared error between the target output and the actual output.

The key difference from the error correction method is that the delta rule compares the target with the weighted sum $s$ directly, not with the thresholded output $g(s)$.

**Error function:**
$$E(w) = \frac{1}{2}\sum_{j=1}^{M}(t_j - s_j)^2$$

Where:
- $M$ is the number of training instances
- $t_j$ is the target value for instance $j$
- $s_j$ is the weighted sum output for instance $j$

This is effectively **linear regression**, as we're trying to find the weights that minimize the squared difference between the target and the weighted sum.

**Weight update rule:**
$$w_i \leftarrow w_i - \alpha \frac{\partial E}{\partial w_i}$$

After calculating the partial derivative, this simplifies to:
$$w_i \leftarrow w_i + \alpha(t - s)x_i$$

**Training approaches:**
1. **Batch gradient descent**: Sum errors over all training examples before adjusting weights
2. **Stochastic gradient descent**: Adjust weights after each example

#### **Example:**
Let's consider a simple perceptron with two input features plus bias, using the delta rule with learning rate $\alpha = 0.5$.

Initial weights: $w_0 = 0.5$ (bias), $w_1 = 1.0$, $w_2 = -0.5$

***Example 1: Delta Rule Update***

Input: $x_1 = 2$, $x_2 = 1$, desired output $t = 1$

Calculate weighted sum:
$$s = w_0 \cdot 1 + w_1 \cdot x_1 + w_2 \cdot x_2$$
$$s = 0.5 \cdot 1 + 1.0 \cdot 2 + (-0.5) \cdot 1$$
$$s = 0.5 + 2.0 - 0.5 = 2.0$$

For delta rule, we update whenever $s \neq t$, so we need an update:
$$w_0$$
$$w_0 \leftarrow w_0 + \alpha(t - s) \cdot 1$$
$$w_0 \leftarrow 0.5 + 0.5(1 - 2) \cdot 1$$
$$w_0 \leftarrow 0.5 - 0.5 = 0$$

$$w_1$$
$$w_1 \leftarrow w_1 + \alpha(t - s) \cdot x_1$$
$$w_1 \leftarrow 1.0 + 0.5(1 - 2) \cdot 2$$
$$w_1 \leftarrow 1.0 - 1.0 = 0$$

$$w_2$$
$$w_2 \leftarrow w_2 + \alpha(t - s) \cdot x_2$$
$$w_2 \leftarrow -0.5 + 0.5(1 - 2) \cdot 1$$
$$w_2 \leftarrow -0.5 - 0.5 = -1.0$$

Updated weights: $w_0 = 0$, $w_1 = 0$, $w_2 = -1.0$

***Example 2: Another Delta Rule Update***

Input: $x_1 = 1$, $x_2 = 1$, desired output $t = 0$

Calculate weighted sum:
$$s = w_0 \cdot 1 + w_1 \cdot x_1 + w_2 \cdot x_2$$
$$s = 0 \cdot 1 + 0 \cdot 1 + (-1.0) \cdot 1$$
$$s = 0 + 0 - 1.0 = -1.0$$

$$w_0$$
$$w_0 \leftarrow w_0 + \alpha(t - s) \cdot 1$$
$$w_0 \leftarrow 0 + 0.5(0 - (-1.0)) \cdot 1$$
$$w_0 \leftarrow 0 + 0.5 = 0.5$$

$$w_1$$
$$w_1 \leftarrow w_1 + \alpha(t - s) \cdot x_1$$
$$w_1 \leftarrow 0 + 0.5(0 - (-1.0)) \cdot 1$$
$$w_1 \leftarrow 0 + 0.5 = 0.5$$

$$w_2$$
$$w_2 \leftarrow w_2 + \alpha(t - s) \cdot x_2$$
$$w_2 \leftarrow -1.0 + 0.5(0 - (-1.0)) \cdot 1$$
$$w_2 \leftarrow -1.0 + 0.5 = -0.5$$

Updated weights: $w_0 = 0.5$, $w_1 = 0.5$, $w_2 = -0.5$

### **2.4.3 Generalised Delta Rule**

The **generalised delta rule** extends the delta rule by incorporating the transfer function into the error calculation.

**Error function:**
$$E(w) = \frac{1}{2}\sum_{j=1}^{M}(t_j - g(s_j))^2$$

Where $g(s_j)$ is the output after applying the transfer function.

**Weight update rule:**
For a differentiable transfer function like sigmoid:
$$w_i \leftarrow w_i + \alpha(t - g(s))g(s)(1-g(s))x_i$$

Where:
- $g(s)(1-g(s))$ is the derivative of the sigmoid function

When using the sigmoid function:
- $g(s)(1-g(s))$ varies from 0 to 0.25
- It equals 0 when $g(s)$ is 0 or 1
- It reaches maximum value of 0.25 when $g(s)$ is 0.5

#### **Example with sigmoid transfer function:**

Let's use the generalised delta rule with sigmoid transfer function $g(s) = \frac{1}{1 + e^{-s}}$. The update rule is:

$w_i \leftarrow w_i + \alpha(t - g(s))g(s)(1 - g(s))x_i$

Initial weights: $w_0 = 0.5$ (bias), $w_1 = 1.0$, $w_2 = -0.5$
Learning rate: $\alpha = 0.5$

**Generalised Delta Rule Example**

Input: $x_1 = 2$, $x_2 = 1$, desired output $t = 1$

Calculate weighted sum:
$$s = w_0 \cdot 1 + w_1 \cdot x_1 + w_2 \cdot x_2 = 0.5 + 2.0 - 0.5 = 2.0$$

Apply sigmoid function:
$$g(s) = \frac{1}{1 + e^{-2}} \approx 0.881$$

Calculate derivative term:
$$g(s)(1-g(s)) = 0.881 \times 0.119 \approx 0.105$$

Update the weights:
$$w_0$$
$$w_0 \leftarrow w_0 + \alpha(t - g(s))g(s)(1-g(s)) \cdot 1$$
$$w_0 \leftarrow 0.5 + 0.5(1 - 0.881)0.105 \cdot 1 \approx 0.506$$

$$w_1$$
$$w_1 \leftarrow w_1 + \alpha(t - g(s))g(s)(1-g(s)) \cdot x_1$$
$$w_1 \leftarrow 1.0 + 0.5(1 - 0.881)0.105 \cdot 2 \approx 1.012$$

$$w_2$$
$$w_2 \leftarrow w_2 + \alpha(t - g(s))g(s)(1-g(s)) \cdot x_2$$
$$w_2 \leftarrow -0.5 + 0.5(1 - 0.881)0.105 \cdot 1 \approx -0.494$$

Updated weights: $w_0 \approx 0.506$, $w_1 \approx 1.012$, $w_2 \approx -0.494$

## **2.5 Limitations of Single-Layer Networks**

The fundamental limitation of single-layer networks is that they can **only solve linearly separable problems**. This was proven mathematically by Minsky and Papert in their 1969 book "Perceptrons."

**XOR Problem:** The classic example of this limitation is the XOR (exclusive OR) function:

| Input A | Input B | XOR Output |
| ------- | ------- | ---------- |
| 0       | 0       | 0          |
| 0       | 1       | 1          |
| 1       | 0       | 1          |
| 1       | 1       | 0          |

No single straight line can separate the points (0,0) and (1,1) from (0,1) and (1,0) in the input space.

![alt text](/blogs/introduction-to-neural-networks/img/image-10.png)

> Showing XOR problem not being linearly separable

However, XOR can be represented as a combination of simpler functions:
$$\text{XOR}(x_1, x_2) = (\text{x}_1 \text{ AND NOT } \text{x}_2) \text{ OR } (\text{NOT } \text{x}_1 \text{ AND } \text{x}_2)$$

Or more simply:
$$\text{XOR}(x_1, x_2) = (x_1 \text{ AND } x_2) \text{ NOR } (x_1 \text{ NOR } x_2)$$

This suggests a solution: **multi-layer networks** where each layer can compute a different linearly separable function, and their combination can represent more complex, non-linear functions.

**Possible solutions to overcome single-layer limitations:**
1. Use multiple layers of perceptrons
2. Transform the input space using non-linear features
3. Use more powerful classifiers

The discovery of effective training algorithms for multi-layer networks (like backpropagation) was a major breakthrough that revitalized the field of neural networks after the initial discouragement from the perceptron's limitations.

# **3. Multi-Layer Networks**

## **3.1 Structure and Function**

**Multi-layer networks** (also called multi-layer perceptrons or MLPs) consist of one input layer, one output layer, and one or more hidden layers of processing units. This structure allows them to overcome the limitations of single-layer networks.

![alt text](/blogs/introduction-to-neural-networks/img/image-1.png) 

> Showing the layered structure of a feedforward network

A **feedforward network** has a structured architecture where:
- Each layer consists of units (neurons) that receive input from the layer below
- Units send their output to units in the layer directly above
- There are no connections within a layer
- Information flows in one direction (forward)

The mathematical representation of how data passes through a multi-layer network:

1. **Input to hidden layer** (for a network with $N$ input nodes and $H$ hidden nodes):
   $$h_j = g\left(\sum_{i=1}^{N} x_i w_{i,j}\right) = g(s_j)$$
   
   Where:
   - $h_j$ is the output of the $j$-th hidden neuron
   - $x_i$ is the $i$-th input
   - $w_{i,j}$ is the weight from input $i$ to hidden neuron $j$
   - $g$ is the activation function
   - $s_j$ is the weighted sum input to hidden neuron $j$

2. **Hidden to output layer** (for $H$ hidden nodes and an output layer):
   $$o_k = g\left(\sum_{j=1}^{H} h_j w_{j,k}\right) = g(s_k)$$
   
   Where:
   - $o_k$ is the output of the $k$-th output neuron
   - $h_j$ is the output from the $j$-th hidden neuron
   - $w_{j,k}$ is the weight from hidden neuron $j$ to output neuron $k$

3. **Including bias terms** (common in practice):
   $$h_j = g\left(b_j + \sum_{i=1}^{N} x_i w_{i,j}\right)$$
   $$o_k = g\left(b_k + \sum_{j=1}^{H} h_j w_{j,k}\right)$$
   
   Where $b_j$ and $b_k$ are bias terms for the respective neurons

**Key components of multi-layer networks:**

- **Hidden layers** produce hidden values that are non-linear functions of the inputs
- **Non-linear activation functions** are applied at each layer
- **Weights** are applied at each layer and adjusted during learning
- **Output layer** produces the final result, often using a non-linear threshold function

## **3.2 Representational Power**

The power of multi-layer networks comes from their ability to represent complex functions that single-layer networks cannot.

**Universal Function Approximator Theorem**: A feed-forward neural network with at least one hidden layer (and a sufficient number of hidden units) can approximate almost any continuous function.

This theorem is fundamental to understanding why neural networks are such powerful models. It states that:

1. Given enough hidden units, a two-layer network can approximate any continuous function to arbitrary precision
2. The approximation improves as more hidden units are added
3. This applies to networks using a variety of activation functions (sigmoid, tanh, etc.)

**Practical implications:**
- Multi-layer networks can learn highly complex, non-linear mappings from inputs to outputs
- They can represent decision boundaries that aren't possible with single-layer networks
- The complexity of functions they can represent increases with:
  - Number of layers (depth)
  - Number of neurons per layer (width)

**Example: XOR Problem Solution**
A multi-layer network can solve the XOR problem that single-layer perceptrons cannot:
- First hidden layer: Compute AND and OR functions
- Second layer: Combine these to form XOR
  
![alt text](/blogs/introduction-to-neural-networks/img/image-11.png)
This demonstrates how complex functions can be built from simpler ones through layering.

## **3.3 Non-linearity**

**Non-linearity** is crucial in neural networks because without it, a multi-layer network would be mathematically equivalent to a single-layer network.

**Why non-linearity matters:**
- Linear functions composed with linear functions remain linear
- Non-linear activation functions enable networks to learn complex patterns
- They allow the creation of complex decision boundaries

**Building complex boundaries from simple components:**

A multi-layer network with non-linear activation functions can create increasingly complex decision boundaries:

![alt text](/blogs/introduction-to-neural-networks/img/image-12.png)

> Showing ridge and bump patterns created by combining sigmoid functions

The diagram shows:
- (a) A ridge formed by combining two opposite-facing soft threshold functions
- (b) A bump created by combining two ridges

This visual representation demonstrates how neural networks stack simple non-linear functions to create complex patterns in the decision space.

**Mathematical example of non-linear construction:**

Consider a 2-dimensional input space. With appropriate weights, hidden units can create:
1. Linear boundaries (like lines in 2D space)
2. These linear boundaries can be combined through non-linear functions to create:
   - Half-planes
   - Convex regions
   - Arbitrary regions through unions and intersections

**Non-linear activation in practice:**

Without non-linearity:
- A multi-layer network of linear functions creates a piece-wise linear boundary
- A multi-layer linear network is mathematically equivalent to a single-layer linear network

With non-linearity:
- Each layer transforms the data in a way that makes patterns more separable
- Complex, smooth decision boundaries become possible
- The network can approximate any continuous function (as per the Universal Approximator Theorem)

This non-linear capability is what makes neural networks so powerful for complex pattern recognition tasks that linear models cannot handle.

# **4. Backpropagation**

## **4.1 Gradient Descent in Neural Networks**

**Backpropagation** is the classic algorithm used to train multi-layer neural networks. It works by propagating the error backwards through the network to adjust weights using gradient descent.

The training process involves:
1. Forward pass to calculate outputs and error
2. Backward pass to adjust weights proportionally to their contribution to the error
3. Iterating this process until convergence

The **error function** for a neural network with multiple outputs is typically defined as:

$$E_{total} = \frac{1}{2}\sum_{k}(y_k - o_k)^2$$

Where:
- $E_{total}$ is the total error
- $y_k$ is the target/desired output for output unit $k$
- $o_k$ is the actual output from output unit $k$
- The sum is over all output units

For gradient descent, we need to find how the error changes with respect to each weight in the network:

$$\Delta w = -\alpha\frac{\partial E}{\partial w}$$

Where:
- $\Delta w$ is the weight update
- $\alpha$ is the learning rate
- $\frac{\partial E}{\partial w}$ is the partial derivative of the error with respect to the weight

![alt text](/blogs/introduction-to-neural-networks/img/image-13.png)

The **backpropagation algorithm** efficiently computes these derivatives by applying the chain rule of calculus, working backwards from the output layer to the input layer.

## **4.2 Weight Updates**

### **4.2.1 Hidden to Output Layer**

To update weights between the hidden and output layers, we need to determine how much each weight contributes to the error.

For a weight $w_{j,k}$ connecting hidden unit $j$ to output unit $k$:

$$\frac{\partial E}{\partial w_{j,k}} = \frac{\partial E}{\partial o_k} \cdot \frac{\partial o_k}{\partial s_k} \cdot \frac{\partial s_k}{\partial w_{j,k}}$$

Where:
- $o_k$ is the output of unit $k$
- $s_k$ is the weighted sum input to unit $k$: $s_k = \sum_{j} h_j w_{j,k}$
- $h_j$ is the output from hidden unit $j$

Breaking down each term:

1. **Error gradient with respect to output**:
   $$\frac{\partial E}{\partial o_k} = \frac{\partial}{\partial o_k}\left(\frac{1}{2}(y_k - o_k)^2\right) = -(y_k - o_k)$$

2. **Output gradient with respect to weighted sum** (for sigmoid activation):
   $$\frac{\partial o_k}{\partial s_k} = \frac{\partial g(s_k)}{\partial s_k} = g(s_k)(1-g(s_k))$$

3. **Weighted sum gradient with respect to weight**:
   $$\frac{\partial s_k}{\partial w_{j,k}} = \frac{\partial}{\partial w_{j,k}}\left(\sum_{j} h_j w_{j,k}\right) = h_j$$

Combining these terms, we get:
$$\frac{\partial E}{\partial w_{j,k}} = -(y_k - o_k) \cdot g(s_k)(1-g(s_k)) \cdot h_j = -\delta_k \cdot h_j$$

Where:
$$\delta_k = (y_k - o_k) \cdot g(s_k)(1-g(s_k))$$

$\delta_k$ represents the **error signal** for output unit $k$.

The weight update rule becomes:
$$w_{j,k} \leftarrow w_{j,k} + \alpha \cdot \delta_k \cdot h_j$$

#### **Example calculation**:
Consider a network with:
- Hidden unit output $h_1 = 0.9$
- Target output $y_1 = 1$
- Actual output $o_1 = 0.81$ (computed with sigmoid)
- Weight $w_{7} = 0.7$ (connecting $h_1$ to $o_1$)
- Learning rate $\alpha = 0.1$

The error signal would be:
$$\delta_1 = (1 - 0.81) \cdot 0.81 \cdot (1 - 0.81) = 0.19 \cdot 0.81 \cdot 0.19 \approx 0.029$$

The weight update would be:
$$w_7 \leftarrow 0.7 + 0.1 \cdot 0.029 \cdot 0.9 \approx 0.7 + 0.0026 = 0.7026$$

### **4.2.2 Input to Hidden Layer**

For weights between the input and hidden layers, the calculation is more complex because each hidden unit contributes to multiple output units.

For a weight $w_{i,j}$ connecting input unit $i$ to hidden unit $j$:

$$\frac{\partial E}{\partial w_{i,j}} = \frac{\partial E}{\partial h_j} \cdot \frac{\partial h_j}{\partial s_j} \cdot \frac{\partial s_j}{\partial w_{i,j}}$$

Where:
- $h_j$ is the output of hidden unit $j$
- $s_j$ is the weighted sum input to hidden unit $j$: $s_j = \sum_{i} x_i w_{i,j}$
- $x_i$ is the input from input unit $i$

Breaking down each term:

1. **Error gradient with respect to hidden output**:
   This is more complex as each hidden unit affects multiple output units:
   $$\frac{\partial E}{\partial h_j} = \sum_{k} \frac{\partial E}{\partial o_k} \cdot \frac{\partial o_k}{\partial s_k} \cdot \frac{\partial s_k}{\partial h_j} = \sum_{k} -\delta_k \cdot w_{j,k}$$

2. **Hidden output gradient with respect to weighted sum** (for sigmoid activation):
   $$\frac{\partial h_j}{\partial s_j} = g(s_j)(1-g(s_j))$$

3. **Weighted sum gradient with respect to weight**:
   $$\frac{\partial s_j}{\partial w_{i,j}} = x_i$$

Combining these terms:
$$\frac{\partial E}{\partial w_{i,j}} = -x_i \cdot g(s_j)(1-g(s_j)) \cdot \sum_{k} \delta_k \cdot w_{j,k} = -\delta_j \cdot x_i$$

Where:
$$\delta_j = g(s_j)(1-g(s_j)) \cdot \sum_{k} \delta_k \cdot w_{j,k}$$

$\delta_j$ represents the **error signal** for hidden unit $j$.

The weight update rule becomes:
$$w_{i,j} \leftarrow w_{i,j} + \alpha \cdot \delta_j \cdot x_i$$

#### **Example calculation**:
Consider a network with:
- Input $x_1 = 1$
- Hidden unit activation $h_1 = 0.9$ (already calculated)
- Error signals from output units: $\delta_1 = 0.029$ (from previous example)
- Weight from hidden to output: $w_{7} = 0.7$
- Weight from input to hidden: $w_1 = 0.1$
- Learning rate $\alpha = 0.1$

The hidden layer error signal would be:
$$\delta_{h1} = 0.9 \cdot (1 - 0.9) \cdot (0.029 \cdot 0.7) \approx 0.0018$$

The weight update would be:
$$w_1 \leftarrow 0.1 + 0.1 \cdot 0.0018 \cdot 1 = 0.1 + 0.00018 = 0.10018$$

This process of updating weights continues iteratively until the network's performance reaches a satisfactory level, with error propagating backward from outputs to inputs.


## **4.3 Backpropagation Example**

Let's work through a complete example of backpropagation on a simple neural network with:
- 3 input units
- 2 hidden units 
- 2 output units

For simplicity, we'll use the following initial weights:
- $w_1$ to $w_6$ for input→hidden connections (from 0.1 to 0.6)
- $w_7$ to $w_{10}$ for hidden→output connections (from 0.7 to 1.0)

With our first training instance: $x=[1, 2, 3]$ and target $y=[1, 0]$

### **Forward Pass Calculation:**

1. **Calculate hidden layer activations:**
   
   Hidden unit 1:
   $$s_{h1} = x_1w_1 + x_2w_3 + x_3w_5 = 1 \times 0.1 + 2 \times 0.3 + 3 \times 0.5 = 2.2$$
   $$h_1 = g(s_{h1}) = g(2.2) = \frac{1}{1+e^{-2.2}} = 0.90$$
   
   Hidden unit 2:
   $$s_{h2} = x_1w_2 + x_2w_4 + x_3w_6 = 1 \times 0.2 + 2 \times 0.4 + 3 \times 0.6 = 2.8$$
   $$h_2 = g(s_{h2}) = g(2.8) = \frac{1}{1+e^{-2.8}} = 0.94$$

2. **Calculate output layer activations:**
   
   Output unit 1:
   $$s_{o1} = h_1w_7 + h_2w_9 = 0.90 \times 0.7 + 0.94 \times 0.9 = 1.47$$
   $$o_1 = g(s_{o1}) = g(1.47) = \frac{1}{1+e^{-1.47}} = 0.81$$
   
   Output unit 2:
   $$s_{o2} = h_1w_8 + h_2w_{10} = 0.90 \times 0.8 + 0.94 \times 1.0 = 1.66$$
   $$o_2 = g(s_{o2}) = g(1.66) = \frac{1}{1+e^{-1.66}} = 0.84$$

### **Backward Pass Calculation:**

1. **Calculate output layer error signals:**
   
   For output unit 1:
   $$\delta_1 = (y_1 - o_1)g(s_{o1})(1-g(s_{o1})) = (1 - 0.81) \times 0.81 \times (1 - 0.81) = 0.19 \times 0.81 \times 0.19 \approx 0.029$$
   
   For output unit 2:
   $$\delta_2 = (y_2 - o_2)g(s_{o2})(1-g(s_{o2})) = (0 - 0.84) \times 0.84 \times (1 - 0.84) = -0.84 \times 0.84 \times 0.16 \approx -0.11$$

2. **Update hidden to output weights** using the formula:
   $$w_{j,k} \leftarrow w_{j,k} + \alpha \cdot \delta_k \cdot h_j$$
   
   Using learning rate $\alpha = 0.1$:
   
   $$w_7 \leftarrow 0.7 + 0.1 \times 0.029 \times 0.9 \approx 0.7 + 0.0026 = 0.7026$$
   $$w_8 \leftarrow 0.8 + 0.1 \times (-0.11) \times 0.9 \approx 0.8 - 0.0099 = 0.7901$$
   $$w_9 \leftarrow 0.9 + 0.1 \times 0.029 \times 0.94 \approx 0.9 + 0.0027 = 0.9027$$
   $$w_{10} \leftarrow 1.0 + 0.1 \times (-0.11) \times 0.94 \approx 1.0 - 0.0103 = 0.9897$$

3. **Calculate hidden layer error signals:**
   
   For hidden unit 1:
   $$\delta_{h1} = g(s_{h1})(1-g(s_{h1})) \times (\delta_1 w_7 + \delta_2 w_8)$$
   $$\delta_{h1} = 0.90 \times (1-0.90) \times (0.029 \times 0.7 + (-0.11) \times 0.8)$$
   $$\delta_{h1} = 0.90 \times 0.1 \times (0.020 - 0.088) = 0.09 \times (-0.068) \approx -0.006$$
   
   For hidden unit 2:
   $$\delta_{h2} = g(s_{h2})(1-g(s_{h2})) \times (\delta_1 w_9 + \delta_2 w_{10})$$
   $$\delta_{h2} = 0.94 \times (1-0.94) \times (0.029 \times 0.9 + (-0.11) \times 1.0)$$
   $$\delta_{h2} = 0.94 \times 0.06 \times (0.026 - 0.11) = 0.0564 \times (-0.084) \approx -0.005$$

4. **Update input to hidden weights** using the formula:
   $$w_{i,j} \leftarrow w_{i,j} + \alpha \cdot \delta_j \cdot x_i$$
   
   For weights to hidden unit 1:
   $$w_1 \leftarrow 0.1 + 0.1 \times (-0.006) \times 1 = 0.1 - 0.0006 = 0.0994$$
   $$w_3 \leftarrow 0.3 + 0.1 \times (-0.006) \times 2 = 0.3 - 0.0012 = 0.2988$$
   $$w_5 \leftarrow 0.5 + 0.1 \times (-0.006) \times 3 = 0.5 - 0.0018 = 0.4982$$
   
   For weights to hidden unit 2:
   $$w_2 \leftarrow 0.2 + 0.1 \times (-0.005) \times 1 = 0.2 - 0.0005 = 0.1995$$
   $$w_4 \leftarrow 0.4 + 0.1 \times (-0.005) \times 2 = 0.4 - 0.001 = 0.399$$
   $$w_6 \leftarrow 0.6 + 0.1 \times (-0.005) \times 3 = 0.6 - 0.0015 = 0.5985$$

This completes one iteration of backpropagation for one training example. The process would continue with additional examples until the network converges to a solution.

## **4.4 Training Considerations**

### **Local vs Global Minima**

The **error surface** for multilayer networks may contain many different local minima. Backpropagation is only guaranteed to converge toward some local minimum, not necessarily the global minimum error.

![alt text](/blogs/introduction-to-neural-networks/img/image-14.png)

> Showing the error surface with multiple minima

**Momentum** is an optimisation technique that helps accelerate gradient descent. It does this by adding a fraction of the previous update to the current one, which helps smooth out the path and avoid local minima.

$$\Delta w_j(n) = \alpha h_j \Delta + \mu\Delta w_j(n-1)$$

Where:
- $\Delta w_j(n)$ is the weight update in the current iteration
- $\Delta w_j(n-1)$ is the weight update in the previous iteration
- $\mu$ is the momentum term (typically between 0.5 and 0.9)

Benefits of momentum:
- Helps the network "roll over" small local minima
- Speeds up learning in flat regions of the error surface
- Dampens oscillations in steep regions

![alt text](/blogs/introduction-to-neural-networks/img/image-15.png)

> Rolling over local minima by building momentum

### **Function Approximation**

Neural networks excel at function approximation. They can learn to approximate complex, nonlinear relationships between inputs and outputs.

![alt text](/blogs/introduction-to-neural-networks/img/image-16.png)

The diagram illustrates:
a. Original learning samples
b. The actual function that generated the samples
c. The approximation learned by the network
d. The error in the approximation

### **Practical Implementation Considerations**

When implementing a neural network, several design decisions must be made:

1. **Input and output encoding**:
   - How to represent categorical variables
   - Whether to normalize or standardize numeric inputs
   - How to encode desired outputs

2. **Network structure**:
   - Number of hidden layers
   - Number of nodes in each hidden layer

3. **Learning parameters**:
   - Learning rate ($\alpha$)
   - Momentum ($\mu$)
   - Weight initialization strategy

4. **Stopping criteria**:
   - Maximum number of epochs
   - Error threshold
   - Early stopping using validation data

5. **Weight initialization**:
   - Small random values (typically between -0.5 and 0.5)
   - More sophisticated methods for deep networks

## **4.5 Epochs, Batches, and Iterations**

Neural network training involves several key concepts related to how data is processed during training:

**Epoch**: One complete pass through the entire training dataset. During an epoch, every example in the training dataset is used once to update the network weights.

**Batch**: A subset of the training dataset used in a single update of the network weights. Batches are used when the entire dataset is too large to process at once due to memory limitations or computational efficiency.

**Iteration**: The number of batches needed to complete one epoch. For example, if you have 10,000 training examples and use a batch size of 200, it will take 50 iterations to complete one epoch.

The relationship between these terms can be expressed as:
$$\text{iterations per epoch} = \frac{\text{total training examples}}{\text{batch size}}$$

### **Training Approaches**

There are different approaches to updating weights during training:

**Batch Gradient Descent**: Update weights after seeing all training examples (one update per epoch).
- Advantages: More stable gradient estimates, potentially faster convergence
- Disadvantages: Requires more memory, can be computationally inefficient for large datasets

**Stochastic Gradient Descent (SGD)**: Update weights after each individual training example.
- Advantages: Faster updates, can escape local minima more easily, works well with large datasets
- Disadvantages: Noisy updates, may not converge

**Mini-batch Gradient Descent**: Update weights after processing a small batch of examples (a compromise between batch and stochastic approaches).
- Advantages: More stable than SGD, more efficient than batch gradient descent
- Disadvantages: Requires tuning of the batch size

# **5. Preventing Overfitting**

## **5.1 Generalisation Techniques**

**Overfitting** occurs when a neural network performs very well on training data but fails to generalize to new, unseen data. This happens when the network memorizes the training examples rather than learning the underlying patterns.

![alt text](/blogs/introduction-to-neural-networks/img/image-17.png)

**Generalisation accuracy** measures how well the network performs on data outside the training set. Poor generalisation is one of the most common problems in neural network training.

### **Validation Set Approach**

One of the most effective methods to monitor and improve generalisation is to use a **validation dataset**:

1. Divide available data into three sets:
   - **Training set**: Used to update weights during learning
   - **Validation set**: Used to evaluate performance during training
   - **Test set**: Used only for final evaluation

2. During training:
   - Train the network on the training data, adjusting weights to reduce error
   - Periodically evaluate performance on the validation set
   - Save the weights that perform best on the validation set

3. At the end of training:
   - Return the set of weights that performed best on the validation set, not necessarily those that performed best on the training set

The validation approach works because a network that has started to overfit will show increasing error on the validation set, even as its error on the training set continues to decrease.

### **Weight Decay**

**Weight decay** is a regularization technique that helps prevent overfitting by penalizing large weights:

$$w_i \leftarrow w_i - \alpha \frac{\partial E}{\partial w_i} - \lambda w_i$$

Where:
- $\lambda$ is the weight decay parameter (typically a small value like 0.0001)
- The term $\lambda w_i$ gradually reduces the magnitude of weights during training

Benefits of weight decay:
- Forces the network to focus on the most important features
- Makes the network more robust to noise in the training data
- Results in smoother decision boundaries

**Example:**
If a weight is 0.5 and $\lambda = 0.001$ with a learning rate of 0.1:
- Without weight decay: $w_i \leftarrow 0.5 - 0.1 \times \frac{\partial E}{\partial w_i}$
- With weight decay: $w_i \leftarrow 0.5 - 0.1 \times \frac{\partial E}{\partial w_i} - 0.001 \times 0.5 = 0.5 - 0.1 \times \frac{\partial E}{\partial w_i} - 0.0005$

The weight decay term subtracts a small fraction of the weight in each update, preventing weights from growing too large.

## **5.2 Early Stopping**

**Early stopping** is a simple yet effective technique to prevent overfitting in neural networks.

**Procedure:**
1. Monitor the error on the validation set after each epoch
2. Stop training when the validation error:
   - Stops decreasing
   - Increases for several consecutive epochs
   - Remains above its minimum value for a specified number of epochs

{{DIAGRAM: neural_networks.pdf, page 71, showing early stopping based on validation error}}

**Early stopping criterias**:
- **Patience**: Stop training if the validation error hasn't improved for N epochs
- **Delta**: Define improvement as a decrease in validation error of at least Δ
- **Threshold**: Stop when validation error is below a pre-defined threshold

**Benefits of early stopping:**
- Simplicity: Easy to implement and understand
- Effectiveness: Works well in practice for many different network architectures
- Efficiency: Saves computation time by avoiding unnecessary training
- Preserves generalization: Prevents the network from overfitting by stopping training at an optimal point

**Example:**
If training a neural network and tracking validation error by epoch:
- Epoch 10: Validation error = 0.25
- Epoch 11: Validation error = 0.23
- Epoch 12: Validation error = 0.22
- Epoch 13: Validation error = 0.22
- Epoch 14: Validation error = 0.23
- Epoch 15: Validation error = 0.24
- Epoch 16: Validation error = 0.26

With a patience of 3 epochs, training would stop after epoch 16, and the weights from epoch 12 would be used since they produced the lowest validation error.

## **5.3 Network Structure Modifications**

The structure of a neural network significantly impacts its tendency to overfit. Several approaches can be used to modify network structure to reduce overfitting:

### **Limiting Network Complexity**

**Limiting the number of hidden nodes or connections** reduces the network's capacity to memorize the training data:

- Fewer hidden units means fewer parameters to fit
- Simpler networks tend to generalize better
- The optimal number of hidden units depends on:
  - Complexity of the underlying problem
  - Amount of training data available
  - Noise level in the data

### **Dynamic Structure Modification**

Instead of starting with a fixed network structure, some approaches **dynamically modify the network structure** during training:

1. **Growing approach**:
   - Start with a simple network (few or no hidden nodes)
   - Gradually add nodes as training progresses
   - Stop adding nodes when performance on validation data stops improving

2. **Pruning approach**:
   - Start with a larger network than necessary
   - Identify and remove connections or nodes that contribute little to the network's performance
   - Retrain the network after pruning

Dynamically modifying the structure can help find the optimal network complexity automatically, reducing the need for manual tuning.

### **Ensemble Methods**

**Ensemble methods** combine multiple neural networks to improve generalisation:

- Train multiple networks with different:
  - Initial weights
  - Architectures
  - Subsets of the training data
- Combine their predictions (through averaging or voting)

Ensembles tend to generalize better than individual networks because different networks make different errors, which can cancel out when combined.

### **Training Tips for Better Generalisation**

1. **Rescale inputs and outputs** to be in the range 0 to 1 or -1 to 1
2. **Initialize weights to very small random values**
3. **Use appropriate learning rates** (smaller learning rates often generalize better)
4. **Apply regularization techniques** such as weight decay
5. **Consider the noise level** in your training data (neural networks are quite robust to noise)

**When to consider neural networks**:
- Input is high-dimensional discrete or real-valued
- Output is discrete, real-valued, or a vector of values
- Form of target function is unknown
- Long training times are acceptable (since evaluation is fast)
- Human readability of the result is not important

By carefully considering these aspects of network design and training, you can significantly improve the generalisation ability of your neural networks and reduce the risk of overfitting.

# **6. Advanced Neural Networks**

## **6.1 Deep Neural Networks**

**Deep neural networks** (or **deep learning**) refers to neural networks with many layers. These networks have gained tremendous popularity in recent years due to their exceptional performance on complex tasks.

Deep learning differs from traditional neural networks primarily in scale and complexity:
- Many more layers (often dozens or hundreds)
- More neurons per layer
- More complex architectures optimized for specific tasks

The rise of deep learning has been enabled by:
- Increased computational power (especially GPUs)
- Larger datasets
- Novel architectural improvements
- New training techniques

However, deep networks introduce several challenges that aren't as pronounced in shallow networks:

1. **Overfitting** becomes more likely due to the increased number of parameters
2. **Training difficulties** due to complex error surfaces with many local minima
3. **Computational demands** requiring specialized hardware
4. **Gradient-related problems** including vanishing and exploding gradients

Deep neural networks have transformed many fields including:
- Computer vision
- Natural language processing
- Speech recognition
- Game playing
- Scientific discovery

These networks excel at problems where:
- There is abundant data
- The underlying patterns are complex
- Traditional algorithms struggle to capture the relationships

The true power of deep learning comes from its ability to learn hierarchical representations: early layers learn simple features, while deeper layers combine these into increasingly complex and abstract concepts.

## **6.2 Vanishing Gradient Problem**

The **vanishing gradient problem** is one of the primary challenges in training deep neural networks, particularly those using sigmoid or tanh activation functions.

### **Cause of Vanishing Gradients**

When using the chain rule during backpropagation, derivatives are multiplied together as we move backward through the network:

$$\frac{\partial E}{\partial w_{ij}} = \frac{\partial E}{\partial o_k} \cdot \frac{\partial o_k}{\partial s_k} \cdot ... \cdot \frac{\partial s_j}{\partial w_{ij}}$$

With sigmoid activation functions:
- The derivative $g'(s) = g(s)(1-g(s))$ has a maximum value of 0.25 (when $g(s) = 0.5$)
- As the number of layers increases, we multiply more terms that are ≤ 0.25
- This causes the gradient to become extremely small (vanish) for earlier layers

**Example of vanishing gradient:**
If we have 10 hidden layers using sigmoid activation:
- Each with a maximum derivative of 0.25
- The gradient contribution could be as small as $0.25^{10} ≈ 0.000001$
- This makes learning in early layers extremely slow or impossible

### **Solutions to the Vanishing Gradient Problem**

1. **ReLU (Rectified Linear Unit) activation function**:
   $$\text{ReLU}(x) = \max(0, x)$$
   
   - The derivative is 1 for all positive inputs (doesn't shrink the gradient)
   - Simple to compute, making it efficient
   - Has become the default activation function for many deep networks

2. **Alternative network architectures**:
   - **Residual networks** (ResNets) use skip connections to allow gradients to flow more easily
   - **Highway networks** use gating mechanisms to control information flow

3. **Careful weight initialization** to prevent gradients from becoming too small initially

4. **Batch normalization** to keep activations in ranges where their derivatives are larger

## **6.3 Convolutional Neural Networks (CNN)**

**Convolutional Neural Networks (CNNs)** are specialized neural networks designed primarily for processing grid-like data, such as images. They have revolutionized computer vision tasks.

### **Motivation for CNNs**

Traditional fully-connected neural networks have limitations when working with images:
- Converting a 2D image to a 1D vector loses spatial information
- The number of parameters becomes unmanageable with high-resolution images
- They don't naturally capture the local patterns present in images

CNNs address these issues by leveraging three key ideas:
1. **Local receptive fields** - Each neuron connects to a small region of the input
2. **Shared weights** - The same filter is applied across the entire input
3. **Spatial subsampling** - Reducing the dimensionality while preserving important features

### **CNN Architecture**

A typical CNN consists of several types of layers:

1. **Convolutional layers**:
   - Apply filters (kernels) across the input to detect features
   - Each filter produces a feature map highlighting areas where that feature is present
   - Parameters: filter size, number of filters, stride (step size)
   
   {{DIAGRAM: neural_networks.pdf, page 82-83, showing the convolution operation}}

2. **Pooling layers**:
   - Reduce the spatial dimensions of feature maps
   - Common methods: max pooling (taking maximum value in each region) or average pooling
   - Help achieve translation invariance and reduce computation

3. **Fully-connected layers**:
   - Usually at the end of the network
   - Connect to all neurons in the previous layer
   - Perform classification based on features extracted by earlier layers

**Example of convolution calculations:**

For an image of size 7×7 and a 3×3 filter:
- With stride 1: Resulting feature map size is 5×5
- With stride 2: Resulting feature map size is 3×3

The feature map dimension can be calculated as:
$$\text{Output size} = \frac{n - f + 2p}{s} + 1$$

Where:
- $n$ is the input dimension
- $f$ is the filter size
- $p$ is the padding (adding zeros around the border)
- $s$ is the stride

CNNs have been remarkably successful for:
- Image classification
- Object detection
- Facial recognition
- Medical image analysis

## **6.4 Recurrent Neural Networks (RNN)**

**Recurrent Neural Networks (RNNs)** are specialized neural networks designed for sequential data, where the order of inputs matters. They're particularly well-suited for:

- Time series data
- Text processing
- Speech recognition
- Music generation
- Video analysis

### **RNN Architecture**

Unlike feedforward networks, RNNs have connections that form cycles, allowing information to persist:

- They maintain a "state vector" or "hidden state" that contains information about previous inputs
- Each step in the sequence updates this state based on the current input and previous state
- This creates an implicit "memory" of previous inputs

Mathematically, at each time step $t$:
$$h_t = g(W_{xh}x_t + W_{hh}h_{t-1} + b_h)$$
$$y_t = g(W_{hy}h_t + b_y)$$

Where:
- $x_t$ is the input at time $t$
- $h_t$ is the hidden state at time $t$
- $y_t$ is the output at time $t$
- $W$ terms are weight matrices
- $b$ terms are bias vectors
- $g$ is an activation function

{{DIAGRAM: neural_networks.pdf, page 84, showing RNN structure and unfolding}}

An RNN can be "unfolded" in time to appear like a deep feedforward network with shared weights across layers. This perspective helps understand both the power and challenges of RNNs.

### **RNN Variations**

Standard RNNs suffer from the vanishing gradient problem, making it difficult to capture long-term dependencies. Two main variations address this:

1. **Long Short-Term Memory (LSTM)** units:
   - Use a more complex architecture with "gates" that control information flow
   - An input gate determines what new information to store
   - A forget gate determines what information to discard
   - An output gate determines what information to output
   - These mechanisms allow LSTMs to maintain information over many time steps

2. **Gated Recurrent Unit (GRU)**:
   - A simplified version of LSTM with fewer parameters
   - Combines the input and forget gates into a single "update gate"
   - Generally performs similarly to LSTM but is more computationally efficient

### **RNN Applications**

RNNs can be configured in different ways depending on the task:

- **Sequence input to single output** (e.g., sentiment analysis)
- **Single input to sequence output** (e.g., image captioning)
- **Sequence input to sequence output** (e.g., machine translation)
- **Synchronized sequence input and output** (e.g., video classification frame by frame)

![alt text](/blogs/introduction-to-neural-networks/img/image-18.png)

> Showing different RNN configurations

## **6.5 ChatGPT and Large Language Models**

**Large Language Models (LLMs)** represent some of the most advanced applications of neural networks, with **ChatGPT** being a prominent example. These models are based on the **Transformer** architecture, which has largely superseded RNNs for many language tasks.

### **Evolution of Language Models**

Language models have grown dramatically in size and capability:

- **BERT-large** (2018): 340 million parameters
- **GPT-2** (2018): 110 million parameters 
- **GPT-2 XL** (2019): 1.5 billion parameters
- **GPT-3** (2020): 175 billion parameters
- **GPT-4** (2023): Estimated ~1 trillion parameters

This growth in model size has led to remarkable improvements in language understanding and generation capabilities.

### **Transformer Architecture**

Unlike RNNs, **Transformers** process entire sequences at once using an attention mechanism:

- **Self-attention** allows the model to weigh the importance of different words in a sequence
- **Positional encoding** preserves information about word order
- **Parallel processing** enables much faster training than RNNs

Transformers typically use an encoder-decoder architecture:
- The encoder processes the input sequence
- The decoder generates the output sequence