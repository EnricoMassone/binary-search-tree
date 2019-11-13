class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  isLeaf() {
    return this.left === null && this.right === null;
  }

  hasLeftChild() {
    return this.left !== null;
  }

  hasRightChild() {
    return this.right !== null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    let current = this.root;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (value <= current.value && !current.hasLeftChild()) {
        current.left = new Node(value);
        break;
      }

      if (value > current.value && !current.hasRightChild()) {
        current.right = new Node(value);
        break;
      }

      if (value <= current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  toObject() {
    return this.root;
  }
}

exports.Node = Node;
exports.Tree = Tree;