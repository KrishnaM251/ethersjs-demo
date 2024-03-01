/** import etherjs */
const { ethers } = require('ethers');

/** get infura id */
// Create an account here: https://www.infura.io
// Copy the API key they generate for you to INFURA_ID below
const INFURA_ID = ''
const infura_url = `https://mainnet.infura.io/v3/${INFURA_ID}`

/** init provider */
const provider = new ethers.providers.JsonRpcProvider(infura_url)

/** find some wallet address */
const address = '0x4675C7e5BaAFBFFbca748158bEcBA61ef3b0a263'

/** setup async function to get balance */
const main = async() => {
    const balance = await provider.getBalance(address)
    console.log(`Balance: ${ethers.utils.formatEther(balance)}`)
}

/** call function */
main()