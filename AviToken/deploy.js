const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const path = require('path');
const fs = require('fs');
const { exit } = require('process');

const provider = new HDWalletProvider('write when local',
    'https://rinkeby.infura.io/v3/02af00bd0f2249a8908c3d1ef58c24ad');
const web3 = new Web3(provider);
const abiPath = path.resolve(__dirname, 'bin', 'AviToken.abi');
const abi = fs.readFileSync(abiPath, 'utf8');
const bytecodePath = path.resolve(__dirname, 'bin', 'AviToken.bin');
const bytecode = fs.readFileSync(bytecodePath, 'utf8');

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(abi))
        .deploy({ data: bytecode })
        .send({ from: account[0], gas: '100000' });
    console.log('Contract deployed to ', result.options.address);
    exit(0);
};

deploy();