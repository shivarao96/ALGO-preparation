const lowerBound = function(arr, k) {
    let low = 0;
    let high = arr.length - 1;
    let ans = arr.length;
    while(low <= high) {
        const mid = Math.floor((low + high)/2);
        if (arr[mid] >= k) {
            high = mid - 1;
            ans = mid;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}


console.log(lowerBound([0,0,0,1,2,3,4,5,6,7,7,8,9,9,10], 9));
