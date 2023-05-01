#!/usr/bin/env bash

echo "Starting fork-sepolia at port 8545"
cd fork-sepolia && npx hardhat node --port 8545
