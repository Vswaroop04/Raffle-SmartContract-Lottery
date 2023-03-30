const { ethers } = require("hardhat")

const FRONT_END_ADDRESSES_FILE = ".../nextjs-sc-lottery/constants/contractAddresses.json"

const FRONT_END_ABI_FILE = ".../nextjs-sc-lottery/constants/abi.json"
module.exports = async () => {
    if (process.env.UPDATE_FRONTEND) {
        console.log("Updating frontend...")
        UpdateContractAddresses()
    }
}

async function UpdateContractAddresses(){
    const Raffle = await ethers.getContractFactory("Raffle")
}
