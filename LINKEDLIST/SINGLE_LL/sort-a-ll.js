var mergeTwoLists = function(list1, list2) {
    const dummyNode = new ListNode(-1);
    let temp = dummyNode;

    let t1 = list1;
    let t2 = list2;

    while(t1 && t2) {
        if(t1.val < t2.val) {
            temp.next = t1;
            temp = t1;
            t1 = t1.next;
        } else {
            temp.next = t2;
            temp = t2;
            t2 = t2.next;
        }
    }

    while(t1) {
        temp.next = t1;
        temp = t1;
        t1 = t1.next;
    }

    while(t2) {
        temp.next = t2;
        temp = t2;
        t2 = t2.next;
    }

    return dummyNode.next;
};

var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
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
 * @return {ListNode}
 */
var sortList = function(head) {
    if(
        head == null || 
        head == undefined || 
        head.next == null ||
        head.next == undefined
    ) return head;
    const middle = middleNode(head);
    let leftHead = head;
    let rightHead = middle.next;
    middle.next = null;

    const left = sortList(leftHead);
    const right = sortList(rightHead);

    return mergeTwoLists(left, right);
};