
const hre = require("hardhat");

async function main() {

  const Coffie=await hre.ethers.getContractFactory("coffie");//fetching bytcode and abi
  const coffie=await Coffie.deploy();//creating an instances of our smart contract

  await coffie.deployed();//depoying smart contract 
  console.log("Deployed contract address:",`${coffie.address}`);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



