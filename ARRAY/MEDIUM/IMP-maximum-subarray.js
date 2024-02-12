const khadanesAlgoToFindMaximumSubarray = function(arr) {
    let maxi = arr[0];
    let sum = 0;
    let startIndex = -1;
    let endIndex = -1;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > maxi) {
            maxi = sum;
            endIndex = i;
        }
        if(sum < 0){ 
            sum = 0;
            startIndex = i;
        }
    }

    return [maxi, [startIndex + 1, endIndex]];
}

console.log(khadanesAlgoToFindMaximumSubarray([-2,1,-3,4,-1,2,1,-5,4]));