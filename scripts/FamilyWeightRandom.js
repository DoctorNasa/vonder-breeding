
const hre = require("hardhat");

async function main() {
    const FamilyWeightRandom = await hre.ethers.getContractFactory("FamilyWeightRandom");
    const familyweightrandom = await FamilyWeightRandom.deploy();


    await familyweightrandom.deployed();

    console.log("cryptoNFTs address is..", familyweightrandom.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
