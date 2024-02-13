const optimalApproach = function (arr) {
  arr = arr.sort((a, b) => {
    if (a[0] - b[0] === 0) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (ans.length === 0 || arr[i][0] > ans[ans.length - 1][1])
      ans.push(arr[i]);
    else {
      ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], arr[i][1]);
    }
  }

  return ans;
};
console.log(
  optimalApproach([[2,3],[4,5],[6,7],[8,9],[1,10]])
);
