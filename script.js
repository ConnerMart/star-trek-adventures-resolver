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

//
//
//
//
//
//
//
//
//
// attackButton.addEventListener("click", function attackTroll() {
//   attackButton.setAttribute("style", "display: none");
//   feedbackText.setAttribute("style", "margin-top: 75px");
//   rollIs = document.createElement("p");
//   rollIs.textContent = "Your attack roll is: ";
//   feedbackText.appendChild(rollIs);
//   delayTime();
// });

// function delayTime() {
//   var secondsLeft = 2;
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);
//       var attackResult = document.createElement("p");
//       attackResult.textContent = d20result;
//       attackResult.setAttribute("style", "margin-left: 15px");
//       feedbackText.appendChild(attackResult);
//       delayAgain();
//     }
//   }, 1000);
// }

// function delayAgain() {
//   var secondsLeft = 1;
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);
//       if (trollAC <= d20result) {
//         var miss = document.createElement("p");
//         miss.textContent = "Your attack misses the troll.";
//         feedbackText.appendChild(miss);
//       } else {
//         var hit = document.createElement("p");
//         hit.textContent = "Your attack hits the troll.";
//         feedbackText.appendChild(hit);
//       }
//       newButton();
//     }
//   }, 1000);
// }

// function newButton() {
//   var newButton = document.createElement("button");
//   newButton.setAttribute("style", "margin-top: 15px");
//   newButton.textContent = "End Turn";
//   feedbackText.appendChild(newButton);
//   newButton.addEventListener("click", function trollAttack() {
//     newButton.setAttribute("style", "display: none");
//     rollIs = document.createElement("p");
//     rollIs.textContent = "The troll's attack roll is: ";
//     feedbackText.appendChild(rollIs);
//     delayTime();
//   });
// }
