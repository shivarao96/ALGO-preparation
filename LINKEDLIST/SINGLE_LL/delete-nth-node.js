/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let first = head;
  for (let i = 0; i < n; i++) {
    if (first) first = first.next;
  }

  if (first == null || first === undefined) return head.next;

  let last = head;

  while (first.next) {
    first = first.next;
    last = last.next;
  }

  last.next = last.next.next;

  return head;
};
