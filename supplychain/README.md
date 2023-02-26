# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer for caffeine beans. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

## Boilerplate Code

https://github.com/udacity/nd1309-Project-6b-Example-Template
Instructed to use PK provided: spirit, supply, whale...

## Libraries Used

Truffle v4.14.14, Node v18.12.1, Web3.js v1.7.5, Ganache v^7.1.0, Solidity v0.8.0

## Diagrams

### Activity

![truffle test](images/activity.PNG)

### Sequence

![truffle test](images/sequence.PNG)

### State

![truffle test](images/state.PNG)

### Classes

![truffle test](images/classes.PNG)

## Libraries

### truffle-hdwallet-provider: v^1.0.17

Adopted to connect to Sepolia tesnet and enable web3 provider client side applications

### dotenv: v^16.0.3

Adopted as a method to keep private key and API keys safe

### openzeppelin-solidity: v^3.4.2

Adopted to capitalize upon out-of-the box security tools and infrastructure that are open sourced and community reviewed

### lite-server: v2.4.0

Adopted to host client application and utilize node server

### truffle-assertions: v^0.9.2

Adopted to test smart contracts

### web3: v^1.7.5

Adopted to interact with ethereum nodes

## Write Smart Contracts with Functions

### Criteria

#### SupplyChain.sol contains required tracking functions

Complete - view project-6/contracts/coffeebase/SupplyChain.sol

#### Ownable.sol contains required functions that establish owner and the transfer of ownership

Complete - view project-6/contracts/coffeecore/Owneable.sol

#### ConsumerRole.sol contains required functions that manage the consumer role

Complete - view project-6/contracts/coffeeaccesscontrol/ConsumerRole.sol

#### RetailerRole.sol contains required functions that manage the consumer role

Complete - view project-6/contracts/coffeeaccesscontrol/RetailerRole.sol

#### DistributorRole.sol contains required functions that manage the consumer role

Complete - view project-6/contracts/coffeeaccesscontrol/DistributorRole.sol

#### Additional roles implemented are integrated correctly

Complete - view project-6/contracts/coffeeaccesscontrol/FarmerRole.sol and Roles.sol

## Test smart contract code coverage

Complete

## Deploy smart contract on a public test network (Sepolia)

https://sepolia.etherscan.io/address/0x5f7e88d34633dbf2da70a52422a18b757c194561

## Modify client code to interact with smart contracts

From Udacity instructions, "The coffee example in the boilerplate provides this code for you"

I did reference this Mentor response on front-ends to download web3.min.js: https://knowledge.udacity.com/questions/539158 which led me here: https://gist.github.com/andresaaap/29b2d4a4afd842929782f4f28562d7a8 and I then modified the HTML file
