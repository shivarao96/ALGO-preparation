
export const frogJumpRecursive = function(n, heights, memo) {
  if (n === 0) return 0;
  if (memo[n]) return memo[n];
  const left = frogJumpRecursive(n-1, heights, memo) + Math.abs(heights[n] - heights[n-1]);
  let right = Infinity;
  if (n > 1) {
    right = frogJumpRecursive(n-2, heights, memo) + Math.abs(heights[n] - heights[n-2]);
  }
  memo[n] = Math.min(left, right);
  return memo[n];
}

export const frogJumpTabulation = function(heights) {
  let prev1 = 0;
  let prev2 = 0;
  for(let i = 1; i < heights.length; i++) {
    const left = prev1 + Math.abs(heights[i] - heights[i-1]);
    let right = Infinity;
    if (i > 1) {
      right = prev2 + Math.abs(heights[i] - heights[i-2]);
    }
    const curr = Math.min(left, right);
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}

// const heights = [10, 20, 30, 10];
// const memo = {};
// console.log(
//   frogJumpRecursive(heights.length - 1, heights, memo)
// );
// console.log(frogJumpTabulation(heights));

