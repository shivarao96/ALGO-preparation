var postorderTraversal = function(root) {
    const result = [];
    const postOrder = function(root) {
        if(root == null || root === undefined) {
            return;
        }
        postOrder(root.left);
        postOrder(root.right);
        result.push(root.val);
    }
    postOrder(root);
    return result;
};