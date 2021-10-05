
const hre = require("hardhat");

async function main() {
    const CryptoNFTs = await hre.ethers.getContractFactory("CryptoNFTs");
    const cryptoNFTs = await CryptoNFTs.deploy();

    await cryptoNFTs.deployed();

    console.log("cryptoNFTs address is..", cryptoNFTs.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
