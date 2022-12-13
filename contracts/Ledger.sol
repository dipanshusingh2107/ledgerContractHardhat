// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.17;
import './Invoice.sol';

contract Ledger {
    Invoice[] invoicesCreated;
    mapping (string => Invoice[]) buyerInvoices;
    function createInvoice(Invoice _invoice) public {
        invoicesCreated.push(_invoice);
        string memory buyerPan = _invoice.buyerPan();
        buyerInvoices[buyerPan].push(_invoice);
    }
    function returnInvoices(string memory buyerPan) public view returns (Invoice[]memory)
    {
        return buyerInvoices[buyerPan];
    }
}