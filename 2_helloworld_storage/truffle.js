module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545, // your rpc port (like geth rpc port or testrpc port )
      network_id: "*"    
    },
    production: {
      host: "http://bcldho54pdy6.eastus.cloudapp.azure.com",
      port: 8545, // your rpc port (like geth rpc port or testrpc port )
      network_id: "*"    
    }
  }
};
