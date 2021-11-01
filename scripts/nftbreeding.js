
const hre = require("hardhat");


async function main() {
    const NFTBreeding = await hre.ethers.getContractFactory("NFTBreeding");
    const nftbreeding = await NFTBreeding.deploy();

    await nftbreeding.deployed();

    console.log("cryptoNFTs address is..", nftbreeding.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
