var spiralOrder = function(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;

    let left = 0;
    let right = col - 1;
    let top = 0;
    let bottom = row - 1;

    const ans = [];

    while(top <= bottom && left <= right) {
        for(let i = left; i <= right; i++) {
            ans.push(matrix[top][i]);
        }
        top++;

        for(let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right]);
        }
        right--;
        if(top <= bottom) {
            for(let i = right; i >= left; i--) {
                ans.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if(left <= right) {
            for(let i = bottom; i >= top; i--) {
                ans.push(matrix[i][left]);
            }
            left++;
        }
    }

    return ans;
};