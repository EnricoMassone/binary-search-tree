class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  isLeaf() {
    return this.left === null && this.right === null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    throw new Error("Not implemented yet");
  }

  toObject() {
    return this.root;
  }
}

exports.Node = Node;
exports.Tree = Tree;