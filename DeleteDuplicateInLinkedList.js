class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addHead(node) {
    this.head = node;
    this.length += 1;
  }
}

var deleteDuplicates = function (head) {};
