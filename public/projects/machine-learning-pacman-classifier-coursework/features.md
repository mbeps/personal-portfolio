## Core Classification Architecture
- Feed-forward neural network with configurable hidden layers
- ReLU activation functions for hidden layers
- Softmax output layer for 4-class movement prediction
- He initialisation for weights

## Optimisation Techniques
- Mini-batch gradient descent
- Momentum-based updates with velocity tracking
- Inverse scaling learning rate decay
- L2 regularisation
- Gradient clipping with norm thresholding

## Regularisation Methods
- Batch Normalisation
  - Running mean/variance tracking
  - Learnable scale (gamma) and shift (beta) parameters
  - Training/inference mode handling
- Dropout
  - Inverted dropout scaling
  - Configurable dropout rate

## Training Management
- Early stopping with validation monitoring
- Automatic hyperparameter optimisation via grid search
- Train/validation/test split (80/10/10)
- Best model checkpointing

## Implementation Features
- Type hints throughout codebase
- Numerical stability safeguards
- Comprehensive error handling
- Memory efficient operations
- Legal move validation and filtering
- Fallback strategies for edge cases