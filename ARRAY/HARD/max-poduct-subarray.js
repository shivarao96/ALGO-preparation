var maxProduct = function(nums) {
    let prefix = 1;
    let suffix = 1;
    const n = nums.length;
    let ans = -Infinity;
    for(let i = 0; i < n; i++) {
        if(prefix == 0) prefix = 1;
        if(suffix == 0) suffix = 1;
        
        prefix = prefix * nums[i];
        suffix = suffix * nums[n - i - 1];
        
        ans = Math.max(ans, prefix, suffix);
    }
    return ans;
};