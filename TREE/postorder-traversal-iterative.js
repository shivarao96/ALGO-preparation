// -- using one stack
function postOrderTrav(curr) {
    if (curr == null) return [];

    const s1 = [];
    const s2 = [];
    s1.push(curr);
    while (!s1.empty()) {
      curr = s1.pop();
      s2.push(curr);
      if (curr.left != null)
        s1.push(curr.left);
      if (curr.right != null)
        s1.push(curr.right);
    }

    return s2.reverse();
  }

// -- using one stack,
/**
 * (Intiution!!!):  
 *  go to extreme left
 *  go to extreme right
 *  make your way up to the root
 *  repeat
 */
var postorderTraversal = function(root) {
    const result = [];
    let curr = root;
    const st = [];

    while(st.length || curr) {
        if (curr) {
            st.push(curr);
            curr = curr.left;
        } else {
            let temp = st[st.length - 1].right;
            if(temp == null || temp == undefined) {
                temp = st.pop();
                result.push(temp.val);
                while (st.length && temp == st[st.length - 1].right) {
                    temp = st.pop();
                    result.push(temp.val);
                }
            } else curr = temp;
        }
    }

    return result;
};