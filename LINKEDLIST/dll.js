export function NodeDLL(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
}

NodeDLL.prototype.getLength = function() {
    let cnt = 0;
    let temp = this;
    while(temp != null) {
        temp = temp.next;
        cnt++;
    }

    return cnt;
}

NodeDLL.prototype.addValsIntoDLL = function(arr) {
    const head = this;
    let tail = head;
    
    while(tail.next) {
        tail = tail.next;
    }
    
    for(let i = 0; i < arr.length; i++) {
        const newNode = new NodeDLL(arr[i], null, tail);
        tail.next = newNode;
        tail = newNode;
    }

    this.data = head.data;
    this.prev = head.prev;
    this.next = head.next;
}

NodeDLL.prototype.print = function() {
    let temp = this;
    const ans = [];
    while(temp) {
        ans.push(temp.data);
        temp = temp.next;
    }
    console.log(ans);
}

NodeDLL.prototype.printReverse = function() {
    let tail = this;
    while(tail.next) {
        tail = tail.next;
    }
    const ans = [];
    while(tail) {
        ans.push(tail.data);
        tail = tail.prev;
    }
    console.log(ans);
}

NodeDLL.prototype.deleteHead = function() {
    // "this" is head;
    // [null<-1 <-> 2 <-> 3->null]
    const head = this;
    head.data = head.next.data; // 2
    head.next.prev = null; // null <- 2
    head.next = head.next.next;

    this.data = head.data;
    this.prev = head.prev;
    this.next = head.next;
}

NodeDLL.prototype.deleteTail = function() {
    const head = this;
    let tail = head;
    while(tail.next) {
        tail = tail.next;
    }
    const prev = tail.prev;
    prev.next = null;

    this.data = head.data;
    this.prev = head.prev;
    this.next = head.next;
}

NodeDLL.prototype.deleteElemAt = function(elemAt) {
    const head = this;

    if(head == null) return;

    if (elemAt == 1) {
        head = head.next;
        // delete(temp);
        this.data = head.data;
        this.next = head.next;
        this.prev = head.prev;

        return;
    }
    
    let temp = head;
    let cnt = 0;

    while(temp) {
        cnt++;
        
        if(cnt == elemAt) {
            const prev = temp.prev;
            temp.next.prev = prev;
            prev.next = prev.next.next;
            break;
        }
        temp = temp.next;
    }

    this.data = head.data;
    this.next = head.next;
    this.prev = head.prev;
}

NodeDLL.prototype.deleteElem = function(val) {
    const head = this;

    if(head == null) return;

    if (head.data == val) {
        head = head.next;

        this.data = head.data;
        this.next = head.next;
        this.prev = head.prev;

        return;
    }
    
    let temp = head;

    while(temp.next) {
        if(temp.data == val) {
            const prev = temp.prev;
            temp.next.next = prev;
            prev.next = prev.next.next;
            break;
        }
        temp = temp.next;
    }

    if (temp.data == val && temp.next == null) {
        const prev = temp.prev;
        prev.next = null;
    }

    this.data = head.data;
    this.next = head.next;
    this.prev = head.prev;
}

NodeDLL.prototype.push = function(data, next=null) {
    let tail = this;
    while(tail.next) {
        tail = tail.next;
    }
    const newNode = new NodeDLL(data);
    tail.next = newNode;
    newNode.prev = tail;
}

NodeDLL.prototype.shift = function(data) {
    const temp = new NodeDLL(this.data, this.next, null);
    this.next.prev = temp;
    this.data = data;
    this.next = temp;
    this.prev = null;
}

NodeDLL.prototype.addElemAt = function(data, elemAt) {

    const head = this;

    if (elemAt < 1) elemAt = 1;

    if (this.data == null && this.prev == null && this.next == null && elemAt == 1) {
        this.data = data;
        this.next = null;
        this.prev = null;
        return;
    }

    if (elemAt == 1) {
        const temp = new NodeDLL(this.data, this.next, this);
        this.data = data;
        this.next = temp;
        this.prev = null;
    }

    const len = this.getLength();
    if(elemAt > len + 1) elemAt = len + 1;

    let temp = head;
    let cnt = 0;

    while (temp) {
        cnt++;
        if (cnt == elemAt - 1) {
            const newNode = new NodeDLL(data, temp.next, temp);
            temp.next.prev = newNode;
            temp.next = newNode;
            break;
        }
        temp = temp.next;
    }

    this.data = head.data;
    this.next = head.next;
    this.prev = head.prev;
}

NodeDLL.prototype.insertBeforeValWhereK = function(el, val) {

    const head = this;

    if (this.data == null && this.prev == null && this.next == null) {
        return;
    }

    if (this.data == el) {
        const temp = new NodeDLL(this.data, this.next, this);
        this.data = val;
        this.next = temp;
        this.prev = null;
    }

    let temp = head;

    while (temp.next) {
        if (temp.next.data == el) {
            const newNode = new NodeDLL(val, temp.next, temp);
            temp.next.prev = newNode;
            temp.next = newNode;
            break;
        }
        temp = temp.next;
    }

    this.data = head.data;
    this.next = head.next;
    this.prev = head.prev;
}

NodeDLL.prototype.insertAfterValWhereK = function(el, val) {

    const head = this;

    if (this.data == null && this.prev == null && this.next == null) {
        return;
    }

    if (this.data == el) {
        const temp = new NodeDLL(this.data, null, this);
        this.next = temp;
    }

    let temp = head;

    while (temp) {
        if (temp.data == el) {
            
            const newNode = new NodeDLL(val, temp.next, temp);
            temp.next.prev = newNode;
            temp.next = newNode;
            break;
        }
        temp = temp.next;
    }

    this.data = head.data;
    this.next = head.next;
    this.prev = head.prev;
}

NodeDLL.prototype.reverse = function() {
    let current = this;
    let prev = null;

    while(current) {
        prev = current.prev;
        current.prev = current.next;
        current.next = prev;

        current = current.prev;
    }

    const head = prev.prev;
    return head;
}

let dll = new NodeDLL(1);
dll.addValsIntoDLL([2,3,4,5,6,7])
dll.print();
dll.insertAfterValWhereK(3, 69);
dll.print();
dll = dll.reverse();
dll.print();