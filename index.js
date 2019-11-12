class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    throw new Error("Not implemented yet");
  }
}

exports.Node = Node;
exports.Tree = Tree;