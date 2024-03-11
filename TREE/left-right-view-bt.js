var rightSideView = function(root) {
    const mapper = [];

    const rightViewTraversal = function(node, level) {
        if(!node) return;
        if(mapper.length === level) mapper.push(node.val);
        rightViewTraversal(node.right, level + 1);
        rightViewTraversal(node.left, level + 1);
    }

    rightViewTraversal(root, 0);

    return mapper;
};

var leftSideView = function(root) {
    const mapper = [];

    const rightViewTraversal = function(node, level) {
        if(!node) return;
        if(mapper.length === level) mapper.push(node.val);
        rightViewTraversal(node.left, level + 1);
        rightViewTraversal(node.right, level + 1);
    }

    rightViewTraversal(root, 0);

    return mapper;
};