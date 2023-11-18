//SLL stores a piece of data = val
//and a reference to the next node = next 

// var first = new Node("Hi");
// first.next = new Node("there!");
// console.log(first);
//first.next.next = new Node("How");
//first.next.next.next = new Node("are");
//first.next.next.next.next = new Node("you?");
//Alternative solution: Define a push method
//Define a SSL class that will use the Node class
//Next Implement adding a new node to the end of the Linked List
//Function should do the following:
//accept a new value - done
//create a new node using the value passed to the function - done
//Edge case: if the list is empty / there is no head, then set the head and tail to be the newly created node
//if not empty / there is a head, set the next property on the tail to be the new node and update the tail property on the list to be the newly created node
//incremenet length by 1

//piece of data - val
//reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        //initialize this.next to be null b/c there's nothing that comes after it in the beginning.
        this.next = null;
    }
}

class SingLinkedLists {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //add a new node / item at the end of the ssl
    push(val) {
        var newNode = new Node(val);

        if (!this.head) {

            this.head = newNode;
            this.tail = this.head;

        }

        newNode.next = this.tail
        this.length++;

    }

    //LIST: HELLO -> GOODBYE -> !
//                              c       checks if current node is end of the list, if it's not move nT up one
//                      nT      if it is the end of the list then the current node for nT becomes the Tail. And pop off the last node & return it.And
    pop() {

        if ( !this.head ) return undefined; 

        var current = this.head;
        var newTail = current;

        //traverse through the list until the tail is reached
        while( current.next ) {

            newTail = current;
            current = current.next;

        }

        console.log(current.val);
        console.log(newTail.val);
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        //reset head and tail to be null if the list has only 1 item left and is popped
        // if ( this.head == this.tail ) {
        //     this.head = null;
        //     this.tail = null;
        // }
        //OR 
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        } 
        console.log(current);
        // return current;
        //set the next property of the second to last node to be null
        // newTail.next = null;
        //set the tail to be the second to last node
        // this.tail = newTail;
        //decrement the length of the list by 1
        // this.length--;
        //return the value of the node removed
        // return;

    }

    shift() {
        //edge case
        if ( this.length === 0 ) return undefined;
        var currentHead = this.head;

        //this.head
        currentHead = currentHead.next; 
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        } 
        return currentHead;
    }
}



let ssl = new SingLinkedLists();
ssl.push("Hello");
ssl.push("Goodbye");
ssl.push("!");
console.log(ssl);

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

// var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")


