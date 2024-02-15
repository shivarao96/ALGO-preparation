var searchRange = function(arr, target) {
    
    const firstOccurence = function() {
        let ind  = -1;
        let low  = 0;
        let high = arr.length - 1;
        while(low <= high) {
            const mid = Math.floor((low + high)/2);
            if (arr[mid] == target) {
                high = mid - 1;
                ind = mid;
            } else if(arr[mid] < target) {
                low = mid + 1;
            } else high = mid - 1;
        }
        return ind;
    }

    const lastOccurence = function() {
        let ind  = -1;
        let low  = 0;
        let high = arr.length - 1;
        while(low <= high) {
            const mid = Math.floor((low + high)/2);
            if (arr[mid] == target) {
                low = mid + 1;
                ind = mid;
            } else if(arr[mid] < target) {
                low = mid + 1;
            } else high = mid - 1;
        }
        return ind;
    }

    const ans = [firstOccurence(), lastOccurence()];

    if(ans[0] == -1) return [-1, -1];
    console.log(ans[1] - ans[0] + 1);
    return ans;
};