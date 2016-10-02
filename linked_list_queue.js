//write your code here
class LinkedList {
    constructor(property) {
        this.link = property
        this.head = this.link[0]
        this.tail = this.link[this.link.length - 1]
        this.count = this.link.length
    }

    getLength() {
        this.count = this.link.length
        return `Length : ${this.count}`
    }

    getHead() {
        return `Head : ${this.head}`
    }

    getTail() {
        return `Tail : ${this.tail}`
    }

    push(value) {
        this.link.push(value)
        this.tail = this.link[this.link.length - 1]
        console.log(`push message : Added ${value} to tail`);
    }
    pop() {
        console.log(`pop message : Last data (${this.tail}) was removed`);
        this.link.pop()
        this.tail = this.link[this.link.length - 1]
    }

}

let list = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(list.getLength());
console.log(list.getHead());
console.log(list.getTail());
list.push(11);
console.log(list.getTail());
console.log(list.getLength());
list.pop();
console.log(list.getTail());
