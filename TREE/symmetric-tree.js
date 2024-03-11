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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true;
    const symmetricCheck = function(left, right) {
        if(left=== null || right === null) {
            return left=== right;
        }
        return left.val === right.val 
               && symmetricCheck(left.left, right.right) 
               && symmetricCheck(left.right, right.left)
    }

    return symmetricCheck(root.left, root.right);
};