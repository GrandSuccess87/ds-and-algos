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
        return current;
    }
}



let ssl = new SinglyLinkedList();
ssl.push("HELLO");
ssl.push("GOODBYE");
ssl.push("!");
console.log(ssl);
ssl.pop()
