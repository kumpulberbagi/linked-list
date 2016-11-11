"use strict"

class LinkedList {
    constructor(arr,first,last) {
        this.arr = arr;
        this.first = first;
        this.last = last;
    }

    getLength() {
        return this.arr.length;
    }
    getHead() {
        return this.arr[0]
    }
    getTail() {
        return this.arr[this.arr.length - 1]
    }
    push(input) {
      this.arr.push(input)
      if(this.first == null){
         this.first = this.last = input;
      }else{
         this.last.next = input;
         this.last = input;
      }
      return this.arr;
    }
    pop() {
      this.arr.pop() = function(){
         var value = this.first;
         this.first = this.first.next;
         return value;
      };
    }

    show(){
      return this.arr;
    }
}

let list = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(list.getLength());
// console.log(list.getHead());
// console.log(list.getTail());
console.log(list.push(11));
console.log(list.pop());
