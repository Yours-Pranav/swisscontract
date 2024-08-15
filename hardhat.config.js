require("@nomicfoundation/hardhat-toolbox");
module.exports = {  solidity: "0.8.19",
  networks: {    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",      accounts: ["920186f5125f9685fb3bd7d975ca31910f05318af678d670157b9e0a4f3c2db1"], //Your private key starting with "0x"
    },  },
};

