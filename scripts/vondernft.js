
const hre = require("hardhat");

async function main() {
    const VonderNFT = await hre.ethers.getContractFactory("VonderNFT");
    const vonderNFT = await VonderNFT.deploy();

    await vonderNFT.deployed();

    console.log("cryptoNFTs address is..", vonderNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
