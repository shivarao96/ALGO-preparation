var subarraySum = function(nums, k) {
    const prefixSumMap = {};
    prefixSumMap[0] = 1;
    let prefixSum = 0
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        const remove = prefixSum - k;
        if(prefixSumMap[remove]) {
            count += prefixSumMap[remove];
        }
        if(prefixSumMap[prefixSum]) {
            prefixSumMap[prefixSum] += 1;
        } else prefixSumMap[prefixSum] = 1;
    }

    return count;
};