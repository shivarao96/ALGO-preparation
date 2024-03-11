

function isLeaf(node) {
    return !node.left && !node.right;
}

function addLeftTree(root, res) {
    if (root.left) {
        let curr = root.left;
        while(curr) {
            if(!isLeaf(curr)) res.push(curr.val);
            if(curr.left) curr = curr.left;
            else curr = curr.right;
        }
    }
    return;
}

function addRightTree(root, res) {
    if (root.right) {
        const temp = []
        let curr = root.right;
        while(curr) {
            if(!isLeaf(curr)) temp.push(curr.val);
            if(curr.right) curr = curr.right;
            else curr = curr.left;
        }

        for(let i = temp.length - 1; i >= 0; --i) {
            res.push(temp[i]);
        }
    }
    return;
}

function addLeaves(root, res) {
    if (isLeaf(root)) {
        res.push(root.val);
        return;
    }
    if(root.left) addLeaves(root.left, res);
    if(root.right) addLeaves(root.right, res);
}

const printBoundry = function(root) {
    const res = [];
    if(!root) return [];
    if(!isLeaf(root)) res.push(res.val);
    addLeftTree(root, res);
    addLeaves(root, res);
    addRightTree(root, res);
}