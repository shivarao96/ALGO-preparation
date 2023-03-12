function climbingStairMapproach(stairs, memo) {
  if (stairs === 0) return 1;
  if (stairs === -1) return 0;
  if (memo[stairs]) return memo[stairs];
  const left = climbingStairMapproach(stairs - 1, memo);
  const right = climbingStairMapproach(stairs - 2, memo);
  memo[stairs] = left + right;
  return memo[stairs];
} 

function climbingStairTapproach(stairs) {
  let prev1 = 1;
  let prev2 = 0;
  for (let i = 1; i <= stairs; i++) {
    const step = prev1 + prev2;
    prev2 = prev1;
    prev1 = step;
  }
  return prev1;
}

function main() {
  const memo = [];
  console.log(climbingStairMapproach(3, memo));
  console.log(climbingStairTapproach(3));
}

main();
