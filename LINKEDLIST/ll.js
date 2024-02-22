export function NodeLL(data = null, next = null) {
    this.data = data;
    this.next = next;

}
NodeLL.prototype.getLength = function() {
    let cnt = 0;
    let temp = this;
    while(temp != null) {
        temp = temp.next;
        cnt++;
    }

    return cnt;
}
NodeLL.prototype.isPresent = function(desiredVal) {
    let temp = this;
    while(temp != null) {
        if(temp.data === desiredVal) return true;
        temp = temp.next;
    }

    return false;
}
NodeLL.prototype.addArrayVals = function(arr) {
    let tail = this;
    while(tail.next != null) {
        tail = tail.next;
    }

    for(let  i = 0; i < arr.length; i++) {
        const temp = new NodeLL(arr[i]);
        tail.next = temp;
        tail = tail.next;
    }
}
NodeLL.prototype.print = function() {
    let temp = this;
    const ans = [];
    while(temp) {
        ans.push(temp.data);
        temp = temp.next;
    }
    console.log(ans);
}
/**
 * Delete tail 
 * */
NodeLL.prototype.pop = function() {
    let tail = this;
    let prev = null;
    while(tail.next) {
        prev = tail;
        tail = tail.next;
    };

    if (prev) {
        prev.next = null;
    } else {
        this.data = null;
    }
}

NodeLL.prototype.unshift = function() {
    const len = this.getLength();
    let head = this;
    if(len == 1) {
        this.data = null;
    } else {
        head = head.next;
    }
    return head;
}

NodeLL.prototype.deleteElemAt = function(elemAt) {
    const head = this;

    if(head == null) return;

    if (elemAt == 1) {
        const temp = head;
        head = head.next;
        // delete(temp);
        this.data = head.data;
        this.next = head.next;

        return;
    }
    
    let temp = head;
    let prev = null;
    let cnt = 0;

    while(temp) {
        cnt++;
        
        if(cnt == elemAt) {
            prev.next = prev.next.next;
            break;
        }

        prev = temp;
        temp = temp.next;
    }

    this.data = head.data;
    this.next = head.next;
}

NodeLL.prototype.push = function(data, next=null) {
    let tail = this;
    while(tail.next) {
        tail = tail.next;
    }
    tail.next = new NodeLL(data, next);
}

NodeLL.prototype.shift = function(data) {
    const temp = new NodeLL(this.data, this.next);
    this.data = data;
    this.next = temp;
}

NodeLL.prototype.addElemAt = function(data, elemAt) {

    const head = this;

    if (elemAt < 1) elemAt = 1;

    if (this.data == null && this.next == null && elemAt == 1) {
        this.data = data;
        this.next = null;
        return;
    }

    if (elemAt == 1) {
        const temp = new NodeLL(this.data, this.next);
        this.data = data;
        this.next = temp;
    }

    const len = this.getLength();
    if(elemAt > len + 1) elemAt = len + 1;

    let temp = head;
    let cnt = 0;

    while (temp) {
        cnt++;
        if (cnt == elemAt - 1) {
            const newNode = new NodeLL(data, temp.next);
            temp.next = newNode;
            break;
        }
        temp = temp.next;
    }

    this.data = head.data;
    this.next = head.next;
}

NodeLL.prototype.insertBeforeValWhereK = function(el, val) {

    const head = this;

    if (this.data == null && this.next == null) {
        return;
    }

    if (this.data == el) {
        const temp = new NodeLL(this.data, this.next);
        this.data = val;
        this.next = temp;
    }

    let temp = head;

    while (temp.next) {
        if (temp.next.data == el) {
            const newNode = new NodeLL(val, temp.next);
            temp.next = newNode;
            break;
        }
        temp = temp.next;
    }

    this.data = head.data;
    this.next = head.next;
}

let head = new NodeLL(1);
head.addArrayVals([2,1,0,1,0, 2]);


head.print();