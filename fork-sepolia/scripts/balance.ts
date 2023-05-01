import { ethers } from "hardhat";

async function main() {
  // get ether balance of account
  const balance = await ethers.provider.getBalance(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );
  console.log("Balance: ", ethers.utils.formatEther(balance));
  // get chainID
  const chainId = await ethers.provider.getNetwork();
  console.log("Chain ID: ", chainId.chainId);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
