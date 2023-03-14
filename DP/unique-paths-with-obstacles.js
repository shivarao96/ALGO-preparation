function tabulationWithSpaceOptimised(m , n, obstacleGrid) {
    let dp = new Array(n);
    dp.fill(0);

    let leftDir = 0;

    for(let i = 0; i < m; i++) {
        const temp = [];
        temp.fill(0);
        for(let j = 0; j < n; j++) {
            if(j >= 0 && j >= 0 && obstacleGrid[i][j] === 1) temp[j] = 0;
            else if(i == 0 && j == 0) temp[j] = 1;
            else {
                temp[j] = leftDir + dp[j];
            }
            leftDir = temp[j];
        }
        leftDir = 0;
        dp = temp;
    }

    return dp[n-1];
}

function recursiveWithMemo(m, n, obstacleGrid, memo) {
    if(m >= 0 && n >= 0 && obstacleGrid[m][n] === 1) return 0;
    if(m == 0 && n == 0) return 1;
    if(m < 0 || n < 0) return 0;
    if(memo[m][n]) return memo[m][n];
    const up = recursiveWithMemo(m-1, n, obstacleGrid, memo);
    const left = recursiveWithMemo(m, n-1, obstacleGrid, memo);
    memo[m][n] = left + up;
    return memo[m][n];
}