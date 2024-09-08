{
  "name": "cardano-wallet-generator",
  "version": "1.0.0",
  "description": "A simple Node.js utility to generate Cardano (ADA) wallets using BIP39 and Emurgo serialization library.",
  "main": "src/generateWallet.js",
  "scripts": {
    "build": "tsc",
    "start": "node dist/generateWallet.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/hashHubTech/cardano-wallet-generator.git"
  },
  "keywords": [
    "Cardano",
    "ADA",
    "Wallet",
    "BIP39",
    "Emurgo",
    "Blockchain"
  ],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "@emurgo/cardano-serialization-lib-nodejs": "^10.0.0",
    "bip39": "^3.0.4"
  },
  "devDependencies": {
    "typescript": "^4.9.5"
  }
}
