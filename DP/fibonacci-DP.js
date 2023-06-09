export const fibonacciMemoization = function(n, memo) {
  if(n <= 1) {
    return n;
  }
  if (memo[n]) {
    return memo[n];
  }
  memo[n] = fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo);
  return memo[n];
}

export const fibonacciTabulation = function(n) {
  let prev1 = 1;
  let prev2 = 0;

  for ( let i = 2; i <= n; i++) {
    const curr = prev1 + prev2;
    prev2 = prev1;
    prev1 = curr;
  }

  return prev1;
}

// const memArr = [];
// console.log(fibonacciMemoization(6, memArr)); // TC: O(n)||SC: O(n)||SS: O(n)
// console.log(fibonacciTabulation(6)); // TC: O(n)||SC: --||SS: --
