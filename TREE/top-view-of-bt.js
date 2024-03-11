

//User function Template for javascript

/**
 * @param {Node} root
*/
/**
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution
{
    //Function to return a list of nodes visible from the top view 
    //from left to right in Binary Tree.
    topView(root)
    {
        //your code here
        const result = [];
        if(root === null) return result;
        const registeredIndexes = [];
        const nodeLevelData = [];
        const mappedData = {};
        
        nodeLevelData.push({level: 0, node: root});
        while(nodeLevelData.length > 0) {
            const length = nodeLevelData.length;
            for(let i = 0; i < length; i++) {
                const node = nodeLevelData.shift();
                
                if(!mappedData[node.level]) {
                    registeredIndexes.push(node.level);
                    mappedData[node.level] = node.node.data;
                }
                
                if(node.node.left) {
                    nodeLevelData.push({level: node.level - 1, node: node.node.left});
                }
                
                if(node.node.right) {
                    nodeLevelData.push({level: node.level + 1, node: node.node.right});
                }
            }
        }
        registeredIndexes.sort((a,b)=>{
            if(a > b) return 1;
            else return -1;
        });
        
        for(let i = 0; i < registeredIndexes.length; i++) {
            if(mappedData[registeredIndexes[i]]) {
                result.push(mappedData[registeredIndexes[i]]);
            }
        }
        
        return result;
    }
}