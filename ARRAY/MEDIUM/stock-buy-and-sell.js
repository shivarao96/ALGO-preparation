const maxProfit = function(arr) {
    let minimal = arr[0]; // 7
    let maxProfit = 0;
    // [7,1,5,6,2,1];
    for(let i = 1; i < arr.length; i++) {
        const profit = arr[i] - minimal;
        maxProfit = Math.max(maxProfit, profit); // 0|4|5|-|-
        minimal = Math.min(minimal, arr[i]); // 1|-|-|-|-
    }

    return maxProfit;
}