const totalHoursTaken = function(arr, bph) {
    let totalHours = 0;
    for(let  i = 0 ; i < arr.length; i ++) {
        totalHours += Math.ceil(arr[i] / bph);
    }
    return totalHours;
}

var minEatingSpeed = function(piles, h) {
    let maxVal = piles[0];
    for(let i = 1 ;i < piles.length; i++) {
        maxVal = Math.max(maxVal, piles[i]);
    }
    let low = 1;
    let high = maxVal;
    let ans = Infinity;

    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        const totalHours = totalHoursTaken(piles, mid);
        if (totalHours <= h) {
            ans = mid;
            high  = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
};