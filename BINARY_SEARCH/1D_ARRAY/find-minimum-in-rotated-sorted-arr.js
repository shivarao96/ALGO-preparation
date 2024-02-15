var findMin = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    let ans = nums[0];
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        if(nums[mid] < ans) ans = nums[mid];
        if(nums[low] <= nums[mid]) { // left half sorted
            ans = Math.min(ans, nums[low]);
            low = mid + 1;
        } else {
            ans = Math.min(ans, nums[low]);
            high = mid - 1;
        }
    }

    return ans;
};