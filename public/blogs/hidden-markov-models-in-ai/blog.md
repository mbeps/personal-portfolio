- [1 - Introduction to HMMs](#1---introduction-to-hmms)
	- [1.1 - Markov Assumption](#11---markov-assumption)
		- [Importance of the Markov Assumption](#importance-of-the-markov-assumption)
		- [Example: Weather Prediction](#example-weather-prediction)
	- [1.2 - Hidden vs. Observable States](#12---hidden-vs-observable-states)
		- [Markov Chains vs. Hidden Markov Models](#markov-chains-vs-hidden-markov-models)
		- [Formal Structure](#formal-structure)
		- [Key Difference](#key-difference)
	- [1.3 - Applications of HMMs](#13---applications-of-hmms)
		- [Common Applications](#common-applications)
		- [Example: The Fraudulent Croupier Scenario](#example-the-fraudulent-croupier-scenario)
- [2 - Structure of HMMs](#2---structure-of-hmms)
	- [2.1 - State Transition Probability Matrix](#21---state-transition-probability-matrix)
		- [Properties of Transition Probabilities](#properties-of-transition-probabilities)
		- [Example: Dice HMM](#example-dice-hmm)
	- [2.2 - Emission Probability Matrix](#22---emission-probability-matrix)
		- [Output Independence Property](#output-independence-property)
		- [Estimation of Emission Probabilities](#estimation-of-emission-probabilities)
		- [Example: Dice HMM](#example-dice-hmm-1)
	- [2.3 - Start and End States](#23---start-and-end-states)
		- [Start State ($s\_0$)](#start-state-s_0)
		- [End State ($s\_f$)](#end-state-s_f)
		- [Special Observations](#special-observations)
		- [Complete HMM Definition](#complete-hmm-definition)
		- [Visual Representation](#visual-representation)
- [3 - HMM Problems and Algorithms](#3---hmm-problems-and-algorithms)
	- [3.1 - Problem 1: Labelled Learning (Parameter Estimation)](#31---problem-1-labelled-learning-parameter-estimation)
		- [Input and Output](#input-and-output)
		- [Parameter Estimation Formulas](#parameter-estimation-formulas)
		- [Example: Dice HMM Parameter Estimation](#example-dice-hmm-parameter-estimation)
		- [Smoothing](#smoothing)
	- [3.2 - Problem 2: Unlabelled Learning](#32---problem-2-unlabelled-learning)
		- [Solution Approach](#solution-approach)
		- [Challenges](#challenges)
	- [3.3 - Problem 3: Likelihood Calculation](#33---problem-3-likelihood-calculation)
		- [Forward Algorithm](#forward-algorithm)
	- [3.4 - Problem 4: Decoding (Viterbi Algorithm)](#34---problem-4-decoding-viterbi-algorithm)
		- [Dynamic Programming Solution](#dynamic-programming-solution)
		- [The Viterbi Algorithm](#the-viterbi-algorithm)
			- [Key Variables](#key-variables)
			- [Algorithm Steps](#algorithm-steps)
		- [Example: Dice HMM Decoding](#example-dice-hmm-decoding)
		- [Complexity](#complexity)
- [4 - Evaluation and Testing](#4---evaluation-and-testing)
	- [4.1 - Precision and Recall](#41---precision-and-recall)
		- [Why Not Just Use Accuracy?](#why-not-just-use-accuracy)
		- [Precision, Recall and F-measure](#precision-recall-and-f-measure)
		- [Example: Evaluating Dice HMM](#example-evaluating-dice-hmm)
	- [4.2 - Baseline Algorithms](#42---baseline-algorithms)
		- [Importance of Baselines](#importance-of-baselines)
		- [Criteria for Effective Baselines](#criteria-for-effective-baselines)
		- [Common Baseline Approaches](#common-baseline-approaches)
		- [Baseline for HMM Decoding](#baseline-for-hmm-decoding)
	- [4.3 - Statistical Significance Testing](#43---statistical-significance-testing)
		- [Null Hypothesis Testing](#null-hypothesis-testing)
		- [The Sign Test](#the-sign-test)
		- [Binomial Distribution](#binomial-distribution)
		- [One-Tailed vs. Two-Tailed Tests](#one-tailed-vs-two-tailed-tests)
		- [Example: Sign Test](#example-sign-test)
		- [Handling Ties](#handling-ties)
		- [Reporting Significance](#reporting-significance)
- [5 - Practical Applications](#5---practical-applications)
	- [5.1 - Fraudulent Croupier Example](#51---fraudulent-croupier-example)
		- [Scenario Description](#scenario-description)
		- [HMM Formulation](#hmm-formulation)
		- [Variant with Three Dice](#variant-with-three-dice)
		- [Parameter Estimation Example](#parameter-estimation-example)
		- [Decoding with Viterbi](#decoding-with-viterbi)
		- [Variants and Constraints](#variants-and-constraints)
	- [5.2 - Part-of-Speech Tagging](#52---part-of-speech-tagging)
		- [The Problem of Ambiguity](#the-problem-of-ambiguity)
		- [HMM Formulation for POS Tagging](#hmm-formulation-for-pos-tagging)
		- [Example from Lecture Notes](#example-from-lecture-notes)
		- [Analyzing Two Interpretations](#analyzing-two-interpretations)
		- [Viterbi for POS Tagging](#viterbi-for-pos-tagging)
		- [Importance in NLP](#importance-in-nlp)



# 1 - Introduction to HMMs

## 1.1 - Markov Assumption

**Hidden Markov Models (HMMs)** are probabilistic models used for representing sequential data where the underlying process that generates the observations is hidden.

The **Markov assumption** (also called Limited Horizon) is fundamental to HMMs and states that the probability of the current state depends only on the previous state, not on the entire history of states.

Mathematically, this is expressed as:
$$P(X_t | X_1, X_2, \ldots, X_{t-1}) \approx P(X_t | X_{t-1})$$

Where:
- $X_t$ is the state at time t
- $X_{t-1}$ is the state at time t-1

The Markov assumption allows us to calculate the joint probability of a sequence of events as:
$$P(w_1, w_2, \ldots, w_t) = \prod_{t=1}^{n} P(w_t | w_{t-1})$$

### Importance of the Markov Assumption

The Markov assumption is crucial for HMMs because it:
1. Makes calculations **tractable** by limiting the dependencies
2. Reduces **data sparseness** when estimating parameters
3. Allows for efficient algorithms like Viterbi

### Example: Weather Prediction

Consider predicting tomorrow's weather based on historical observations:
- Without Markov assumption: $P(w_t = Rainy | w_{t-1} = Rainy, w_{t-2} = Cloudy, w_{t-3} = Cloudy, w_{t-4} = Rainy)$
- With Markov assumption: $P(w_t = Rainy | w_{t-1} = Rainy)$

The simplification makes the model more manageable, requiring far less data to estimate parameters.

## 1.2 - Hidden vs. Observable States

### Markov Chains vs. Hidden Markov Models

**Markov Chains**:
- States are **fully observable** (you can directly see what state the system is in)
- Transitions between states are probabilistic
- Can be viewed as a probabilistic finite-state automaton

![image](https://github.com/user-attachments/assets/ceb3f764-cbaa-4cc6-851f-2708a7c9af9d)

> Showing the Markov Chain for weather prediction with two states (rainy and cloudy) and transition probabilities between them

**Hidden Markov Models**:
- States are **hidden** (not directly observable)
- We only observe **emissions** or **observations** that are probabilistically related to the hidden states
- No one-to-one mapping between observations and hidden states
- A particular observation can be emitted from multiple different hidden states

![image](https://github.com/user-attachments/assets/05718f75-0e64-4480-9fee-5e3087f77936)

> Showing the time-elapsed view of HMM with hidden states and observations

### Formal Structure

In an HMM:
- **Hidden states**: The underlying states of the system that we cannot directly observe
- **Observations**: The visible outputs that depend probabilistically on the hidden states
- **Transition probabilities**: The probability of moving from one hidden state to another
- **Emission probabilities**: The probability of an observation being generated from a particular hidden state

### Key Difference

The key difference is that in Markov Chains, we know exactly which state the system is in at any time, while in HMMs, we need to infer the most likely sequence of hidden states based on the observations.

## 1.3 - Applications of HMMs

HMMs are widely used in scenarios where:
1. We have sequential data
2. The underlying process is hidden or not directly observable
3. We want to infer the hidden process from observable outputs

### Common Applications

1. **Speech Recognition**
   - **Observations**: Audio signal (acoustic features)
   - **Hidden States**: Phonemes or words
   - **Task**: Determine the most likely sequence of words given the acoustic signal

2. **Part-of-Speech Tagging**
   - **Observations**: Words in a sentence
   - **Hidden States**: Part-of-speech tags (noun, verb, adjective, etc.)
   - **Task**: Assign the correct grammatical category to each word

3. **Machine Translation**
   - **Observations**: Target words (translated text)
   - **Hidden States**: Source words (original text)
   - **Task**: Find the most likely translation

4. **Bioinformatics**
   - **Observations**: DNA/protein sequences
   - **Hidden States**: Structural or functional elements
   - **Task**: Identify functional regions in biological sequences

### Example: The Fraudulent Croupier Scenario

A classic example used to explain HMMs involves a dishonest casino croupier:

- A croupier secretly switches between a fair dice and a loaded dice
- The fair dice has equal probability (1/6) for each number
- The loaded dice has a biased probability distribution
- An observer can only see the sequence of dice rolls (observations)
- The task is to determine when the croupier was using which dice (hidden states)

![image](https://github.com/user-attachments/assets/e22cd86e-6c5b-4cc0-82de-d4782a088fc2)

![image](https://github.com/user-attachments/assets/2a3c2b5f-1a84-4a71-ba7d-f25a75ceaaae)

> Showing the dice HMM with states, observations, and probabilities

In this example:
- **Hidden States**: The type of dice being used (fair or loaded)
- **Observations**: The numbers rolled (1-6)
- **Transition Probabilities**: How likely the croupier is to switch dice
- **Emission Probabilities**: The probability of rolling each number with each dice

This scenario demonstrates how HMMs can be used to infer hidden processes (which dice is being used) from observable data (the dice rolls).

# 2 - Structure of HMMs

## 2.1 - State Transition Probability Matrix

The **state transition probability matrix** (or simply **transition matrix**) is a fundamental component of an HMM, represented as matrix **A**. It defines the probability of moving from one state to another.

For a first-order HMM with N emitting states, plus special start and end states, the transition matrix A is of size $(N+2) × (N+2)$:

$$A = \begin{bmatrix}
- & a_{01} & a_{02} & a_{03} & \cdots & a_{0N} & - \\
- & a_{11} & a_{12} & a_{13} & \cdots & a_{1N} & a_{1f} \\
- & a_{21} & a_{22} & a_{23} & \cdots & a_{2N} & a_{2f} \\
- & \vdots & \vdots & \vdots & \ddots & \vdots & \vdots \\
- & a_{N1} & a_{N2} & a_{N3} & \cdots & a_{NN} & a_{Nf} \\
- & - & - & - & - & - & - \\
\end{bmatrix}$$

Where:
- $a_{ij}$ represents the probability of transitioning from state $s_i$ to state $s_j$
- Formally: $a_{ij} = P(X_t = s_j | X_{t-1} = s_i)$

### Properties of Transition Probabilities

1. **Row Summation**: For each state $i$, the sum of all outgoing transition probabilities must equal 1:
   $$\sum_{j=0}^{N+1} a_{ij} = 1$$

2. **Non-negativity**: All transition probabilities must be non-negative:
   $$a_{ij} \geq 0 \text{ for all } i,j$$

3. **Markov Property**: The probability depends only on the current state, not on how the model arrived at that state.

### Example: Dice HMM

In the fraudulent croupier example with two dice (fair and loaded):

- $a_{FF}$ = probability of using the fair dice again after using the fair dice
- $a_{FL}$ = probability of switching from fair to loaded dice
- $a_{LF}$ = probability of switching from loaded to fair dice
- $a_{LL}$ = probability of using the loaded dice again after using the loaded dice

These probabilities can be estimated from training data:

$$a_{ij} \approx \frac{\text{count}_{\text{trans}}(X_t = s_i, X_{t+1} = s_j)}{\text{count}_{\text{trans}}(X_t = s_i)}$$

## 2.2 - Emission Probability Matrix

The **emission probability matrix** (also called **observation likelihood matrix**) is represented as matrix **B**. It defines the probability of observing a particular output given that the model is in a specific hidden state.

For an HMM with N emitting states and M possible observations, plus special start and end symbols, the emission matrix B is of size (M+2) × (N+2):

$$B = \begin{bmatrix}
b_0(k_0) & - & - & - & \cdots & - & - \\
- & b_1(k_1) & b_2(k_1) & b_3(k_1) & \cdots & b_N(k_1) & - \\
- & b_1(k_2) & b_2(k_2) & b_3(k_2) & \cdots & b_N(k_2) & - \\
- & \vdots & \vdots & \vdots & \ddots & \vdots & - \\
- & b_1(k_M) & b_2(k_M) & b_3(k_M) & \cdots & b_N(k_M) & - \\
- & - & - & - & \cdots & - & b_f(k_f) \\
\end{bmatrix}$$

Where:
- $b_i(k_j)$ represents the probability of emitting observation $k_j$ when in state $s_i$
- Formally: $b_i(k_j) = P(O_t = k_j | X_t = s_i)$

### Output Independence Property

An important property of HMMs is **output independence**, which states that the probability of an output observation depends only on the current state:

$$P(O_t | X_1...X_t, ..., X_T, O_1, ..., O_t, ..., O_T) \approx P(O_t | X_t)$$

This means that the current observation is conditionally independent of all other states and observations given the current state.

### Estimation of Emission Probabilities

Emission probabilities can be estimated from training data:

$$b_i(k_j) \approx \frac{\text{count}_{\text{emission}}(O_t = k_j, X_t = s_i)}{\text{count}_{\text{emission}}(X_t = s_i)}$$

### Example: Dice HMM

In the fraudulent croupier scenario:
- For the fair dice (state F):
  - $b_F(1) = b_F(2) = b_F(3) = b_F(4) = b_F(5) = b_F(6) = \frac{1}{6}$

- For the loaded dice (state L):
  - The probabilities $b_L(1), b_L(2), \ldots, b_L(6)$ would have a different distribution, reflecting the bias of the loaded dice.

## 2.3 - Start and End States

HMMs typically include **special start state** ($s_0$) and **special end state** ($s_f$) to explicitly model the beginning and end of observation sequences.

### Start State ($s_0$)

- Not associated with "real" observations
- Transitions from $s_0$ to other states (represented by $a_{0i}$) define the initial state distribution
- No transitions into the start state are defined (all $a_{i0}$ are undefined)

### End State ($s_f$)

- Not associated with "real" observations
- Transitions from other states to $s_f$ (represented by $a_{if}$) define the probability of sequence termination
- No transitions out of the end state are defined (all $a_{fi}$ are undefined)

### Special Observations

Similarly, special symbols are defined:
- $k_0$: special start symbol, emitted only by the start state
- $k_f$: special end symbol, emitted only by the end state

### Complete HMM Definition

With these components defined, a complete first-order HMM is formally specified by:

1. A set of $N$ emitting states $S_e = \{s_1, s_2, \ldots, s_N\}$
2. Special start state $s_0$ and end state $s_f$
3. An output alphabet of $M$ observations $K = \{k_1, k_2, \ldots, k_M\}$
4. Special start symbol $k_0$ and end symbol $k_f$
5. State transition probability matrix $A$
6. Emission probability matrix $B$

The HMM can be denoted as $\mu = (A, B)$ with these parameters.

### Visual Representation

![image](https://github.com/user-attachments/assets/e22cd86e-6c5b-4cc0-82de-d4782a088fc2)

![image](https://github.com/user-attachments/assets/2a3c2b5f-1a84-4a71-ba7d-f25a75ceaaae)

> Showing the dice HMM with start state, end state, and transitions between states

In this diagram, $a_{01}$ and $a_{02}$ represent probabilities of starting with the loaded or fair dice, while $a_{1f}$ and $a_{2f}$ represent probabilities of ending the sequence when in each state.


# 3 - HMM Problems and Algorithms

## 3.1 - Problem 1: Labelled Learning (Parameter Estimation)

**Labelled learning** is the problem of estimating the parameters of an HMM (transition and emission probabilities) when we have access to both observation sequences and their corresponding hidden state sequences.

### Input and Output

- **Input**: Parallel sequences of observations and states (dual tape)
- **Output**: HMM parameters (transition matrix A and emission matrix B)

This is the simplest of the HMM learning problems because we can directly count transitions and emissions from the labelled data.

### Parameter Estimation Formulas

The **transition probabilities** $a_{ij}$ are estimated using:

$$a_{ij} = P(X_{t+1} = s_j | X_t = s_i) \approx \frac{\text{count}_{\text{trans}}(X_t = s_i, X_{t+1} = s_j)}{\text{count}_{\text{trans}}(X_t = s_i)}$$

Where:
- $\text{count}_{\text{trans}}(X_t = s_i, X_{t+1} = s_j)$ is the number of times state $s_i$ is followed by state $s_j$
- $\text{count}_{\text{trans}}(X_t = s_i)$ is the total number of times state $s_i$ appears

The **emission probabilities** $b_i(k_j)$ are estimated using:

$$b_i(k_j) = P(O_t = k_j | X_t = s_i) \approx \frac{\text{count}_{\text{emission}}(O_t = k_j, X_t = s_i)}{\text{count}_{\text{emission}}(X_t = s_i)}$$

Where:
- $\text{count}_{\text{emission}}(O_t = k_j, X_t = s_i)$ is the number of times observation $k_j$ is emitted from state $s_i$
- $\text{count}_{\text{emission}}(X_t = s_i)$ is the total number of times state $s_i$ appears

### Example: Dice HMM Parameter Estimation

Given the following labelled sequence:

```
States:   F F F F L L L F F F F L L L L F F F L L
Observations: 1 3 4 5 6 6 5 1 2 3 1 4 3 5 4 1 2 6 1 2
```

We can count:
- Transitions: F→F, F→L, L→L, L→F
- Emissions: (F,1), (F,2), (F,3), ..., (L,1), (L,2), ...

For example, to calculate $a_{FL}$ (probability of transitioning from fair to loaded dice):
$$a_{FL} = \frac{\text{count}(F \rightarrow L)}{\text{count}(F)} = \frac{3}{12} = 0.25$$

Similarly, to calculate $b_L(6)$ (probability of rolling a 6 with the loaded dice):
$$b_L(6) = \frac{\text{count}(6|L)}{\text{count}(L)} = \frac{1}{8} = 0.125$$

### Smoothing

In practice, **add-one smoothing** (or other smoothing techniques) is often applied to handle zero counts and avoid zero probabilities.

## 3.2 - Problem 2: Unlabelled Learning

**Unlabelled learning** is the problem of estimating the HMM parameters when we only have access to observation sequences, without the corresponding hidden state sequences.

This is a more challenging problem since we don't know which states generated which observations.

### Solution Approach

The standard algorithm for unlabelled learning is the **Baum-Welch algorithm**, which is a special case of the **Expectation-Maximization (EM)** algorithm:

1. **Expectation step**: Compute the expected counts of transitions and emissions based on current parameter estimates
2. **Maximization step**: Re-estimate the parameters to maximize the likelihood of the observations

The algorithm iterates between these steps until convergence, typically reaching a local optimum.

### Challenges

- Requires initialization of parameters
- Converges to local optima, not necessarily global
- More computationally intensive than labelled learning
- May require multiple random restarts with different initializations

## 3.3 - Problem 3: Likelihood Calculation

**Likelihood calculation** is the problem of determining the probability of an observation sequence given an HMM: $P(O|\mu)$.

This calculation is useful for:
- Comparing different HMMs
- Evaluating how well an HMM explains new data
- Component in the Baum-Welch algorithm

### Forward Algorithm

The standard approach uses the **Forward algorithm**, which efficiently computes the likelihood using dynamic programming:

1. Define forward variables $\alpha_t(i)$ as the probability of observing the partial sequence $O_1, O_2, ..., O_t$ and ending in state $s_i$
2. Recursively calculate these variables
3. Sum over all possible final states to get the total likelihood

The algorithm has complexity $O(N^2T)$ where $N$ is the number of states and $T$ is the sequence length.

## 3.4 - Problem 4: Decoding (Viterbi Algorithm)

**Decoding** is the problem of finding the most likely sequence of hidden states that could have generated a given observation sequence.

Formally, we want to find:

$$\hat{X} = \arg\max_{X} P(X, O|\mu) = \arg\max_{X} P(O|X, \mu)P(X|\mu)$$

Which expands to:

$$\hat{X} = \arg\max_{X_{1...T}} \prod_{t=1}^{T} P(O_t|X_t)P(X_t|X_{t-1})$$

### Dynamic Programming Solution

The search space of all possible state sequences is $O(N^T)$, making brute force search impractical. Instead, we use the **Viterbi algorithm**, which is a dynamic programming approach.

The Viterbi algorithm works because HMMs satisfy two key properties:
1. **Optimal substructure**: The best path to a state contains within it optimal sub-paths
2. **Overlapping subproblems**: Calculations for later states reuse calculations from earlier states

### The Viterbi Algorithm

The algorithm uses a **trellis** data structure to memoize intermediate results. The trellis is a $(N+2) \times (T+2)$ grid where:
- Rows represent states
- Columns represent time steps

![image](https://github.com/user-attachments/assets/6f3aa65c-afa7-4482-b8e2-6fc3adcf7b1b)

![image](https://github.com/user-attachments/assets/2a2df515-34c3-469f-835b-4caee0800884)

![image](https://github.com/user-attachments/assets/836cad11-f7aa-401d-bfa5-fc4c9578de3e)

![image](https://github.com/user-attachments/assets/faf76415-978d-40c7-bb13-b5ffc3d36a92)

![image](https://github.com/user-attachments/assets/22bc67f4-6f32-4fd9-b352-d1d551353636)

![image](https://github.com/user-attachments/assets/7d85dc02-0b54-4b7d-ba32-d496fc633b33)

![image](https://github.com/user-attachments/assets/ec9dc820-a2a0-4887-ad34-15a601f20af5)

![image](https://github.com/user-attachments/assets/2bf2dc22-a522-4315-b16c-40aafaa19de6)

![image](https://github.com/user-attachments/assets/959aa5d6-2126-45bc-acd6-f87f44f99db3)

![image](https://github.com/user-attachments/assets/f8970eeb-cc5e-4f25-bc89-bf1d8bb6dd51)

![image](https://github.com/user-attachments/assets/1758b3af-53ae-41c6-94ef-8c0d03ca803a)

![image](https://github.com/user-attachments/assets/1b294e31-2482-4351-8fa5-10aa7329e27f)

![image](https://github.com/user-attachments/assets/24e1d354-76a4-459f-b9c7-c5f520d1693f)

![image](https://github.com/user-attachments/assets/bbbf59f8-9336-4896-af6d-e505ab902082)

![image](https://github.com/user-attachments/assets/02bf76f8-e044-4eb4-929d-1080cae3687a)

![image](https://github.com/user-attachments/assets/4112819e-d81e-4610-95a9-338b4af99eca)

![image](https://github.com/user-attachments/assets/04a56532-af7a-40ba-966c-af957a703a34)

![image](https://github.com/user-attachments/assets/f6f954e9-34aa-4ed9-8fd5-2f2d91ead6bc)

![image](https://github.com/user-attachments/assets/70b2cf72-f8a1-40c7-9e66-fe155108e67e)

![image](https://github.com/user-attachments/assets/a80fe6bb-1dea-4711-b957-6ec0dfbf582a)

![image](https://github.com/user-attachments/assets/333a8b1e-7066-4ba3-88fc-54e331c504fa)

![image](https://github.com/user-attachments/assets/1b4d7cb1-76b5-4db3-91e5-312bf2225479)

![image](https://github.com/user-attachments/assets/adc045ec-b254-4894-9acf-a184abb72916)

![image](https://github.com/user-attachments/assets/0e195bb3-be88-4785-9be1-531241a6ce48)

![image](https://github.com/user-attachments/assets/ee7403e4-50eb-4279-a39c-42368d88db7a)

![image](https://github.com/user-attachments/assets/1b9ce282-a35d-4dc6-9e82-33395db94cea)

![image](https://github.com/user-attachments/assets/d47ea210-cd6b-4424-b65f-c850322f9319)


#### Key Variables

1. **Viterbi Probability** $\delta_j(t)$: The probability of the most likely path ending in state $s_j$ at time $t$
2. **Backpointer** $\psi_j(t)$: The previous state in the most likely path to state $s_j$ at time $t$

#### Algorithm Steps

**1. Initialization (t=0)**:
- Initialize the Viterbi probability for the start state: $\delta_0(0) = 1$
- Initialize all other Viterbi probabilities to 0: $\delta_j(0) = 0$ for $j \neq 0$

**2. Recursion (t=1 to T)**:
- For each state $s_j$ and time $t$, compute:
  $$\delta_j(t) = \max_{1 \leq i \leq N} [\delta_i(t-1) \cdot a_{ij} \cdot b_j(O_t)]$$
  $$\psi_j(t) = \arg\max_{1 \leq i \leq N} [\delta_i(t-1) \cdot a_{ij} \cdot b_j(O_t)]$$

**3. Termination**:
- Compute the probability of the most likely path ending in the final state:
  $$\delta_f(T+1) = \max_{1 \leq i \leq N} [\delta_i(T) \cdot a_{if}]$$
  $$\psi_f(T+1) = \arg\max_{1 \leq i \leq N} [\delta_i(T) \cdot a_{if}]$$

**4. Backtracing**:
- Start at the end state: $x_{T+1} = s_f$
- For $t = T$ down to 1, find the previous state:
  $$x_t = s_{\psi_{x_{t+1}}(t+1)}$$

The result is the most likely state sequence $X = (x_1, x_2, ..., x_T)$.

### Example: Dice HMM Decoding

Suppose we observe the sequence [4, 3, 5] and want to determine whether the fair or loaded dice was used at each step.

![image](https://github.com/user-attachments/assets/6f3aa65c-afa7-4482-b8e2-6fc3adcf7b1b)

![image](https://github.com/user-attachments/assets/2a2df515-34c3-469f-835b-4caee0800884)

![image](https://github.com/user-attachments/assets/836cad11-f7aa-401d-bfa5-fc4c9578de3e)

![image](https://github.com/user-attachments/assets/faf76415-978d-40c7-bb13-b5ffc3d36a92)

![image](https://github.com/user-attachments/assets/22bc67f4-6f32-4fd9-b352-d1d551353636)

![image](https://github.com/user-attachments/assets/7d85dc02-0b54-4b7d-ba32-d496fc633b33)

![image](https://github.com/user-attachments/assets/ec9dc820-a2a0-4887-ad34-15a601f20af5)

![image](https://github.com/user-attachments/assets/2bf2dc22-a522-4315-b16c-40aafaa19de6)

![image](https://github.com/user-attachments/assets/959aa5d6-2126-45bc-acd6-f87f44f99db3)

![image](https://github.com/user-attachments/assets/f8970eeb-cc5e-4f25-bc89-bf1d8bb6dd51)

![image](https://github.com/user-attachments/assets/1758b3af-53ae-41c6-94ef-8c0d03ca803a)

![image](https://github.com/user-attachments/assets/1b294e31-2482-4351-8fa5-10aa7329e27f)

![image](https://github.com/user-attachments/assets/24e1d354-76a4-459f-b9c7-c5f520d1693f)

![image](https://github.com/user-attachments/assets/bbbf59f8-9336-4896-af6d-e505ab902082)

![image](https://github.com/user-attachments/assets/02bf76f8-e044-4eb4-929d-1080cae3687a)

![image](https://github.com/user-attachments/assets/4112819e-d81e-4610-95a9-338b4af99eca)

![image](https://github.com/user-attachments/assets/04a56532-af7a-40ba-966c-af957a703a34)

![image](https://github.com/user-attachments/assets/f6f954e9-34aa-4ed9-8fd5-2f2d91ead6bc)

![image](https://github.com/user-attachments/assets/70b2cf72-f8a1-40c7-9e66-fe155108e67e)

![image](https://github.com/user-attachments/assets/a80fe6bb-1dea-4711-b957-6ec0dfbf582a)

![image](https://github.com/user-attachments/assets/333a8b1e-7066-4ba3-88fc-54e331c504fa)

![image](https://github.com/user-attachments/assets/1b4d7cb1-76b5-4db3-91e5-312bf2225479)

![image](https://github.com/user-attachments/assets/adc045ec-b254-4894-9acf-a184abb72916)

![image](https://github.com/user-attachments/assets/0e195bb3-be88-4785-9be1-531241a6ce48)

![image](https://github.com/user-attachments/assets/ee7403e4-50eb-4279-a39c-42368d88db7a)

![image](https://github.com/user-attachments/assets/1b9ce282-a35d-4dc6-9e82-33395db94cea)

![image](https://github.com/user-attachments/assets/d47ea210-cd6b-4424-b65f-c850322f9319)
The trellis calculation would proceed as follows:

1. **Initialization**: Start at the start state
2. **For t=1 (observation=4)**:
   - Calculate $\delta_F(1)$ and $\delta_L(1)$ based on transitions from start state
3. **For t=2 (observation=3)**:
   - Calculate $\delta_F(2)$ and $\delta_L(2)$ based on values from t=1
4. **For t=3 (observation=5)**:
   - Calculate $\delta_F(3)$ and $\delta_L(3)$ based on values from t=2
5. **Termination**: Calculate transition to end state
6. **Backtracing**: Follow the backpointers to determine the most likely sequence

The output would be the most likely sequence of dice used (F or L) that produced the observed numbers.

### Complexity

The time complexity of the Viterbi algorithm is $O(N^2T)$, where:
- $N$ is the number of states
- $T$ is the length of the observation sequence

This is much more efficient than the brute force approach of checking all $N^T$ possible state sequences.

# 4 - Evaluation and Testing

## 4.1 - Precision and Recall

When evaluating HMM performance, we often need more nuanced metrics than overall accuracy, especially when the classes are imbalanced or we're particularly interested in one type of state.

**Precision** and **recall** are evaluation metrics imported from information retrieval that provide a more detailed assessment of performance for specific classes of interest.

### Why Not Just Use Accuracy?

**Accuracy** measures the overall correctness of predictions:

$$\text{Accuracy} = \frac{\text{Number of correct predictions}}{\text{Total number of predictions}} = \frac{a+d}{a+b+c+d}$$

However, accuracy has limitations:
- It can be misleading when classes are imbalanced
- It doesn't distinguish between different types of errors
- It doesn't focus on the class of interest

### Precision, Recall and F-measure

Given a confusion matrix:

|                 | System says: F | System says: L | Total   |
| --------------- | -------------- | -------------- | ------- |
| **Truth is: F** | a              | b              | a+b     |
| **Truth is: L** | c              | d              | c+d     |
| **Total**       | a+c            | b+d            | a+b+c+d |

The key metrics are:

**Precision of L**: The proportion of instances classified as L that are actually L
$$P_L = \frac{d}{b+d} = \frac{\text{number of correctly predicted L}}{\text{number of predicted L}}$$

**Recall of L**: The proportion of actual L instances that are correctly classified as L
$$R_L = \frac{d}{c+d} = \frac{\text{number of correctly predicted L}}{\text{true number of L}}$$

**F-measure of L**: The harmonic mean of precision and recall
$$F_L = \frac{2P_L R_L}{P_L + R_L}$$

### Example: Evaluating Dice HMM

Consider a test set where our HMM tries to determine whether the fair (F) or loaded (L) dice was used:

|               | Predicted: F | Predicted: L | Total |
| ------------- | ------------ | ------------ | ----- |
| **Actual: F** | 45           | 5            | 50    |
| **Actual: L** | 10           | 40           | 50    |
| **Total**     | 55           | 45           | 100   |

Calculating metrics for the loaded dice (L):
- Precision: $P_L = \frac{40}{45} = 0.889$ (88.9% of predictions of L are correct)
- Recall: $R_L = \frac{40}{50} = 0.8$ (80% of actual L instances are detected)
- F-measure: $F_L = \frac{2 \times 0.889 \times 0.8}{0.889 + 0.8} = \frac{1.422}{1.689} = 0.842$
- Accuracy: $\frac{45+40}{100} = 0.85$ (85% overall correct predictions)

## 4.2 - Baseline Algorithms

A **baseline algorithm** is a simpler alternative to your proposed solution that serves as a comparison point. Baselines help quantify how much improvement your model provides over simpler approaches.

### Importance of Baselines

Baselines serve several crucial purposes:
- They establish a minimum performance level that any useful algorithm should exceed
- They help contextualize how "good" your results actually are
- They demonstrate the value added by your more complex approach

### Criteria for Effective Baselines

A good baseline should:
1. Require **considerably less effort** than your proposed solution
2. Be **easily understandable** to other researchers
3. Have "fair" access to a reasonable amount of information
4. Be **strong enough** to be meaningful but not so strong as to be nearly equivalent to your solution

### Common Baseline Approaches

1. **Most Frequent Category (MFC)**: Always predict the most common class in the training data
2. **Random Prediction**: Randomly assign states based on their observed distribution
3. **Simple Rules**: Apply straightforward heuristics (e.g., always predict state X after observation Y)
4. **Existing Implementations**: Use previously published algorithms as comparison points

### Baseline for HMM Decoding

For HMM decoding, a common baseline is **random guessing of hidden states**:
- Only knows how often the HMM is in each state on average (the observed distribution of states)
- Does not use information about sequences or observations
- For each position, randomly selects a state according to the state's overall frequency

This baseline tests how much the sequential modeling in an HMM improves prediction compared to simply knowing state frequencies.

## 4.3 - Statistical Significance Testing

When comparing two systems (e.g., your HMM vs. a baseline), observed performance differences might be due to chance rather than actual superiority of one approach. **Statistical significance testing** helps determine whether observed differences are likely to be meaningful.

### Null Hypothesis Testing

The framework is based on testing the **null hypothesis** that two result sets come from the same distribution (i.e., the systems are equally good).

Steps in statistical testing:
1. Choose a **significance level** (α), typically 0.01 or 0.05
2. Calculate a test statistic and its corresponding p-value
3. If p-value < α, reject the null hypothesis with confidence 1-α (95% or 99%)

### The Sign Test

The **sign test** is a non-parametric, paired test that's particularly suitable for comparing classification systems:

1. For each test instance, determine which system performs better:
   - Positive outcome: System 1 beats System 2
   - Negative outcome: System 2 beats System 1
   - Tie: Both systems perform equally

2. Under the null hypothesis (systems are equal), the probability of positive and negative outcomes should be equal (0.5)

3. The counts follow a **binomial distribution** B(N,q) where:
   - N is the total number of non-tie comparisons
   - q is the probability of a negative outcome (0.5 under the null hypothesis)

### Binomial Distribution

The probability of observing exactly k negative events out of N is:

$$P_q(X = k|N) = \binom{N}{k} q^k (1-q)^{N-k}$$

The probability of observing at most k negative events:

$$P_q(X \leq k|N) = \sum_{i=0}^{k} \binom{N}{i} q^i (1-q)^{N-i}$$

### One-Tailed vs. Two-Tailed Tests

- **One-tailed test**: Tests if System 1 is better than System 2 (directional)
- **Two-tailed test**: Tests if the systems are different, regardless of direction (non-directional)

For a two-tailed test, the p-value is 2×P(X ≤ k) for the smaller count.

### Example: Sign Test

Suppose we compare our HMM against a baseline on 100 test instances:
- HMM better: 65 instances
- Baseline better: 35 instances
- Ties: 0 instances

Using the binomial distribution with N=100, k=35, q=0.5:
- P(X ≤ 35|100) = 0.0018

Since 0.0018 < 0.01 (our chosen significance level), we can reject the null hypothesis and conclude that the HMM is significantly better than the baseline with 99% confidence.

### Handling Ties

Ties (where both systems perform equally) are common in classification tasks. They can be handled by:
- Excluding ties from the analysis (reducing N)
- Adding 0.5 to both positive and negative counts for each tie

### Reporting Significance

When reporting results, only claim statistical significance if your test indicates it:
- "The difference between System 1 and System 2 is statistically significant at α = 0.01"
- Raw accuracy differences without significance testing may be meaningless

# 5 - Practical Applications

## 5.1 - Fraudulent Croupier Example

The fraudulent croupier scenario is a classic example used to illustrate HMMs in action. This example demonstrates how HMMs can detect hidden states when only observations are visible.

### Scenario Description

The scenario involves a dishonest casino croupier who secretly switches between dice:

- The croupier has multiple dice: a **fair dice** (F) and one or more **loaded dice** (L)
- The fair dice has equal probability (1/6) for each number
- The loaded dice have biased probability distributions
- When people bet on outcomes, the croupier secretly switches between dice
- An observer can only see the numbers rolled, not which dice is being used
- The goal is to detect when the croupier is cheating by using the loaded dice

### HMM Formulation

This scenario can be modeled as an HMM where:

- **Hidden states**: The type of dice being used (F or L)
- **Observations**: The numbers rolled (1-6)
- **Transition probabilities**: How likely the croupier is to switch dice or continue using the same one
- **Emission probabilities**: The probability of rolling each number with each dice

![image](https://github.com/user-attachments/assets/e22cd86e-6c5b-4cc0-82de-d4782a088fc2)

![image](https://github.com/user-attachments/assets/2a3c2b5f-1a84-4a71-ba7d-f25a75ceaaae)

> Showing the dice HMM with states, observations, and transition probabilities

### Variant with Three Dice

In a more complex version (as seen in tutorial 04), the croupier has three dice:
- A fair dice (F)
- Two different loaded dice (L1 and L2)

The HMM structure becomes more complex with additional states and transitions.

### Parameter Estimation Example

Given training data with known dice types:

```
States:      F F F F L L L F F F F L L L L F F F L L
Observations: 1 3 4 5 6 6 5 1 2 3 1 4 3 5 4 1 2 6 1 2
```

We can estimate the transition probabilities:

- $a_{FF}$ (staying with fair dice): $\frac{count(F \rightarrow F)}{count(F)} = \frac{9}{12} = 0.75$
- $a_{FL}$ (switching from fair to loaded): $\frac{count(F \rightarrow L)}{count(F)} = \frac{3}{12} = 0.25$
- $a_{LL}$ (staying with loaded dice): $\frac{count(L \rightarrow L)}{count(L)} = \frac{6}{8} = 0.75$
- $a_{LF}$ (switching from loaded to fair): $\frac{count(L \rightarrow F)}{count(L)} = \frac{2}{8} = 0.25$

And the emission probabilities:

- For fair dice: $b_F(1) = \frac{count(1|F)}{count(F)} = \frac{4}{12} = 0.333$
- For loaded dice: $b_L(1) = \frac{count(1|L)}{count(L)} = \frac{1}{8} = 0.125$

### Decoding with Viterbi

Given only an observation sequence [4, 3, 5], we can use the Viterbi algorithm to determine the most likely sequence of dice used:

1. Construct a trellis with states (F, L) as rows and time steps as columns
2. Fill in the probability of reaching each state at each time step
3. Backtrace to find the most likely state sequence

The result might be [F, F, L], indicating the first two rolls were likely from the fair dice and the third from the loaded dice.

### Variants and Constraints

The tutorial materials (tut04.pdf) discuss several interesting variants of the croupier's behavior:

1. **Never switching directly from F to L2**: This constraint can be represented by setting $a_{F,L2} = 0$
2. **Always ending with fair dice**: This constraint means $a_{1E} = a_{2E} = 0$ (only fair dice can transition to end state)
3. **Never using loaded dice more than twice in a row**: This requires a second-order HMM to properly model
4. **Always switching after rolling a 6**: This relates emissions to transitions and cannot be directly modeled in a standard HMM

## 5.2 - Part-of-Speech Tagging

**Part-of-Speech (POS) tagging** is the task of assigning grammatical categories (noun, verb, adjective, etc.) to words in a text. This is a classic application of HMMs in natural language processing.

### The Problem of Ambiguity

Many words in English and other languages are ambiguous regarding their part of speech:

- "can" → verb or auxiliary verb or noun
- "fish" → noun or verb
- "watch" → noun or verb

For example, the sentence "We can fish" is ambiguous:
- "We can fish" = "We are able to fish" (auxiliary verb + verb)
- "We can fish" = "We put fish in cans" (verb + noun)

A human understands the correct interpretation based on context, and an HMM can use probabilistic transitions to model this context.

### HMM Formulation for POS Tagging

In the POS tagging HMM:

- **Hidden states**: The POS tags (noun, verb, pronoun, etc.)
- **Observations**: The words in the text
- **Transition probabilities**: The probability of one POS tag following another
- **Emission probabilities**: The probability of a word being generated by a particular POS tag

### Example from Lecture Notes

The lecture presents an example with the sentence "We can fish." and an HMM with four states:
- $s_1$ = verb
- $s_2$ = noun
- $s_3$ = personal pronoun
- $s_4$ = auxiliary verb

The transition probability matrix A is:

$$A = \begin{bmatrix}
a_{01} = 0.01 & a_{02} = 0.10 & a_{03} = 0.60 & a_{04} = 0.29 \\
a_{11} = 0.02 & a_{12} = 0.63 & a_{13} = 0.07 & a_{14} = 0.13 & a_{1f} = 0.15 \\
a_{21} = 0.49 & a_{22} = 0.20 & a_{23} = 0.10 & a_{24} = 0.01 & a_{2f} = 0.20 \\
a_{31} = 0.40 & a_{32} = 0.05 & a_{33} = 0.05 & a_{34} = 0.40 & a_{3f} = 0.10 \\
a_{41} = 0.73 & a_{42} = 0.01 & a_{43} = 0.15 & a_{44} = 0.01 & a_{4f} = 0.10
\end{bmatrix}$$

And the emission probability matrix B is:

$$B = \begin{bmatrix}
b_1(fish) = 0.89 & b_2(fish) = 0.75 & b_3(fish) = 0 & b_4(fish) = 0 \\
b_1(can) = 0.10 & b_2(can) = 0.24 & b_3(can) = 0 & b_4(can) = 1 \\
b_1(we) = 0.01 & b_2(we) = 0.01 & b_3(we) = 1 & b_4(we) = 0
\end{bmatrix}$$

### Analyzing Two Interpretations

The notes examine two possible state sequences:
1. $X_a = s_0, s_3, s_4, s_1, s_f$ (We = pronoun, can = auxiliary verb, fish = verb)
2. $X_b = s_0, s_3, s_1, s_2, s_f$ (We = pronoun, can = verb, fish = noun)

Calculating the probabilities:
- $P(X_a) = a_{03} \times a_{34} \times a_{41} \times a_{1f} = 0.60 \times 0.40 \times 0.73 \times 0.15 = 0.02628$
- $P(X_a, O) = P(X_a) \times b_3(we) \times b_4(can) \times b_1(fish) = 0.02628 \times 1 \times 1 \times 0.89 = 0.0233892$
- $P(X_b) = 0.03024$
- $P(X_b, O) = 0.002268$

Since $P(X_a, O) > P(X_b, O)$, the model predicts the first interpretation: "We (pronoun) can (auxiliary verb) fish (verb)" = "We are able to fish."

### Viterbi for POS Tagging

In practice, we use the Viterbi algorithm to find the most likely sequence of POS tags for a given sentence:

1. For each word and each possible POS tag, compute the probability of the best path ending with that tag
2. Keep track of the previous tag in the best path
3. Backtrace from the end to recover the most likely sequence of tags

### Importance in NLP

POS tagging is a fundamental task in natural language processing that serves as:
- A preprocessing step for parsing and semantic analysis
- An essential component in information extraction
- A disambiguation technique for machine translation
- A foundation for many higher-level NLP tasks

The success of HMMs in POS tagging demonstrates their power in modeling sequential data with hidden structure, even in complex domains like human language.
