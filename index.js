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

const appendChildToLeaf = (leafNode, value) => {
  if (!leafNode.isLeaf()) {
    throw new Error("This function is meant to append a child to a leaf node.");
  }

  if (value <= leafNode.value) {
    leafNode.left = new Node(value);
  } else {
    leafNode.right = new Node(value);
  }
};

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    if (this.root.isLeaf()) {
      appendChildToLeaf(this.root, value);
      return;
    }

    //if (value <= this.root.value && )
  }

  toObject() {
    return this.root;
  }
}

exports.Node = Node;
exports.Tree = Tree;