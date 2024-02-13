const generateRows = function(rows) {
    const res = [];
    let ans = 1;
    res.push(ans);
    
    for(let i = 1; i < rows; i++) {
        ans = ans * (rows - i);
        ans = ans / i;
        res.push(ans);
    }

    return res;
}

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = [];
    for(let i = 1; i <= numRows; i++) {
        res.push(generateRows(i));
    }
    return res;
};

console.log(generate(5));