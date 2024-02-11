var rotate = function(nums, k) {
    if(nums.length <= 1) {
        return nums;
    }
    const leftRotateKey = nums.length - k % nums.length;
    reverseArray(nums, 0, leftRotateKey - 1);
    reverseArray(nums, leftRotateKey, nums.length - 1);
    reverseArray(nums, 0, nums.length - 1);
};

var reverseArray = function(nums, range1, range2) {
    while(range1 < range2) {
        const temp = nums[range1];
        nums[range1] = nums[range2];
        nums[range2] = temp;
        range1++;
        range2--;
    }
}