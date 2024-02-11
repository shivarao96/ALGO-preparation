var twoSum = function(nums, target) {
    if (nums.length === 0 || nums.length === 1) {
        return [-1, -1];
    }
    const hashMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        const reminder = target - nums[i];
        if (hashMap.has(reminder)) {
            return [hashMap.get(reminder), i];
        }
        hashMap.set(nums[i], i);
    }
    return [-1, -1]
};

var twoPointerApproach = function(arr, k) {
    let newArray = arr.map((val, ind) => [val, ind]);
    newArray = newArray.sort((a,b) => a[0] - b[0]);
    let first = 0;
    let last = newArray.length - 1;
    let cumilativeSum = newArray[first][0] + newArray[last][0];
    
    while(first <= last) {
        if (cumilativeSum == k) {
            return [newArray[first][1], newArray[last][1]]
        }
        if (cumilativeSum < k) {
            first++;
        } else {
            last--;
        }
        cumilativeSum = newArray[first][0] + newArray[last][0];
    }

    return [-1, -1];
}

console.log(twoPointerApproach([2,7,11,15], 9));