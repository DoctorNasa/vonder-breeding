# Vonder NFT Breeding

This is a repo to work with and use NFTs smart contracts in a python environment, using the Chainlink-mix as a starting point.

HardHad Installation

```
npm install --save-dev hardhat
```

```
$ npx hardhat
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

Welcome to Hardhat v2.0.8

? What do you want to do? …
❯ Create a sample project
  Create an empty hardhat.config.js
  Quit

```

```
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help

```

```
Usage
There are 2 types of NFTs here.

vondernft.sol
breeding.sol
They each deploy unique dogs.Version gives you a random breed (out of a Vonder1, Vonder2, and Vonder3. Bernard).

The contract collection uses a Chainlink VRF to deploy the random vonder.

You can 100% use the Bsc testnet to see your NFTs rendered on opensea, but it's suggested that you test and build on a local development network so you don't have to wait as long for transactions.

Running Scripts
The simple collectibles work on a local network, however the breeding requires a testnet. We default to Bsc since that seems to be the testing standard for NFT platforms. You will need testnet Bsc  and testnet Bsc LINK. You can find faucets for both in the Chainlink documentation.
```
