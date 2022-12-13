const { expect } = require("chai");
const { ethers } = require("hardhat");


describe('Deploymnet',()=>{
    
    it("checking deployment" , async ()=>{
        const Invoice = await ethers.getContractFactory("Invoice");
        const invoice = await Invoice.deploy("buyerPan" , "sellerPan" , 1000 , 12);
        expect(invoice)
    });
});

