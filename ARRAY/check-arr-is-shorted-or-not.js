
// this is just for shorted
function checkArrIsShortedOrNot(arr) {
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}
// this is just for shorted and rotated
function checkArrIsShortedAndRotated(arr) {
    let decrease = false;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
            if(decrease) {
                return false;
            }
            decrease = true;
        }
    }
    return decrease ? arr[0] >= arr[arr.length - 1] : true;
}

