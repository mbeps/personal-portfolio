## Network Architecture
The network follows a progressive deepening structure, with each block increasing in complexity to learn more sophisticated features.

### Block 1
- Two Conv2D layers (32 filters, 3×3 kernel) - Captures basic edges and shapes
- BatchNormalisation after each Conv2D - Stabilises training
- MaxPooling (2×2) - Reduces spatial dimensions and computational load
- SpatialDropout2D (20%) - Prevents feature map co-adaptation

### Block 2
- Two Conv2D layers (96 filters, 3×3 kernel) - Learns intermediate-level patterns
- BatchNormalisation after each Conv2D - Maintains consistent feature scaling
- MaxPooling (2×2) - Further dimension reduction
- SpatialDropout2D (20%) - Continues regularisation

### Block 3
- Two Conv2D layers (128 filters, 3×3 kernel, 'same' padding) - Identifies complex digit features
- BatchNormalisation after each Conv2D - Normalises deeper features
- MaxPooling (2×2) - Final spatial reduction
- SpatialDropout2D (20%) - Ensures robust feature learning

### Dense Layers
- Flatten layer - Converts 2D features to 1D
- Dense layer (1050 units) with L2 regularisation - Rich feature combination
- BatchNormalisation - Stabilises deep network training
- Dropout (50%) - Prevents overfitting
- Output layer (10 units, softmax) - Produces digit probabilities

## Data Augmentation

### Static Augmentation (Albumentations)
- ElasticTransform - Simulates natural handwriting deformations
- GaussNoise - Adds resilience to image noise
- CoarseDropout - Improves robustness to missing parts
- RandomBrightnessContrast - Handles varying image qualities
- Image Inversion - Adapts to different digit colours

### Real-time Augmentation (ImageDataGenerator)
- Rotation - Handles tilted handwriting
- Width/Height shifts - Accounts for different digit positions
- Zoom range - Manages varying digit sizes

## Training Strategy

### Optimisation
- Adam optimiser with gradient clipping - Prevents explosive gradients
- Initial learning rate: 1e-3 - Balanced between speed and stability
- Batch size: 384 - Provides stable gradient estimates

### Training Callbacks
- Early Stopping - Prevents overfitting by monitoring validation loss
- Model Checkpoint - Preserves best model during training
- ReduceLROnPlateau - Adapts learning rate when progress plateaus

### Regularisation Techniques
- BatchNormalisation - Stabilises training throughout the network
- SpatialDropout2D - Specifically designed for convolutional features
- Standard Dropout - Prevents dense layer overfitting
- L2 regularisation - Controls weight growth

## Dataset Management
- Multiple dataset combination - Increases training diversity
- Image standardisation (28×28) - Ensures consistent input size
- Value normalisation [0,1] - Stabilises network training
- 90-10 split - Provides sufficient validation data
- Fixed random seed - Ensures reproducible results