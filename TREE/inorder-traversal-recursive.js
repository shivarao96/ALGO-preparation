var inorderTraversal = function(root) {
    const res = [];

    const recursive = function(root) {
        if(root == null || root == undefined) return;
        recursive(root.left);
        res.push(root.val);
        recursive(root.right);
    }

    recursive(root);

    return res;
};