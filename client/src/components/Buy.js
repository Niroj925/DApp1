import React from 'react'
import { ethers } from 'ethers';
 
function Buy({state}) {

    const buyCoffie=async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const name=document.querySelector("#name").value;
        const message=document.querySelector("#message").value;
        const amount={value:ethers.utils.parseEther("0.001")}
         const transaction=await contract.buyCoffie(name,message,amount)
         await transaction.wait();
         console.log('Transaction is success');
        console.log(transaction);

    }

  return (
    <div>
        <form onSubmit={buyCoffie}>
            <label>Name</label><br/>
            <input type='text' id="name" placeholder='Name..'></input><br/>
            <label>Message</label><br/>
            <input type='text' id="message" placeholder='Write your message..'></input><br/>
             <br/>
            <button type='submit'>Pay</button>
        </form>
    </div>
  )
}

export default Buy