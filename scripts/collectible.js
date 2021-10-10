const hre = require("hardhat");

async function main() {
    const Collectible = await hre.ethers.getContractFactory("Collectible");
    const collectible = await Collectible.deploy();

    await collectible.deployed();

    console.log("cryptoNFTs address is..", collectible.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
