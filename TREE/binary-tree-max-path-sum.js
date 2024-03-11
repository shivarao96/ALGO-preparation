/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxi = root.val;

    var getMaxPath = function (root) {
        if(root === null) return 0;
        const LMSum = Math.max(0, getMaxPath(root.left));
        const RMSum = Math.max(0, getMaxPath(root.right));
        maxi = Math.max(maxi, LMSum + RMSum + root.val);
        return Math.max(LMSum + root.val, RMSum + root.val);
    }

    getMaxPath(root);

    return maxi;
};