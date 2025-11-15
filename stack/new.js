class Stack {
    constructor() {
        this.items = [];
    }
    
    push(item) {
        this.items.push(item);
    }
    
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }
    
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
    
    clear() {
        this.items = [];
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack);