function tabulation(m , n) {
    let dp = new Array(m);
    for(let i = 0; i < m; i++) {
        dp[i] = new Array(n);
    }


    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = 1;
            } else {
                let left = 0;
                let top = 0;
                if(i > 0) {
                    top += dp[i-1][j];
                }
                if (j > 0) {
                    left += dp[i][j-1];
                }

                dp[i][j] = left + top;
            }
        }
    }

    return dp[m-1][n-1];
}

function tabulationWithSpaceOptimised(m , n) {
    let dp = new Array(n);
    dp.fill(1);

    let leftDir = 0;

    for(let i = 1; i < m; i++) {
        const temp = [];
        temp.fill(0);
        for(let j = 0; j < n; j++) {
            temp[j] = leftDir + dp[j];
            leftDir = temp[j];
        }
        leftDir = 0;
        dp = temp;
    }

    return dp[n-1];
}

function recursiveWithMemo(m, n, memo) {
    if(m == 0 && n == 0) return 1;
    if(m < 0 || n < 0) return 0;
    if( memo[m][n]) return memo[m][n];
    const up = recursiveWithMemo(m-1, n, memo);
    const left = recursiveWithMemo(m, n-1, memo);
    memo[m][n] = left + up;
    return memo[m][n];
}