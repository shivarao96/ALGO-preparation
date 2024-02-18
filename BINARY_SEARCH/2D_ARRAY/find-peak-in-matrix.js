const findMaxElement = function(mat, rowLength, col) {
    let maxElem = -1;
    let maxElemRow = -1;
    for(let i = 0; i < rowLength; i++) {
        if(mat[i][col] > maxElem) {
            maxElem = mat[i][col];
            maxElemRow = i;
        }
    }

    return maxElemRow;
}

var findPeakGrid = function(mat) {
    const n = mat.length;
    const m = mat[0].length;
    let low = 0;
    let high = m-1;
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        const row = findMaxElement(mat, n, mid);
        const left = mid - 1 >= 0 ? mat[row][mid - 1] : -1;
        const right = mid + 1 < m ? mat[row][mid + 1] : -1;
        if(mat[row][mid] > left && mat[row][mid] > right) return [row, mid];
        if(mat[row][mid] > left) {
            low = mid + 1;
        } else high = mid - 1;
    }

    return [-1,-1];
};