"use strict"

class LinkedList {
    constructor(x) {
        this.arr = x;
        this.head = this.arr[0]
        this.tail = null;
    }

    getLength() {
      var panjang = 0;
      var current = this.head;
      while(current!= null){
        panjang ++
        current = current.next;
      }
      return panjang

    }
    getHead() {
      return this.head;
    }
    getTail() {
      return this.tail;
    }

}



let list = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.getLength());
console.log(list.getHead());
console.log(list.getTail());
