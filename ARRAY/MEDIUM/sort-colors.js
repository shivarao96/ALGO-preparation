const bruteForceApproach = function(nums) {
    const inPlace = {
        0: 0,
        1: 0,
        2: 0
    };
    for(let i = 0; i < nums.length; i++) {
        if(inPlace[nums[i]] !== undefined) {
            inPlace[nums[i]] = inPlace[`${nums[i]}`] + 1;
        }
    }
    let count = 0;
    for(let key in inPlace) {
        for(let i = 0; i < inPlace[key]; i++) {
            nums[count++] = key;
        }
    }
}

const dutchNationalFlagApproach = function(nums) {
    /**
     * solution is like this
     * 0's will hold from low to x position
     * 1's will hold from mid to y position
     * 2's will hold from z to high position i.e
     * [low..0's..mid..1's.high..2's..end]
     */

    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while(mid <= high) {
        if (nums[mid] === 0) {
            const temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            mid++;
            low++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            const temp = nums[high];
            nums[high] = nums[mid];
            nums[mid] = temp;
            high--;
        }
    }
}