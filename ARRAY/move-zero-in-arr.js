var moveZeroesToEnd = function(nums) {

    let left = 0;
    let right = 0;

    while(right < nums.length) {
        // --  if left is 0 and right is non zero swap and move l++
        if(nums[left] === 0 && nums[right] !== 0) {
            const temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
        
        // -- if no zero found then move
        while(nums[left] !== 0 && left < right) {
            left++;
        }

        right++;
    }
};

var moveZeroesToStart = function(nums) {

    let left = 0;
    let right = 0;

    while(right < nums.length) {
        // --  if left is 0 and right is non zero swap and move l++
        if(nums[left] !== 0 && nums[right] === 0) {
            const temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
        }
        
        // -- if no zero found then move
        while(nums[left] === 0 && left < right) {
            left++;
        }

        right++;
    }

    console.log(nums);
};

moveZeroesToStart([4,2,4,0,0,3,0,5,1,0]);