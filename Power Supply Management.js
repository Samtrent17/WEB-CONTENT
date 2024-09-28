// Define the power supply and the number of homes
let powerSupply = 100; // Total available power
const numberOfHomes = 5; // Total number of homes
const powerPerHome = 25; // Power required per home

// Check if the power supply is sufficient for all homes
if (powerSupply >= powerPerHome * numberOfHomes) {
    console.log("The power supply is sufficient for all homes.");
} else {
    console.log("The power supply is insufficient for all homes.");
}

// Simulate power being distributed to each home
for (let home = 1; home <= numberOfHomes; home++) {
    if (powerSupply >= powerPerHome) {
        powerSupply -= powerPerHome;
        console.log(`Home ${home} received power. Remaining power supply: ${powerSupply}`);
    } else {
        console.log(`Home ${home} could not receive power due to a shortage.`);
        break;
    }
}
// Display the final state of the power supply
console.log(`Final power supply remaining: ${powerSupply}`);