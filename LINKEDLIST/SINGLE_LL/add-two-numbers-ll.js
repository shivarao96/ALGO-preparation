/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(-1);
    let curr = dummy;
    let temp1 = l1;
    let temp2 = l2;
    let carry = 0;
    while (temp1 || temp2) {
        let sum = 0;
        if (temp1) {
            sum += temp1.val;
            temp1 = temp1.next;
        }
        if (temp2) {
            sum += temp2.val;
            temp2 = temp2.next;
        }
        sum += carry;
        const newNode = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);

        curr.next = newNode;
        curr = newNode;
    }

    if(carry) {
        const newNode = new ListNode(carry);
        curr.next = newNode;
        curr = newNode;
    }

    return dummy.next;
};