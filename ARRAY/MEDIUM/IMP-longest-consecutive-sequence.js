const approachOne = function(arr) {
    arr.sort((a,b) => a - b);


    let lastElement = -Infinity;
    let maxLength = 1;
    let currentLength = 1;
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] - 1 == lastElement) {
            currentLength += 1;
        } else if (arr[i] != lastElement) {
            currentLength = 1;
        }
        lastElement = arr[i];
        maxLength = Math.max(maxLength, currentLength);

    }
    
    console.log(maxLength); // TC: O(nlogn), SC: O(1)
}


const apporachTwo = function(arr) {
    const mySet = new Set();
    for(let i = 0; i < arr.length; i++) {
        mySet.add(arr[i])
    }
    let maxLength = 1;
    for (const value of mySet) {
        if(!mySet.has(value - 1)) {
            let curr = value + 1;
            let len = 1;
            while(mySet.has(curr)) {
                len++;
                curr++;
            }
            maxLength = Math.max(maxLength, len);
        }
    }

    console.log(maxLength); // TC: O(n + 2n), SC: O(n)
}

apporachTwo([101,1,102,2,3,100,103,4,4,101,5,6,7]);