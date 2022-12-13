// SPDX-License-Identifier: Unlicense
pragma solidity 0.8.17;

contract Invoice {
    string  public buyerPan;
    string  public sellerPan;
    int256  amount;
    uint256 data;
    bool paymentStatus;

    constructor(string memory _buyerPan , string memory _sellerPan , int256 _amount , uint256 _date) {
        buyerPan = _buyerPan;
        sellerPan = _sellerPan;
        amount = _amount;
        data = _date;
        paymentStatus = false;
    }

    function changePaymentStatus()public{
        paymentStatus = true;
    }
}