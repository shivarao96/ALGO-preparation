
var setZeroes = function(matrix) {
    // row[0] -> matrix[...][0]
    // col[0] -> matrix[0][...]
    const col = matrix[0].length;
    const row = matrix.length;
    let col0 = 1;
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(matrix[i][j] === 0) {
                matrix[i][0] = 0;
                if(j == 0) {
                    col0 = 0;
                } else {
                    matrix[0][j] = 0;
                }
            }
        }
    } // O( N * M )


    for(let i = 1; i < row; i++) {
        for(let j = 1; j < col; j++) {
            if(matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }// O( (N-1) * (M-1) )

    if(matrix[0][0] == 0) {
        for(let j = 0; j < col; j++) matrix[0][j] = 0;
    }//O(M)

    if(col0 == 0) {
        for(let i = 0; i < row; i++) matrix[i][0] = 0;
    }//O(N)
    
    //O( {N * M} + {N-1 * M-1} + M + N)
};