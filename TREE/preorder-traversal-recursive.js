// -- [preorder] : ROOT -> LEFT -> RIGHT

var preorderTraversal = function(root) {
    const result = [];
    const recursrive = function(root) {
        if(root == null || root == undefined) return;
        result.push(root.val);
        recursrive(root.left);
        recursrive(root.right);
    }
    recursrive(root);
    return result;
};