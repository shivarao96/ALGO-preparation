var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        if(nums[mid] == target) return mid;
        if(nums[low] <= nums[mid]) {
            if(nums[low] <= target && target <= nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] <= target && target <= nums[high]) {
                low = mid + 1
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
};

// when duplicates
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        if(nums[mid] == target) return true;

        if(nums[mid] == nums[low] && nums[mid] == nums[high]) {
            low += 1;
            high -= 1;
            continue;
        }

        if(nums[low] <= nums[mid]) {
            if(nums[low] <= target && target <= nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] <= target && target <= nums[high]) {
                low = mid + 1
            } else {
                high = mid - 1;
            }
        }
    }

    return false;
};