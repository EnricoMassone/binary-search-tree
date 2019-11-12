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
    } else {
      addValueToTree(this.root, value);
    }
  }

  toObject() {
    return this.root;
  }
}

const addValueToTree = (treeRoot, value) => {
  if (treeRoot.isLeaf()) {
    appendChildToLeaf(treeRoot, value);
    return;
  }

  if (value <= treeRoot.value && !treeRoot.hasLeftChild()) {
    treeRoot.left = new Node(value);
    return;
  }

  if (value > treeRoot.value && !treeRoot.hasRightChild()) {
    treeRoot.right = new Node(value);
    return;
  }

  if (value <= treeRoot.value) {
    addValueToTree(treeRoot.left, value);
  } else {
    addValueToTree(treeRoot.right, value);
  }
};

exports.Node = Node;
exports.Tree = Tree;