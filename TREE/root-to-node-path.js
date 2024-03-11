function rootToNodePath(root, ans, k) {
    ans.push(root.val);
    if(root == null || root == undefined) return false;
    if(root.val == k) return true;

    if(rootToNodePath(root.left, ans, k) || rootToNodePath(root.right, ans, k)) return true;
    ans.pop();
    return false; 
}