/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let length = 1;
    let temp = head;

    if(head === null) return head 

    while(temp.next != null) {
        temp = temp.next;
        length++;
    }


    const rotations = k % length;
    if(rotations === 0) {
        return head;
    }
    temp.next = head;

    let newLastNode  = head;
    let counter = 1;

    while(newLastNode !== null) {
        if(counter === (length - rotations)) {
            break;
        }
        counter++;
        newLastNode = newLastNode.next;
    }

    head = newLastNode.next;
    newLastNode.next = null;

    return head;
};