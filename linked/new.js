class Nodes{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    insertAthead(data){
        let node = new Nodes(data);
        if(this.head == null){
            this.head=node;
        }
        else{
            node.next=this.head;
            this.head=node;
        }
        this.size++;
    }
    insertAtindex(data,index){
        if(index<0 || index>this.size){
            return console.log("Invalid Index");
        }
        else if(index === 0){
            this.insertAthead(data);
        }
        else{
            let node = new Nodes(data);
            let temp = this.head;
            let i = 0;
            while(i !== index-1){
                temp = temp.next;
                i++;
            }
            node.next = temp.next;
            temp.next = node;
            this.size++;
        }
    }
    removeElement(data){
        if(this.head === null) return;
        
        if(this.head.data === data){
            this.head = this.head.next;
            this.size--;
            return;
        }
        let curr = this.head;
        let prev = null;
        while(curr !== null && curr.data !== data){
            prev = curr;
            curr = curr.next;
        }
        
        if(curr !== null){
            prev.next = curr.next;
            this.size--;
        }
    }
    print(){
        let current = this.head;
        while(current!==null){
            console.log(current.data)
            current = current.next;
        }
    }
}
let list = new LinkedList();
console.log(list);
list.insertAthead(10);
list.insertAthead(20);
list.insertAtindex(400,1);
list.print();
// console.log(list);
