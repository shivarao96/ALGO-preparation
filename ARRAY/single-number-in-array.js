var singleNumber = function(nums) {
    let xorCond;
    for(let i = 0; i < nums.length; i++) {
        xorCond = xorCond ^ nums[i];
    }
    return xorCond;
};