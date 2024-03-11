/**
 * height(L) - height(R) <= 1
 * @param {*} root 
 * @returns 
 */
var isBalanced = function(root) {
    const checkBBT = function(root) {
        if(root == null) return 0;

        const lh = checkBBT(root.left);
        const rh = checkBBT(root.right);
        if(Math.abs(lh-rh) > 1) return -1;
        if(lh == -1 || rh == -1) return -1;
        return 1 + Math.max(lh, rh);
    }
    const result = checkBBT(root);
    return result === -1 ? false : true;
};