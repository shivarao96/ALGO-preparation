const majortiyElement = function(arr) {
    if(arr.length == 0) return -1;
    if(arr.length == 1) return arr[0];

    let count = 0;
    let elem = -1;

    for(let i = 0; i < arr.length; i++) {
        if(count == 0) {
            elem = arr[i];
            count += 1;
        } else {
            if (elem === arr[i]) {
                count += 1;
            } else {
                count -= 1;
            }
        }
    }

    return count === 0 ? -1 : elem;
}