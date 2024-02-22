function dutchFlag(head) {
    
    const zeroHead = new NodeLL(-1); let zero = zeroHead;
    const onesHead = new NodeLL(-1); let one = onesHead;
    const twosHead = new NodeLL(-1); let two = twosHead;

    let temp = head;
    while(temp) {
        if (temp.data == 0) {
            zero.next = temp;
            zero = temp;
        } else if (temp.data == 1) {
            one.next = temp;
            one = temp;
        } else if (temp.data == 2) {
            two.next = temp;
            two = temp;
        }
        temp = temp.next;
    }

    zero.next = onesHead.next ? onesHead.next : twosHead.next;
    one.next = twosHead.next;
    two.next = null;

    return zeroHead.next;
}
