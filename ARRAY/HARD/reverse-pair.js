const countpairs = function(arr, low, mid, high) {
    let right = mid + 1;
    let cnt = 0;
    for(let i = low; i <= mid; i++) {
        while(right <= high && arr[i] > 2 * arr[right]) {
            cnt += ((mid - i) + 1)
            right++;
        }
        // while(right <= high && arr[i] > 2 * arr[right]) right++;
        // cnt += (right - (mid + 1))
    }
    return cnt;
}

const merge = function (arr, low, mid, high) {
  let left = low;
  let right = mid + 1;
  const temp = [];

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
};

const mergeSort = function (arr, low, high) {
  let cnt = 0;
  if (low >= high) return cnt;
  const mid = Math.floor((low + high) / 2);
  cnt += mergeSort(arr, low, mid);
  cnt += mergeSort(arr, mid + 1, high);
  cnt += countpairs(arr, low, mid, high);
  merge(arr, low, mid, high);
  return cnt;
};

var reversePairs = function(nums) {
    return mergeSort(nums, 0, nums.length - 1);
};