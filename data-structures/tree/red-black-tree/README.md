## 레드-블랙 트리

레드-블랙 트리는 자가 균형 이진 탐색 트리로써, 대표적으로는 연관 배열 등을 구현하는 데 쓰이는 자료 구조이다. 각 노드에 색깔을 저장하는 공간을 추가하여 색깔을 기준으로 균형을 맞추는 트리이다.

## 레드-블랙 트리 규칙

- 모든 노드는 RED이거나 BLACK이다
- 루트는 BLACK이다.
- 모든 리프(자식이 없는 노드)는 BLACK이다.
- 노드가 RED이면 그 노드의 자식은 모두 BLACK이다.
- 각 노드로부터 그 노드의 자손인 리프로 가는 경로들은 모두 같은 수의 BLACK 노드를 포함한다.

![red-black tree](https://upload.wikimedia.org/wikipedia/commons/6/66/Red-black_tree_example.svg)
