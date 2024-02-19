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


const arr = [2, 5, 8, 7];

const head = new NodeLL(arr[0]);
head.next = new NodeLL(arr[1]);
head.next.next = new NodeLL(arr[2]);
head.next.next.next = new NodeLL(arr[3]);

console.log(head.isPresent(9));