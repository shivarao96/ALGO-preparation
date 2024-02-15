var search = function(arr, target) {
    const recursiveSol = function(low, high) {
        if(high >= low) {
            const mid = Math.floor((low+high)/2);
            if(arr[mid] === target) return mid;
            if(arr[mid] > target) return recursiveSol(low, mid - 1);
            return recursiveSol(mid + 1, high);
        }
        return -1;
    }
    return recursiveSol(0, arr.length - 1);
};