require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks:{
    goerli:{
      url: process.env.goerliURL,
      accounts:[process.env.privateKey],
    }
  },
  etherscan:{
    apiKey:{
      goerli:process.env.etherScan
    }
  }
};

//Ledger contract 0x15757D862992cf0AA30484Dd83f4b2Cbb6e039A7
//https://goerli.etherscan.io/address/0x15757D862992cf0AA30484Dd83f4b2Cbb6e039A7#code