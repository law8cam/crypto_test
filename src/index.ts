
import { Wallet } from 'ethers';

function createNewEthereumAddress() {

    var address1 = "0x19833badEf48966AC870c5A1e05718E929bf8891"
    var example = "0x9f04b53c21752922cf30a98db5b9bf7be522a9df5c6c5dd2c9fb0d4043dfde78"

    // Generate a new random wallet
    const wallet = Wallet.createRandom();

    // Extract the address and private key
    const address = wallet.address;
    const privateKey = wallet.privateKey;

    console.log("Ethereum Address:", address);
    console.log("Private Key:", privateKey);

    var seed = "cube seek space unique renew cable one stumble ring video artefact hammer"

    'unique point space unique renew cable one stumble ring video artefact hammer'

    // tribe seek physical unique renew cable one stumble ring video artefact hammer

    return { address, privateKey };
}

// Call the function
const newWallet = createNewEthereumAddress();
