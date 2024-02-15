var findNoOfRotations = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    let ind = 0;

    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        if(nums[mid] < nums[ind]) ind = mid;
        if(nums[low] <= nums[mid]) {
            if(nums[low] < nums[ind]) ind = low;
            low = mid + 1;
        } else {
            if(nums[low] < nums[ind]) ind = low;
            high = mid - 1;
        }
    }

    return ind;
};