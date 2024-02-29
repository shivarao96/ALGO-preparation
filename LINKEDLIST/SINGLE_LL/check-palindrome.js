var reverseList = function(head) {
    if( head == null || 
        head == undefined || 
        head.next == null || 
        head.next == undefined
    ) return head;
    const newHead = reverseList(head.next);
    const front = head.next;
    front.next = head;
    head.next = null;
    return newHead;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let newHead = reverseList(slow.next);
    let mainHead = head;
    while(newHead) {
        if(newHead.val != mainHead.val) return false;
        newHead = newHead.next;
        mainHead = mainHead.next;
    }
    return true;
};