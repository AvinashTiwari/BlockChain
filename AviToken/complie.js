const path = require('path');
const fs = require('fs');
const solc = require('solc');

const aviToken = path.resolve(__dirname, 'contract','AviToken.sol');
const source = fs.readFileSync(aviToken, 'utf8');
var input = {
    language: 'Solidity',
    sources: {'AviToken.sol' :{
              content: source
    }},
    settings: {
        outputSelection: {
            '*':{
                '*': ['*']
            }
        }
    }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(output);
var contract = output.contracts['AviToken.sol']['AviToken'];
var dirName = 'bin';
const contractByteCodePath = path.join(dirName, 'AviToken.bin');
fs.writeFileSync(contractByteCodePath, contract.evm.bytecode.object);

const contractAbiApth = path.join(dirName, 'AviToken.abi');
fs.writeFileSync(contractAbiApth,JSON.stringify(contract.abi));