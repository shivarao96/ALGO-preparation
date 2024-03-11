var maxDepth = function(root) {
    if(root == null) return 0;
    const lh = maxDepth(root.left);
    const rh = maxDepth(root.right);

    return 1 + Math.max(lh, rh);
};