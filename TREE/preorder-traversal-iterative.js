var preorderTraversal = function(root) {
    const result = [];
    let stackHolder = [root];
    while(root && stackHolder.length > 0) {
        const node = stackHolder.pop();
        result.push(node.val);
        if (node.right) {
            stackHolder.push(node.right);
        }
        if (node.left) {
            stackHolder.push(node.left);
        }
    }
    return result;
};