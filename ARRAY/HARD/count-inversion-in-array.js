const merge = function (arr, low, mid, high) {
  let left = low;
  let right = mid + 1;

  let count = 0;
  const temp = [];

  

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      count += mid - left + 1;
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

  return count;
};

const mergeSort = function (arr, low, high) {
  let cnt = 0;
  if (low >= high) return cnt;
  const mid = Math.floor((low + high) / 2);
  cnt += mergeSort(arr, low, mid);
  cnt += mergeSort(arr, mid + 1, high);
  cnt += merge(arr, low, mid, high);
  return cnt;
};


console.log(mergeSort([5, 4, 3, 2, 1], 0, 4));