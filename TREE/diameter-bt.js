var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    
    const heightOfTheBT = function(root, isMaxOperable = false) {
        if(root == null) return 0;
        const lh = heightOfTheBT(root.left, isMaxOperable);
        const rh = heightOfTheBT(root.right, isMaxOperable);
        if(isMaxOperable) {
            diameter = Math.max(diameter, lh + rh);
        }
        return 1 + Math.max(lh, rh);
    }
    // -- naive approach
    const naiveApproach = function(root) {
        if (root == null) return;
        const lh = heightOfTheBT(root.left);
        const rh = heightOfTheBT(root.right);
        diameter = Math.max(diameter, lh + rh);
        naiveApproach(root.left);
        naiveApproach(root.right);
    }

    // -- execute here
    //naiveApproach(root);
    heightOfTheBT(root, true);

    return diameter;
};