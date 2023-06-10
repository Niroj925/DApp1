// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract coffie{
    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo[] memos;

    address payable  owner;

    constructor(){
        owner=payable(msg.sender);
    }

    function buyCoffie(string calldata name,string calldata message)external  payable {
        require(msg.value>0,"Please pay more than 0 ETH");
        owner.transfer(msg.value);
        memos.push(Memo(name,message,block.timestamp,msg.sender));
    }

    function getMemos() public  view returns (Memo[] memory){
        return memos;
    }
}