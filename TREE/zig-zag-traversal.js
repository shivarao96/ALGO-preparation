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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let isLeft = false;
    let st = [root];
    let result = [];
    
    while (st.length > 0) {
      const length = st.length;
      const res = [];
      for(let i = 0; i < length; i++) {
          const elem = st.shift();
          if (elem) {
            elem.left ? st.push(elem.left) : undefined;
            elem.right ? st.push(elem.right) : undefined;
            if (isLeft) {
              res.unshift(elem.val);
            } else {
              res.push(elem.val);
            }
          }
      }
      res.length ? result.push(res) : undefined;
      isLeft = !isLeft;
    }  
  
    return result;
  };