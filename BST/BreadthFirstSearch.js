class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);

    this.checkRootExists(newNode);

    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        this.checkLeftNodeExists(current, newNode);
        current = current.left;
      } else {
        this.checkRightNodeExists(current, newNode);
        current = current.right;
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

  find(val) {
    //can switch method name to contains.
    if (this.root === null) return false;
    var current = this.root;
    var found = false;

    while (current && !found) {
      //found will always be false. current will only be false when we hit the end of the tree & will then cause the loop to break;
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        found = true; //return true
      }
    }
    if (!found) return undefined; //optional to remove this and just have return false and not return current.
    return current;
  }

  //BreadthFirstSearch
  BFS() {
    var current = this.root, //set to this.root works too
      visited = [], //returned at the very end, the order of the nodes visited in horizonal order
      queue = []; //track the nodes visited
    queue.push(current); //add to end
    while (queue.length) {
      //queue is not empty remove an item from the beginning to follow FIFO principle
      current = queue.shift();
      visited.push(current.value); //add the current to the visited array that's being returned at the end
      //check if there is a left/right current that needs to be added to the queue
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }

  DFSPreOrder() {
    var data = [];
    var current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);

    return data;
  }

  DFSPostOrder() {
    var data = [];
    var current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(current);
    return data;
  }

  DFSInOrder() {
    var data = [];
    var current = this.root;

    function traverse(node) {
      node.left && traverse(node.left); //same as having an if statement, this will still check if it's truthy/ non-zero
      data.push(node.value);
      node.right && traverse(node.right);
    }

    traverse(current);
    return data;
  }
}

//      10
//   6     15
// 3  8      20

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(8);
tree.insert(3);
tree.insert(15);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
console.log(tree);
