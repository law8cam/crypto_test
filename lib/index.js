"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
function createNewEthereumAddress() {
    // var address1 = "0x19833badEf48966AC870c5A1e05718E929bf8891"
    // var example = "0x9f04b53c21752922cf30a98db5b9bf7be522a9df5c6c5dd2c9fb0d4043dfde78"
    // Generate a new random wallet
    const wallet = ethers_1.Wallet.createRandom();
    // Extract the address and private key
    const address = wallet.address;
    const privateKey = wallet.privateKey;
    console.log("Ethereum Address:", address);
    console.log("Private Key:", privateKey);
    return { address, privateKey };
}
// Call the function
const newWallet = createNewEthereumAddress();
