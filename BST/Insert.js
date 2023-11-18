class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  Insert(value) {
    var newNode = new Node(value);

    this.checkRootExists(newNode);

    var current = this.root;
    while (true) {
      if (value < current.value) {
        // break if we insert a node
        this.checkLeftNodeExists(newNode);
        current = current.left;
      } else {
        if (newNode > this.right) {
          // break if we insert a node
          this.checkRightNodeExists(newNode);
          current = current.right;
        }
      }
    }
  }

  checkRootExists(newNode) {
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
  }

  checkLeftNodeExists(current, newNode) {
    if (current.left === null) {
      current.left = newNode;
      return this;
    }
  }

  checkRightNodeExists(current, newNode) {
    if (current.right === null) {
      current.right = newNode;
      return this;
    }
  }
}

var tree = new BST();
tree.Insert(10);
tree.Insert(6);
// tree.root = new Node(10);
// tree.right = new Node(15);
// tree.left = new Node(6);
// tree.left.right = new Node(8);
console.log(tree);
