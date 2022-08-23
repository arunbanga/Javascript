class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return this;
  }
  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head;
      this.head = node;
      node.next = temp;
      temp.prev = node;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    return this.length--;
    return this;
  }

  reverse() {
    if (!this.head) return undefined;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let count = 0;
    let prev = null;
    let next;
    while (count < this.length) {
      next = node.next;
      node.prev = next;
      node.next = prev;
      prev = node;
      node = next;
      count++;
    }
    return this;
  }

  insertAtIndex(index, val) {
    if (index > this.length) {
      return false;
    }
    if (index == 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      const node = new Node(val);
      const after = this.accessAtIndex(index);
      const before = after.prev;
      after.prev = node;
      before.next = node;
      node.next = after;
      node.prev - before;
      this.length++;
    }
    return this;
  }
  removedAtIndex(index) {
    let removednode;
    if (index >= this.length) {
      return false;
    }
    if (index == 0) {
      removednode = this.shift();
    } else if (index === this.length - 1) {
      removednode = this.pop();
    } else {
      removednode = this.getNodeAtIndex(index);
      const after = removednode.next;
      const before = removednode.prev;
      removednode.next = null;
      removednode.prev = null;
      before.next = after;
      after.prev = before;
      this.length--;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    let count = 0;
    while (count < this.length) {
      arr.push(current.val);
      current = current.next;
      count++;
    }
    console.log(arr);
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
// list.insertAtIndex(0, 10);
// list.removedAtIndex(2);
// list.reverse();
// list.pop();
// list.unshift(0);
// list.shift();
list.print();
// console.log(list);
