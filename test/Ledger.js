const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const assert = require("minimalistic-assert");


describe('deployment of ledger',async()=>{
    async function deployTokenFixture() {

        const Ledger = await ethers.getContractFactory("Ledger");
        const [owner, addr1, addr2] = await ethers.getSigners();
        const ledger = await Ledger.deploy();

        await ledger.deployed();
        return { Ledger, ledger, owner, addr1, addr2 };
    }


    it("insert Invoice" , async()=>{
        const { ledger} = await loadFixture(deployTokenFixture);
        const Invoice = await ethers.getContractFactory("Invoice");
        const invoice = await Invoice.deploy("BY123" , "SL321",1000 , 213);

        expect(await ledger.createInvoice(invoice.address));
        const [result] = await ledger.returnInvoices("BY123");
        assert(invoice.address == result)
    });

});