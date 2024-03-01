const { ethers } = require("ethers");

const INFURA_ID = 'beb2e2bb1e404d33a1f934cfdaef1276'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

/** get specific contract fields (name, symbol, totalSupply)*/
const DAI_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)"
]

/** get DAI contract address */
const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F'

/** create contract so can interact with it in javascript */
const contract = new ethers.Contract( address , DAI_ABI , provider )

const main = async () => {
    /** create some variables, print values */
    const name = await contract.name()
    const symbol = await contract.symbol()
    const totalSupply = await contract.totalSupply()

    console.log(`\nReading from ${address}\n`)
    console.log(`Name: ${name}`)
    console.log(`Symbol: ${symbol}`)
    console.log(`Total Supply: ${ethers.utils.formatEther(totalSupply)}\n`)
}

main()