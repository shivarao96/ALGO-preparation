/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let temp = head;
	//step 1
    while(temp != null) {
        const newNode = new Node(temp.val);
        newNode.next = temp.next;
        temp.next = newNode;
        temp = temp.next.next;
    }
	//step 2
    let itr = head;
    while(itr != null) {
        if(itr.random != null)
            itr.next.random = itr.random.next;
        itr = itr.next.next;
    }
	//step 3
    const dummy = new Node(0);
    itr = head;
    temp = dummy;
    let fast;
    while(itr != null) {
        fast = itr.next.next;
        temp.next = itr.next;
        itr.next = fast;
        temp = temp.next;
        itr = fast;
    }
    return dummy.next;
};