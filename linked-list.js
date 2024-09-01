/** Node: node for a singly linked list. */
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /** LinkedList: chained together nodes. */
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    /** push(val): Appends a new node with value val to the tail. */
    push(val) {
      const newNode = new Node(val);
      if (this.length === 0) {
        this.head = newNode; // Set head to new node
        this.tail = newNode; // Set tail to new node
      } else {
        this.tail.next = newNode; // Link old tail to new node
        this.tail = newNode; // Update tail to new node
      }
      this.length++;
    }
  
    /** unshift(val): Add a new node with value val to the head. */
    unshift(val) {
      const newNode = new Node(val);
      if (this.length === 0) {
        this.head = newNode; // Set head to new node
        this.tail = newNode; // Set tail to new node
      } else {
        newNode.next = this.head; // Link new node to old head
        this.head = newNode; // Update head to new node
      }
      this.length++;
    }
  
    /** pop(): Remove & return tail value. Throws error if list is empty. */
    pop() {
      if (this.length === 0) {
        throw new Error('List is empty'); // Error for empty list
      }
  
      const removedValue = this.tail.val; // Get value to return
  
      if (this.length === 1) {
        this.head = null; // If only one node, clear head
        this.tail = null; // Clear tail
      } else {
        let current = this.head;
        while (current.next !== this.tail) {
          current = current.next; // Traverse to the second to last node
        }
        current.next = null; // Remove link to last node
        this.tail = current; // Update tail to second to last
      }
      this.length--;
      return removedValue; // Return the removed value
    }
  
    /** shift(): Remove & return head value. Throws error if list is empty. */
    shift() {
      if (this.length === 0) {
        throw new Error('List is empty'); // Error for empty list
      }
  
      const removedValue = this.head.val; // Get value to return
      this.head = this.head.next; // Move head to next node
      this.length--;
  
      if (this.length === 0) {
        this.tail = null; // Clear tail if the list is now empty
      }
  
      return removedValue; // Return the removed value
    }
  
    /** getAt(idx): Retrieve value at index position idx. Throws error if index is invalid. */
    getAt(idx) {
      if (idx < 0 || idx >= this.length) {
        throw new Error('Index is invalid'); // Error for invalid index
      }
  
      let current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next; // Traverse to the desired index
      }
      return current.val; // Return the value at index
    }
  
    /** setAt(idx, val): Set value of node at index position idx to val. Throws error if index is invalid. */
    setAt(idx, val) {
      if (idx < 0 || idx >= this.length) {
        throw new Error('Index is invalid'); // Error for invalid index
      }
  
      let current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next; // Traverse to the desired index
      }
      current.val = val; // Set the value
    }
  
    /** insertAt(idx, val): Insert a new node at position idx with value val. Throws error if index is invalid. Returns undefined. */
    insertAt(idx, val) {
      if (idx < 0 || idx > this.length) {
        throw new Error('Index is invalid'); // Error for invalid index
      }
  
      if (idx === 0) {
        this.unshift(val); // Insert at the beginning
      } else if (idx === this.length) {
        this.push(val); // Insert at the end
      } else {
        const newNode = new Node(val); // Create a new node
        let current = this.head;
        for (let i = 0; i < idx - 1; i++) {
          current = current.next; // Traverse to the node before the desired index
        }
        newNode.next = current.next; // Link new node to the next node
        current.next = newNode; // Link previous node to new node
        this.length++;
      }
    }
  
    /** removeAt(idx): Remove & return value at position idx. Throws error if index is invalid. */
    removeAt(idx) {
      if (idx < 0 || idx >= this.length) {
        throw new Error('Index is invalid'); // Error for invalid index
      }
  
      if (idx === 0) {
        return this.shift(); // Remove from the beginning
      } else if (idx === this.length - 1) {
        return this.pop(); // Remove from the end
      }
  
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next; // Traverse to the node before the desired index
      }
      const removedValue = current.next.val; // Get the value to return
      current.next = current.next.next; // Bypass the removed node
      this.length--;
      return removedValue; // Return the removed value
    }
  
    /** average(): Return the average of all values in the list. */
    average() {
      if (this.length === 0) return 0; // Return 0 if the list is empty
  
      let total = 0;
      let current = this.head;
  
      while (current) {
        total += current.val; // Sum all node values
        current = current.next; // Move to the next node
      }
  
      return total / this.length; // Return the average
    }
  }
  
  // Example usage
  const list = new LinkedList();
  list.push(3);
  list.push(5);
  list.push(8);
  console.log(list.average()); // 5.333...
  console.log(list.pop()); // 8
  console.log(list.shift()); // 3
  console.log(list.getAt(0)); // 5
  list.setAt(0, 6);
  console.log(list.getAt(0)); // 6
  list.insertAt(1, 4); // Insert 4 at index 1
  console.log(list.removeAt(1)); // 4
  
  module.exports = LinkedList;
  