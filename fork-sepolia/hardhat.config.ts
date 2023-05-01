import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';

dotenv.config();

const INFURA_API_KEY = process.env.INFURA_API_KEY;

if (!INFURA_API_KEY) {
  throw new Error("INFURA_API_KEY is not set");
}

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      chainId: 11155111,
      forking: {
        url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      }
    }
  }
};

export default config;

