## Core Reinforcement Learning

- **Q-Learning Algorithm**: Standard Q-learning update formula is implemented
- **Dual Exploration Strategy**:
  - ε-Greedy: Takes random actions with probability ε
  - Count-Based Exploration: Adds an exploration bonus inversely proportional to visit frequency
- **Optimistic Initialisation**: Q-values start at positive values to encourage exploration
- **Parameter Adjustment**: Both learning rate (α) and exploration rate (ε) decrease as training progresses

## State Representation

- **Feature Extraction**: Custom abstraction of the game state focusing on relevant information
- **Relational Features**: Direction and distance to food/ghosts rather than absolute positions
- **BFS Pathfinding**: Efficient path calculation to important objects
- **Custom Hashing**: Allows similar states to be recognised as equivalent for better generalisation

## Optimisations

- **DefaultDict Usage**: Efficient automatic initialisation of new state-action pairs
- **Intelligent Tie-Breaking**: Prefers less-explored actions when Q-values are equal
- **Depth-Limited Search**: Prevents excessive computation in pathfinding