require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
const { INFURA_API_KEY, mnemonic, privateKey1, privateKey2, bscApiKey } = require('./secrets.json');
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: bscApiKey
  },
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [privateKey1, privateKey2]
    },
    Bkcmainnet: {
      url: "https://rpc.bitkubchain.io",
      chainId: 96,
      gasPrice: 5500000,
      accounts: [privateKey2]
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.6.12",
      },
      {
        version: "0.7.6",
        settings: {},
      },
      {
        version: "0.8.7",
        settings: {},
      }
    ]
  }
};
