function checkChildrenSumProperty(root) {
    let child = 0;
    if (root.left) child += root.left.val;
    if (root.right) child += root.right.val;

    if (child < root.val) root.val = child;
    else {
        if (root.left) root.left.val = root.val;
        if (root.right) root.right.val = root.val;
    }

    checkChildrenSumProperty(root.left);
    checkChildrenSumProperty(root.right);

    let total = 0;
    if (root.left) total += root.left.val;
    if (root.right) total += root.right.val;
    if (root.left || root.right) root.val = total;
}