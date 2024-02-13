const majorityElementNby3 = function(arr) {
    
    if(arr.length == 0) return [-Infinity,-Infinity];
    
    let count1 = 0;
    let count2 = 0;
    let elem1 = -Infinity;
    let elem2 = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(count1 == 0 && arr[i] != elem2) {
            count1++;
            elem1 = arr[i]
        } else if(count2 == 0 && arr[i] != elem1) {
            count2++;
            elem2 = arr[i];
        } else if (arr[i] == elem1) {
            count1++;
        } else if (arr[i] == elem2) {
            count2++;
        } else {
            count1--;
            count2--;
        }
    }

    count1 = 0;
    count2 = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == elem1) count1++;
        if(arr[i] == elem2) count2++;
    }

    const n  = Math.floor(arr.length / 3);
    const ans = [];
    
    if(count1 > n) ans.push(elem1);
    if(count2 > n) ans.push(elem2);

    return ans;
}

console.log(majorityElementNby3([3,2,3]));