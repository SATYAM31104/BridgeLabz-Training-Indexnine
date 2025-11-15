//doubly linked list
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }
    size(){
        return this.size();
    }

    prepend(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    delete(data){
        let current = this.head;
        while(current){
            if(current.data === data){
                if(current.prev){
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                if(current.next){
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }
                this.size--;
                return true;
            }
            current = current.next;
        }
        return false;
    }


    print(){
        const result = [];
        let current = this.head;
        while(current){
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}

const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
console.log(list.print());