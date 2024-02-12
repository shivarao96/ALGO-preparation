/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const reverseArray = function(range1, range2) {
        while(range1 < range2) {
            const temp = nums[range1];
            nums[range1] = nums[range2];
            nums[range2] = temp;
            range1++;
            range2--;
        }
    }

    // find longest prefix
    let breakPoint = -1;
    for(let i = nums.length - 2; i >= 0; i--) {
        if(nums[i] < nums[i+1]) {
            breakPoint = i;
            break;
        }
    }

    if(breakPoint == -1) {
        reverseArray(0, nums.length - 1);
        return;
    }

    for(let i = nums.length - 1; i > breakPoint; i--) {
        if(nums[i] > nums[breakPoint]) {
            const temp = nums[breakPoint];
            nums[breakPoint] = nums[i];
            nums[i] = temp;
            break;
        }
    }

    reverseArray(breakPoint+1, nums.length - 1);

};