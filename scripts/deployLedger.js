const hre = require('hardhat')


async function main() {
    
    const Ledger = await hre.ethers.getContractFactory("Ledger");
    const ledger = await Ledger.deploy();
  
    await ledger.deployed();  
    console.log(`deployed at address ${ledger.address}`)
}


main().catch((err)=>{
    console.error(err);
})