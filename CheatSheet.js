// SINGLY LINKED LISTS
//piece of data - val
//reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        //initialize this.next to be null b/c there's nothing that comes after it in the beginning.
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //add a new node / item at the end of the ssl
    push(val) {
        var newNode = new Node(val);
        //edge case: check for an empty list
        if (!this.head) {

            this.head = newNode;
            this.tail = this.head;

        } else {

            //point the current tail's next property to the next Node
            this.tail.next = newNode;
            //set the tail equal to the newNode
            this.tail = newNode;
        }

        this.length++;
        //return the whole list
        return this;

    }

    traverse() { //traverse the list
        var current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
        return this;
    }

    //create a method called pop to traverse a list and remove the tail from the list and return it
    pop() {
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            //move current forward by one
            current = current.next;

        }
        console.log(current.val);
        console.log(newTail.val);
        this.tail = newTail;
        //sever the "pointing to the next property". When it's not pointing at anything then its next property can be set to null
        this.tail.next = null;
        this.length--;
        //another edge case to reset the head/tail since they were set to be the same value in the push method despite the length being 0
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    //remove an item at the beginning of the list
    shift() {
        if (!this.head) return undefined;
        var oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        //edge case to reset tail since only the head was set to null since it was removed
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }

    //add an item to the beginning of the list
    unshift(val) {
        var newNode = new Node(val);
        //first edge case: check if list is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return this;
        }
    }

    //return an item at a given index
    get(i) {
        //edge cases
        if (i < 0 || i >= this.length) return null;
        //loop through the list until the index is reached 
        //return the node at that specific index
        var current = this.head;
        var counter = 0;
        while (counter !== i) {
            current = current.next;
            counter++;
        }
        return current;
        //this solution works but it doesn't get the node at the 0th position
        //         while ( current.next ) {

        //             current = current.next;
        //             counter++;

        //             if ( counter === i ) {
        //                 return current;
        //             }

        //         }

    }

    //change the value of a node based on it's position in the linked list
    //if a node is found update its value and return true otherwise return false
    set(i, val) {
        var current = this.get(i);
        //my approach
        //         if ( !current ) {
        //             return false;
        //         } else {
        //             current.val = val;
        //             return true;
        //         }
        //colt steel's way
        if (current) {
            current.val = val;
            return true;
        }
        return false;
    }

    //add a new node to the linked list at a specific position 
    //inputs: index, value
    //outputs: return true/false
    //if i < 0 or > the list length return false
    //if i = length, push new node at the end of the list
    //i = 0, unshift new node at the beginning 
    //otherwise use the get method to access the node at i - 1
    //point that node next prop to the new node 
    //point the new node's next prop to the node that was previously next
    //increment the length
    //return true. (can coerce the push and unshift methods to return true);
    insert(i, val) {

        //edge cases
        if (i < 0 || i > this.length) return false;

        //i = 0
        if (i === 0) {
            this.unshift(val);
            return true;
            //or return !!this.unshift(val); 
            //unshift doesn't return true or false,  unshift returns the entire list
            //!! coerces the result into a boolean value
        } else if (i === this.length) { //i = this.length
            this.push(val);
            return true;
            //or return !!this.push(val);
        } else {
            //create the new node
            var newNode = new Node(val);
            var current = this.get(i - 1);
            var previousNode = this.get(i);
            //kolt's version
            //var temp = current.next;
            if (current && previousNode) {
                current.next = newNode;
                newNode.next = previousNode;
                //newNode.next = temp;
                this.length++;
                return true;
            }

        }

    }

    //create a function called remove to remove a node from a linked list at a specific index
    //inputs: index/i, value
    //output: true/false
    //edge cases: i < 0 or >= this.length, return null
    //if i = 0, call shift
    //if i is the last item/length - 1, use pop()
    //otherwise, remove the node at that specific index using get() at i - 1
    //set the next prop on the prev node to point to the removed node's next node
    remove(i) {
        if (i < 0 || i >= this.length) return null;

        if (i === 0) {
            return !!this.shift();
        } else if (i === this.length - 1) {
            return !!this.pop();
        } else {
            var previousNode = this.get(i - 1);
            var removedNode = previousNode.next;
            previousNode.next = removedNode.next;
            this.length--;
            return removedNode;
        }
    }

    //helper method to see that reverse is working as expected. avoids having to loop through the list
    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    //create a function called reverse that'll reverse the list in place
    reverse() {
        var node = this.head;
        //swap head and tail
        this.head = this.tail;
        this.tail = node;
        var prev = null; //need to make sure the next prop of the tail is still null just like in regular order
        var next;

        //         var currentNode = node.next; 
        //         var next = currentNode.next;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}



let ssl = new SinglyLinkedList();
ssl.push("HELLO");
ssl.push("GOODBYE");
ssl.push("!");
ssl.push("<3");
ssl.push(":)");


// DOUBLY LINKED LISTS
//Each Node has a:
//val, next, prev

//DoublyLinkedList
//head, tail, length

class Node {
    constructor(val, next, prev) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

//add all methods to this class
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //create a function that takes a val and adds a node to the end of the DLL
    //inputs: val
    //create function that takes the val 
    //create new node with val passed in 
    //check if list is empty, if true head/tail are new node
    //otherwise:
    //point the the old tails .next to the new node 
    //point the new nodes .next to null
    //point the new nodes .prev to the old tail
    //set the value of the tail to be the new node
    //increment the length by 1
    //return the list 
    push(val) {
        var newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //create a function that removes a node from the end of the DLL
    //create function called pop 
    //check if list is empty, if true return undefined
    //if the length is 1, set the head and tail to be null
    //otherwise:
    //store the old tail 
    //point the old tails .prev to null 
    //set the previous node to be the new tail (oldTail.prev)
    //point the .next of the new tail to null
    //decrement length by 1
    //return the list/removed node 
    pop() {

        if (!this.head) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            var oldTail = this.tail;
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
            //             var newTail = oldTail.prev;
            //             newTail.next = null;
            //             this.tail = null;
            //             this.tail = newTail;
        }
        this.length--;
        return oldTail;

    }

    //create a function that removes a node from the beginning of the DLL
    //create function called shift 
    //check if list is empty, if true return undefined
    //if the length is 1, set the head and tail to be null
    //otherwise:
    //store the old head 
    //set the new head to be the .next of the old head
    //set the next node to be the new head (oldHead.next)
    //set the newHead.prev to be null
    //set the oldHead.next to be null
    //decrement length by 1
    //return oldHead
    shift() {

        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            var oldHead = this.head;
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.prev = null;
        }
        this.length--;
        return oldHead;
    }

    //create a function that adds a node to the beginning of the DLL
    //input(s) val
    //output(s) new list
    //create function called unshift that acceps a value
    //create a new node passing in the value
    //check if list is empty, if true set the head/tail to the new node
    //otherwise:
    //store the old head 
    //set the .prev of the oldHead to the newly created node 
    //set the .next of the new node to the oldHead
    //update the head to be the newly created node 
    //set the .prev of the new head to null
    //increment list by 1
    //return the list
    unshift(val) {
        var newNode = new Node(val);
        var oldHead = this.head;

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            //this.head.prev = newNode
            oldHead.prev = newNode;
            newNode.next = oldHead;
            newNode.prev = null;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //if index is < 0 or >= length return null
    //divide the length by 2
    //compare index to that result
    //if i <= half the length start looping from the head towards the middle
    //return the node once its found
    //if i > result start from the tail towards the middle
    //return the node once its found
    //searching...
    get(i) {
        if (i < 0 || i >= this.length) return null;
        var count, current;
        if (i <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count != i) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count != i) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    //create a variable which is the result of the get method at the index passed to the function
    //if the get method returns a valid node, set the value of the node to the value passed in
    //return true
    set(i, val) {

        var foundNode = this.get(i);

        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    //insert
    //inputs: val, i 
    //output: list
    //check that index is valid 
    //if index is < 0 or >= length return null
    //if i = 0 use unshift
    //if i = this.length use push b/c its okay to push at the end of the list
    //otherwise use get(i-1)
    //patch up the next/prev properties
    //increment list by 1
    //return true
    insert(i, val) {
        if (i < 0 || i > this.length) return null;
        if (i === 0) return !!this.unshift(val);
        if (i === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(i - 1);
        var afterNode = beforeNode.next;

        if (beforeNode != null) {
            beforeNode.next = newNode, newNode.prev = beforeNode;
            newNode.next = afterNode, afterNode.prev = newNode;
            this.length++;
            return true;
        }

    }

    //remove 
    //input: i 
    //output: true/false
    remove(i) {
        if (i < 0 || i >= this.length) return false; //?
        if (i === 0) return this.shift();
        if (i === this.length - 1) return this.pop();

        var removedNode = this.get(i);
        var beforeNode = removedNode.prev;
        var afterNode = removedNode.next;

        if (removedNode != null) {
            beforeNode.next = afterNode, afterNode.prev = beforeNode;
            removedNode.next = null, removedNode.prev = null;
            this.length--;
            return removedNode;
        }

    }

}

list = new DoublyLinkedList()
list.push("Harry");
list.push("Ron");
list.push("Hermione");

// STACKS 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;

        }
        return ++this.size;
    }

    pop() {
        //is list empty
        if (!this.first) return null;
        //if length of list is 1, set first and last to be null
        if (this.first === this.last) {
            this.last = null;
        }
        var removedNode = this.first;
        this.first = removedNode.next;
        this.size--;
        return removedNode.value;
    }
}

// QUEUES
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //add a new node at the end of the list
    enqueue(val) {

        var newNode = new Node(val);

        //empty queue
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        //increment size and return it
        return ++this.size;

    }
    //remove the beginning of list
    dequeue() {

        //empty queue/no first prop return null
        if (!this.first) return null;
        var temp = this.first;
        //second edge case, check if first and last are the same
        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        --this.size;
        return temp.value;

    }
}

// BINARY SEARCH TREE
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
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value === current.value) return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(val) { //can switch method name to contains. 
        if (this.root === null) return false;
        var current = this.root;
        var found = false;

        while (current && !found) { //found will always be false. current will only be false when we hit the end of the tree & will then cause the loop to break;
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
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     insert(val) {
//         //create a new Node
//         var newNode = new Node(val);
//         //check root is empty
//         if(this.root === null) {
//             this.root = newNode;
//             return this;
//         } else {
//             //store the root
//             var current = this.root;
//             while(true) {
//                 //check if val equals current value
//                 if( val === current.value) return false; //another approach is to add a counter to the node to track duplicates

//                 if(val < current.value) {
//                     if(current.left === null) {
//                         current.left = newNode;
//                         //break out of the loop
//                         return this;
//                     } 

//                     //if there is a left node, update current & compare the value of the new node to the left node again
//                     current = current.left;

//                 } else { //setup traversal for the right side
//                      if(current.right === null) {
//                          current.right = newNode;
// //                          return this;

//                      }  

//                      //update current so we can keep looking
//                      current = current.right;
//                 }
//             }
//         }   
//     }


// var tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(13);
// tree.insert(11);
// tree.insert(2);
// tree.insert(16);
// tree.insert(7);

// // tree.root.right = new Node(15);
// // tree.root.left = new Node(7);
// // tree.root.left.right = new Node(9);

