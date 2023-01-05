// TODO: set up jest

d6 = [1, 2, 3, 4, 5, 6];

let damageResult = 0;
let effectCount = 0;

const rollButton = document.querySelector("#roll-button");
rollButton.addEventListener("click", function rollAllDice() {
  var numberOfDice = document.getElementById("numberOfDice").value;
  console.log(numberOfDice);
  allResults = [];
  for (let i = 1; i <= numberOfDice; i++) {
    rand = Math.floor(Math.random() * d6.length);
    d6result = d6[rand];
    allResults.push(d6result);
  }
  console.log(allResults);
  allResults.forEach(interpretResults);
  console.log(`
    Damage Rolled: ${damageResult}
    Effects Rolled: ${effectCount}
    `);
  damageResult = 0;
  effectCount = 0;
});

function interpretResults(rollResult) {
  // 1 = 1 damage
  // 2 = 2 damage
  // 3 = no damage
  // 4 = no damage
  // 5 = 1 damage, Effect
  // 6 = 1 damage, Effect
  switch (rollResult) {
    case 1:
      damageResult += 1;
      break;
    case 2:
      damageResult += 2;
      break;
    case 5:
      damageResult += 1;
      effectCount += 1;
      break;
    case 6:
      damageResult += 1;
      effectCount += 1;
      break;
    // TODO: add default case(?)/message if input is left blank
  }
}
