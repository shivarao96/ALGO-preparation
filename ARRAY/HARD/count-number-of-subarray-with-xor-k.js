const optimalApproach = function(arr, k) {
    const map = {};
    let count = 0;
    let xr = 0;
    map[0] = 1;
    for(let i = 0; i < arr.length; i++) {
        xr = xr ^ arr[i];
        const x = xr ^ k;
        if(map[x] !== undefined) count += map[x];
        
        if(map[xr]) map[xr] += 1;
        else map[xr] = 1;
    }
    return count;
}

console.log(optimalApproach([1, 2, 3, 2], 2))