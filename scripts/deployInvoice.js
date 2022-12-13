const hre = require('hardhat')


async function main() {
    
    const Invoice = await hre.ethers.getContractFactory("Invoice");
    const invoice = await Invoice.deploy("BY332" , "SL221" , 3700 , 203);
  
    console.log(`deployed at address ${invoice.address}`)
    
    console.log(`Verifying contract on Etherscan...`);
    
    // await invoice.deployTransaction.wait(6);
    // await run(`verify:verify`, {
    //     address: invoice.address,
    //     constructorArguments: ["BY332" , "SL221" , 3700 , 203],
    // });  //needed only once if the code doesn't change
}


main().catch((err)=>{
    console.error(err);
})

//0x032cDFAD07F58FD2C07F3da2a0b92dA97f169608
//https://goerli.etherscan.io/address/0x032cDFAD07F58FD2C07F3da2a0b92dA97f169608#code

//0x1E0CB7308CDD8d88f335895CC1c7B6c91085c4Db

//0x541514932A945487193A9104C588eC6b088df73F



//BY332
//BY123