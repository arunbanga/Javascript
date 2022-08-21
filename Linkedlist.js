class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Linkedlist {
  constructor() {
    this.head = null;
  }
  push(data) {
    if (!this.head) return (this.head = new ListNode(data));
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(data);
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const list = new Linkedlist();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);
console.log(list);
list.print();
