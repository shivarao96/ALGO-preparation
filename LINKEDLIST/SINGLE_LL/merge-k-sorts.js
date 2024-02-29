function MinHeap() {
    this.heap = [];

    this.push = function (val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    };

    this.pop = function () {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    };

    this.heapifyUp = function (idx) {
        const parentIdx = Math.floor((idx - 1) / 2);
        if (parentIdx >= 0 && this.heap[idx][0] < this.heap[parentIdx][0]) {
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
            this.heapifyUp(parentIdx);
        }
    };

    this.heapifyDown = function (idx) {
        const leftIdx = 2 * idx + 1;
        const rightIdx = 2 * idx + 2;
        let largest = idx;

        if (leftIdx < this.heap.length && this.heap[leftIdx][0] < this.heap[largest][0]) {
            largest = leftIdx;
        }
        if (rightIdx < this.heap.length && this.heap[rightIdx][0] < this.heap[largest][0]) {
            largest = rightIdx;
        }

        if (largest !== idx) {
            [this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]];
            this.heapifyDown(largest);
        }
    };

    this.top = function () {
        return this.heap[0];
    };

    this.size = function () {
        return this.heap.length;
    };

    this.showPQ = function () {
        console.log(this.heap);
    }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists || !lists.length) return null;
    const pq = new MinHeap();
    for(let i = 0; i < lists.length; i++) {
        if(lists[i]) {
            pq.push([lists[i].val, lists[i]]);
        }
    }

    let temp = new ListNode(-1);
    const head = temp;

    while(pq.size() > 0) {
        const top = pq.pop();
        temp.next = top[1];
        temp = temp.next;
        
        if(top[1].next) {
            pq.push([top[1].next.val, top[1].next]);
        }
    }

    return head.next
};