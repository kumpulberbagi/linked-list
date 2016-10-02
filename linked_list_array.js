//write your code here
class LinkedList {
    constructor(property) {
        this.head = property[0]
        this.tail = property[property.length - 1]
        this.count = property.length
    }

    getLength() {
        return `Length : ${this.count}`
    }

    getHead() {
        return `Head : ${this.head}`
    }

    getTail() {
        return `Tail : ${this.tail}`
    }

}

let list = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.getLength());
console.log(list.getHead());
console.log(list.getTail());
// console.log(list.getHead());
// console.log(list.getTail());
