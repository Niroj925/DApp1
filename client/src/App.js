import React,{useState,useEffect} from 'react'
import abi from './contract/coffie.json';
import {ethers} from "ethers";
import Buy from './components/Buy';
import Memos from './components/Memos';

function App() {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null
  });
  const [account,setAccount]=useState("Account not connected")

  useEffect(()=>{
    const connectWallet=async ()=>{
      const contractAddress="0x04Add3c8fc285475a597253A87e9120148d3b179";
      const contractAbi=abi.abi;
    
      try{
        const {ethereum}=window;

        const account=await ethereum.request({method:"eth_requestAccounts"});
          
        window.ethereum.on("accountsChanged",()=>{
          window.location.reload();
        })
        setAccount(account);
        

        const provider=new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract=new ethers.Contract(contractAddress,contractAbi,signer);
       
        // console.log(contract);
        setState({ provider, signer, contract });

      }catch(err){
        console.log(err);
      }
    };
    connectWallet();
  },[]);
// console.log(state);
  return (
    <div>
      connected account:{account};
     <Buy state={state}/>
     <Memos state={state}/>
    </div> 
  )
}

export default App