/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const parentHolder = new Map();

    (function() { // mark all the parents
        const queue = [root];
        parentHolder.set(root, null);
        while(queue.length) {
            const parent = queue.shift();
            if(parent.left) {
                parentHolder.set(parent.left, parent);
                queue.push(parent.left);
            }
            if(parent.right) {
                parentHolder.set(parent.right, parent);
                queue.push(parent.right);
            }
        }
    })();

    const visitedNode = new Map();
    const kthDistanceNodes = [];

    (function(){ // find distance
        kthDistanceNodes.push(target);
        visitedNode.set(target, true);
        let currentLevel = 0;
        while(kthDistanceNodes.length) {
            if(currentLevel === k) break;
            else currentLevel++;
            
            const size = kthDistanceNodes.length;
            for(let i = 0; i < size; i++) {
                const current = kthDistanceNodes.shift();
                if (current.left && !visitedNode.has(current.left)) {
                    kthDistanceNodes.push(current.left);
                    visitedNode.set(current.left, true);
                }
                if (current.right && !visitedNode.has(current.right)) {
                    kthDistanceNodes.push(current.right);
                    visitedNode.set(current.right, true);
                }
                if (parentHolder.has(current) && parentHolder.get(current) && !visitedNode.has(parentHolder.get(current))) {
                    kthDistanceNodes.push(parentHolder.get(current));
                    visitedNode.set(parentHolder.get(current), true); 
                }
            }
        }
    })();

    const res = [];
    while (kthDistanceNodes.length) {
        let current = kthDistanceNodes.shift();
        res.push(current.val);
    }

    return res;
};