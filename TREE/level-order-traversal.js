var levelOrder = function(root) {
    let queueHolder = [root];
    const result = [];

    while(root && queueHolder.length > 0) {
        const newResult = [];
        const size = queueHolder.length;
        for(let i = 0; i < size; i++) {
            const node = queueHolder.shift();
            if(node) {
                if (node.left) {
                    queueHolder.push(node.left);
                }
                if (node.right) {
                    queueHolder.push(node.right);
                }
                newResult.push(node.val);
            }
        }
        result.push(newResult);
    }

    return result;
};