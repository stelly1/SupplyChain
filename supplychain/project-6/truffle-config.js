require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = process.env["MNEMONIC_META"];
const infuraKey = process.env["INFURA_KEY"];

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "5777", // Match any network id
    },

    sepolia: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://sepolia.infura.io/v3/${infuraKey}`
        ),
      network_id: 11155111,
      gas: 4500000,
      gasPrice: 10000000000,
    },
  },

  mocha: {
    timeout: 1000000,
  },

  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
