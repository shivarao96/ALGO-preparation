const noOfBouquets = function(arr, k, day) {
    let count = 0;
    let bouquets = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= day) {
            count++;
        } else {
            bouquets += Math.floor(count / k);
            count = 0;
        }
    }

    if(count) {
        bouquets += Math.floor(count / k);
    }

    return bouquets;
}

var minDays = function(bloomDay, m, k) {
    if(m*k > bloomDay.length) return -1;

    let low = bloomDay[0];
    let high = bloomDay[0];
    for(let i = 1; i < bloomDay.length; i++) {
        low = Math.min(low, bloomDay[i]);
        high = Math.max(high, bloomDay[i]);
    }
    let ans = -1;
    
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        const bouquets = noOfBouquets(bloomDay, k, mid);
        if(bouquets >= m) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
};