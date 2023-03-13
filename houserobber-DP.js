
function houseRobber(n, houses) {
  if(n === 0) return houses[n];
  if(n < 0) return 0;
  const pick = houses[n] + houseRobber(n-2, houses);
  const notPick = houseRobber(n-1, houses);
  return Math.max(pick, notPick);
}

function houseRobberTabulation(houses) {
  let prev1 = houses[0]; // n-1
  let prev2 = 0; // n-2
  for(let i = 1; i < houses.length; i++) {
      let pick = houses[i] + prev2;
      let notPick = prev1;
      const curr = Math.max(pick, notPick);
      prev2 = prev1;
      prev1 = curr;
  }
  return prev1;
}


function main() {
  const houses = [2,7,9,3,1];
  console.log(
    houseRobberTabulation(houses)
  );
}

main();
