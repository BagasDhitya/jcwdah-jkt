// -- LINKED LIST
// contoh : spotify, undo/redo text, dll.

// Single Linked List
// contoh : breadcrumb (home > product > detail product)

class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null = null;

  // tambah data di akhir list
  add(value: number) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  // mencetak semua isi list
  print() {
    let current = this.head;
    let output = "";

    while (current !== null) {
      output = output + current.value + " -> ";
      current = current.next;
    }
    console.log(output + "null");
  }
}

const list = new LinkedList();
// list.add(10)
// list.add(20)
// list.add(30)

// list.print()

// -- STACK
// Last In, First Out

class Stack {
  private items: number[] = [];

  // menambah item diatas stack
  push(value: number) {
    this.items.push(value);
  }

  // mengambil item terakhir
  pop() {
    return this.items.pop();
  }

  // melihat item paling atas
  peek() {
    return this.items[this.items.length - 1];
  }

  // melihat semua item
  list() {
    return this.items;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

// console.log("Item paling atas : ", stack.peek());
// console.log(stack.pop()); // 30 dikeluarkan
// console.log("Item paling atas sekarang : ", stack.peek());
// console.log("List item saat ini : ", stack.list());

// -- QUEUE
// First In, First Out

class Queue {
  private items: string[] = [];

  // menambahkan ke belakang antrian
  enqueue(value: string) {
    this.items.push(value);
  }

  // mengambil item pertama
  dequeue() {
    return this.items.shift();
  }

  // melihat item paling depan
  front() {
    return this.items[0];
  }
}

const queue = new Queue();
queue.enqueue("User A");
queue.enqueue("User B");
queue.enqueue("User C");

console.log(queue.front());
console.log(queue.dequeue()); // A cabut
console.log(queue.dequeue()); // B cabut
console.log(queue.front());
