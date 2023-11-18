// 1 ENQUEUE() ADD NODE TO END OF LIST
// 2 DEQUEUE() REMOVE NODE FROM BEGINNING OF LIST
// 3 PRINT THE FIRST NODE IN THE LIST

// CREATE A NODE CLASS
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// CREATE A QUEUE CLASS
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // CREATE A METHOD CONTAINING A SWITCH STATEMENT TO HANDLE THE VARIOUS INPUTS
    processData(input, value) {

        if (!value) {
            value = null;
        }

        switch (input) {
            case 1: this.enqueue(value); break;
            case 2: this.dequeue(); break;
            case 3: this.print(); break;
            default: return undefined;
        }
    }

    // CREATE METHOD ENQUEUE
    enqueue(value) {
        var newNode = new Node(value);
        // CHECK IF LIST IS EMPTY
        if (this.size === 0) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
        return this;

    }

    // CREATE METHOD DEQUEUE
    dequeue() {

        // CHECK IF LIST IS EMPTY
        if (this.size === 0) return undefined;

        // CHECK IF FIRST/LAST ARE EQUAL
        if (this.first === this.last) {
            this.last = null;
        }

        var temp = this.first;
        //       temp.next = null;
        this.first = this.first.next;

        this.size--;

        return this;

    }

    // CREATE A METHOD TO PRINT VALUE OF FIRST NODE
    print() {
        console.log(this.first.value);
    }

}

let q = new Queue();

// 10
q.processData(1, 42);
q.processData(2);
q.processData(1, 14)
q.processData(3);
q.processData(1, 28)
q.processData(3)
q.processData(1, 60)
q.processData(1, 78)
q.processData(2)
q.processData(2)