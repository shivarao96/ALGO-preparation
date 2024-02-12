
var rotate = function(matrix) {
    const reverse = function(ind, range1, range2) {
        while(range1 < range2) {
            const temp = matrix[ind][range1];
            matrix[ind][range1] = matrix[ind][range2];
            matrix[ind][range2] = temp;
            range1++;
            range2--;
        }
    }
    const n = matrix.length;
    // transpose
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // reverse
    for (let row = 0; row < n; row++) {
        reverse(row, 0, n - 1);
    }
};