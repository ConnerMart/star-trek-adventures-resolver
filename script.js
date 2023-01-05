// TODO: set up jest

d6 = [1, 2, 3, 4, 5, 6];

let damageResult = 0;
let effectCount = 0;

const rollButton = document.querySelector("#roll-button");
rollButton.addEventListener("click", function rollNumberOfDice() {
  var numberOfDice = document.getElementById("numberOfDice").value;
  allResults = [];
  for (let i = 1; i <= numberOfDice; i++) {
    rand = Math.floor(Math.random() * d6.length);
    d6result = d6[rand];
    allResults.push(d6result);
  }
  allResults.forEach(interpretResults);
  console.log(`
    rolling ${numberOfDice}d6...
    ${allResults.join(", ")}
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
    // TODO: add default case(?)/message if input is left blank (numberofDice?)
  }
}

function rollWeapon(damageDice, name) {
  var numberOfDice = damageDice;
  allResults = [];
  for (let i = 1; i <= numberOfDice; i++) {
    rand = Math.floor(Math.random() * d6.length);
    d6result = d6[rand];
    allResults.push(d6result);
  }
  allResults.forEach(interpretResults);
  console.log(`
    ${name}: rolling ${numberOfDice}d6...
    ${allResults.join(", ")}
    Damage Rolled: ${damageResult}
    Effects Rolled: ${effectCount}
    `);
  damageResult = 0;
  effectCount = 0;
}

// TODO: add effects
// Unarmed Strike = 1d6, Knockdown
// Knife/Dagger = 1d6, Vicious 1
// Blade (Sword, Mek'leth, etc.) = 2d6, Vicious 1
// Heavy Blade (Bat'leth, Kar'takin, Lirpa) = 3d6, Vicious 1
// Bludgeon = 2d6, Knockdown
// Phaser Type-1 = 2d6
// Phaser Type-2 = 3d6
// Phaser Type-3 (Phaser Rifle) = 4d6
// Pulse Grenade = 4d6, Area
// Andorian Plasma Rifle = 4d6, Intense
// Phase Pistol = 3d6
// Particle Rifle = 4d6
// Disruptor Pistol = 3d6, Vicious 1
// Disruptor Rifle = 4d6, Vicious 1
