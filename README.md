Repository Structure:
```text
/cardano-wallet-generator
│
├── /src
│   └── generateWallet.ts
│
├── .gitignore
├── README.md
├── package.json
└── LICENSE
```

Installation:
```bash
git clone https://github.com/hashHubTech/cardano-wallet-generator.git
cd cardano-wallet-generator
npm install
```

Usage:
```typescript
import { generateCardanoWallet } from './src/generateWallet';

generateCardanoWallet().then(wallet => {
  console.log(wallet);
});
```

Output:
```json
{
  "ticker": "ADA",
  "address": "addr1q...",
  "privateKey": "xprv...",
  "mnemonic": "abandon ability able about ..."
}
```

License:
This project is licensed under the MIT License.
