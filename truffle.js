module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id // testrpc
      // port: 7545,
      // network_id: "5777", //ganache
      gas: 5000000
    }
  }
};
