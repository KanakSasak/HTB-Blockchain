// scripts/interact.js

const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    const SETUP_ADDRESS = "0x6d40b13B7422370FE93801313b62244A1A0A1b26";  // Replace with the actual address
   
    // Get the contract instances
    const Setup = await hre.ethers.getContractFactory("Setup2");
    const setupInstance = Setup.attach(SETUP_ADDRESS);

    // Interact with the Setup contract
    const targetAddress = await setupInstance.TARGET();
    console.log(`Target Creature Address: ${targetAddress}`);

    // Assuming Creature ABI is available
    const Creature = await hre.ethers.getContractFactory("Creature2");
    const creatureInstance = Creature.attach(targetAddress);

    // Deal damage and loot
    await creatureInstance.strongAttack(20);
    await creatureInstance.loot();



    console.log(`Balance of Creature after attack: ${await hre.ethers.provider.getBalance(targetAddress)}`);
    //console.log(`Balance of Creature after attack: ${await setupInstance.isSolved(true)}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
