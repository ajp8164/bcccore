Bcccore
=======

[![NPM Package](https://img.shields.io/npm/v/bcccore.svg?style=flat-square)](https://www.npmjs.org/package/bcccore)
[![Build Status](https://img.shields.io/travis/owstack/bcccore.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/bcccore)

Infrastructure to build Bitcoin and blockchain-based applications for the next generation of financial technology.

**Note:** If you're looking for the Bcccore Library please see: https://github.com/owstack/bcccore-lib

## Getting Started

Before you begin you'll need to have Node.js v4 or v0.12 installed. There are several options for installation. One method is to use [nvm](https://github.com/creationix/nvm) to easily switch between different versions, or download directly from [Node.js](https://nodejs.org/).

```bash
npm install -g bcccore
```

Spin up a full node and join the network:

```bash
npm install -g bcccore
bcccored
```

You can then view the OWS Explorer at the default location: `http://localhost:3001/explorer`, and your configuration file will be found in your home directory at `~/.bcccore`.

Create a transaction:
```js
var bcccore = require('bcccore');
var transaction = new bcccore.Transaction();
var transaction.from(unspent).to(address, amount);
transaction.sign(privateKey);
```

## Applications

- [Node](https://github.com/owstack/bcccore-node) - A full node with extended capabilities using Bitcoin Core
- [Explorer API](https://github.com/owstack/explorer-api) - A blockchain explorer HTTP API
- [OWS Explorer](https://github.com/owstack/explorer) - A blockchain explorer web user interface
- [Wallet Service](https://github.com/owstack/bcccore-wallet-service) - A multisig HD service for wallets
- [Wallet Client](https://github.com/owstack/bcccore-wallet-client) - A client for the wallet service
- [CLI Wallet](https://github.com/owstack/bcccore-wallet) - A command-line based wallet client
- [OWS Wallet](https://github.com/owstack/copay) - An easy-to-use, multiplatform, multisignature, secure bitcoin wallet

## Libraries

- [Lib](https://github.com/owstack/bcccore-lib) - All of the core Bitcoin primatives including transactions, private key management and others
- [Payment Protocol](https://github.com/owstack/bcccore-payment-protocol) - A protocol for communication between a merchant and customer
- [P2P](https://github.com/owstack/bcccore-p2p) - The peer-to-peer networking protocol
- [Mnemonic](https://github.com/owstack/bcccore-mnemonic) - Implements mnemonic code for generating deterministic keys
- [Channel](https://github.com/owstack/bcccore-channel) - Micropayment channels for rapidly adjusting bitcoin transactions
- [Message](https://github.com/owstack/bcccore-message) - Bitcoin message verification and signing
- [ECIES](https://github.com/owstack/bcccore-ecies) - Uses ECIES symmetric key negotiation from public keys to encrypt arbitrarily long data streams.

## Documentation

The complete docs are hosted here: [bcccore documentation](http://bcccore.io/guide/). There's also a [bcccore API reference](http://bcccore.io/api/) available generated from the JSDocs of the project, where you'll find low-level details on each bcccore utility.

- [Read the Developer Guide](http://bcccore.io/guide/)
- [Read the API Reference](http://bcccore.io/api/)

## Security

We're using Bcccore in production, as are [many others](http://bcccore.io#projects), but please use common sense when doing anything related to finances! We take no responsibility for your implementation decisions.

If you find a security issue, please email security@openwalletstack.com.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/owstack/bcccore/blob/master/CONTRIBUTING.md) file.

This will generate files named `bcccore.js` and `bcccore.min.js`.

You can also use our pre-generated files, provided for each release along with a PGP signature by one of the project's maintainers. To get them, checkout a release commit (for example, https://github.com/owstack/bcccore/commit/e33b6e3ba6a1e5830a079e02d949fce69ea33546 for v0.12.6).

To verify signatures, use the following PGP keys:
- @braydonf: https://pgp.mit.edu/pks/lookup?op=get&search=0x9BBF07CAC07A276D `D909 EFE6 70B5 F6CC 89A3 607A 9BBF 07CA C07A 276D`
- @gabegattis: https://pgp.mit.edu/pks/lookup?op=get&search=0x441430987182732C `F3EA 8E28 29B4 EC93 88CB  B0AA 4414 3098 7182 732C`
- @kleetus: https://pgp.mit.edu/pks/lookup?op=get&search=0x33195D27EF6BDB7F `F8B0 891C C459 C197 65C2 5043 3319 5D27 EF6B DB7F`
- @matiu: https://pgp.mit.edu/pks/lookup?op=get&search=0x9EDE6DE4DE531FAC `25CE ED88 A1B1 0CD1 12CD  4121 9EDE 6DE4 DE53 1FAC`

## License

Code released under [the MIT license](https://github.com/owstack/bcccore/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack. Bcccore is a trademark maintained by Open Wallet Stack.
