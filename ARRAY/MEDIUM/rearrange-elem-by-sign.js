var rearrangeArray = function(nums) {
    let oddIndex = 1;
    let evenIndex = 0;
    const rearrangedArray = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) {
            rearrangedArray[evenIndex] = nums[i];
            evenIndex += 2; 
        } else {
            rearrangedArray[oddIndex] = nums[i];
            oddIndex += 2;
        }
    }

    return rearrangedArray;
};

// -- two doesn't work bro
const rearrangeArrayWithTwoPointerApproach = function(arr) {
    let start = 0;
    let last = 0;

    while(start <= last && last < arr.length) {
        if (start % 2 == 0 && arr[start] > 0 || start % 2 != 0 && arr[start] < 0) { // even index (expecting positive) or odd index (expecting negative)
            start++;
        } else if (
            (start % 2 == 0 && arr[start] < 0 && arr[last] > 0) || // if even ind val is neg and odd ind val is even
            (start % 2 != 0 && arr[start] > 0 && arr[last] < 0) // if odd ind val is pos and even ind val is odd
        ) {
            const temp = arr[last];
            arr[last] = arr[start];
            arr[start] = temp;
            start++;
        }

        if (last % 2 == 0 && arr[last] > 0 || last % 2 != 0 && arr[last] < 0) { // even index (expecting positive) or odd index (expecting negative)
            last++;
        }
    }

    return arr;
}

console.log(rearrangeArrayWithTwoPointerApproach([3,1,-2,-5,2,-4,2,4,5,6,7,8,-2,-1,-6]));