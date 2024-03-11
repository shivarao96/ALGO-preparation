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
var verticalTraversal = function(root) {
    
    const indexes = [];
    const nodeIndexMap = {};
    const todo = [{index : 0, node: root, level: 1}];
    
    while(todo.length > 0) {
        const length = todo.length;

        for(let i = 0; i < length; i++) {
            const elem = todo.shift();
            if(elem.node) {
                // -- if index doesn't exists
                if (!nodeIndexMap[elem.index]) {
                    indexes.push(elem.index);
                    nodeIndexMap[elem.index] = {
                        level: {}
                    };
                }
                
                // -- if level doesn't exists
                if (!nodeIndexMap[elem.index].level[elem.level]) {
                    nodeIndexMap[elem.index].level[elem.level] = [];
                }

                nodeIndexMap[elem.index].level[elem.level].push(elem.node.val);
                
                elem.node.left ? todo.push({index: elem.index - 1, node: elem.node.left, level: elem.level + 1}) : null;
                elem.node.right ? todo.push({index: elem.index + 1, node: elem.node.right, level: elem.level + 1}) : null;
            }
        }
    }
    indexes.sort((a,b)=>{
        if(a > b) return 1;
        else return -1;
    });
    const temp = {};
    const result = [];

    for(let i = 0; i < indexes.length; i++) {
        const res = [];
        
        const levels = nodeIndexMap[indexes[i]].level;
        for (var key in levels) {

            res.push(
                ...(levels[key].sort((a,b) => {
                    if(a > b) return 1;
                    else return -1;
                }))
            );
        }
        result.push(res);
    }

    return result;
};