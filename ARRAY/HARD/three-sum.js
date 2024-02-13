var threeSumBrute = function(nums) {
    // brute
    let ans = [];
    const n = nums.length;
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            for(let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    const temp = [nums[i], nums[j], nums[k]];
                    temp.sort((a,b) => a - b);
                    ans.push(temp);
                }
            }
        }
    }

    let set  = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);

    return ans;
};

var threeSumBetter = function(nums) {
    let ans = [];
    const n = nums.length;
    for(let i = 0; i < n; i++) {
        let hashSet  = new Set();
        for(let j = i + 1; j < n; j++) {

            const third = -(nums[i] + nums[j]);

            if (hashSet.has(third)) {
                const temp = [nums[i], nums[j], third];
                temp.sort((a,b) => a - b);
                ans.push(temp);
            }

            hashSet.add(nums[j]);
        }
    }

    let set  = new Set(ans.map(JSON.stringify));
    ans = Array.from(set).map(JSON.parse);

    return ans;
};

var threeSumOptimal = function(nums) {
    nums = nums.sort((a,b) => a - b);
    const ans = [];
    for(let i = 0 ; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue; // ignoring the duplicate
        let j = i+1;
        let k = nums.length - 1;
        while(j < k) {
            const val = nums[i] + nums[j] + nums[k];
            if (val < 0) {
                j++;
            } else if (val > 0) {
                k--;
            } else {
                ans.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while(j < k && nums[j] === nums[j - 1]) j++;
                while(j < k && nums[k] === nums[k + 1]) k--;
            }
        }
    }
    return ans;
};

console.log(threeSumBetter([-1,0,1,2,-1,-4]));