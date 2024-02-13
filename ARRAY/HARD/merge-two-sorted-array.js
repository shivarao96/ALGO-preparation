const bruteApproach = function(arr1, arr2) {
    let arr3 = [];
    const n = arr1.length;
    const m = arr2.length;

    let left = 0;
    let right = 0;
    let index = 0;

    while (left < n && right < m) {
        if (arr1[left] <= arr2[right]) {
            arr3[index] = arr1[left];
            left++, index++;
        }
        else {
            arr3[index] = arr2[right];
            right++, index++;
        }
    }

    while (left < n) {
        arr3[index++] = arr1[left++];
    }

    while (right < m) {
        arr3[index++] = arr2[right++];
    }

    for (let i = 0; i < n + m; i++) {
        if (i < n) arr1[i] = arr3[i];
        else arr2[i - n] = arr3[i];
    }
}

const optimalApproach = function(arr1, arr2) {
    const n = arr1.length;
    const m = arr2.length;

    let left = n - 1;
    let right = 0;

    while (left >= 0 && right < m) {
        if (arr1[left] > arr2[right]) {
            [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
            left--, right++;
        } else {
            break;
        }
    }
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
}


let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];
optimalApproach(arr1, arr2);
console.log(arr1.concat(arr2));