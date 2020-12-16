require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remain hole idea drop supply seminar'; 
let testAccounts = [
"0x8ee6e4ce55fcfb7cc699b3a16f76b7f05fbb95874b873ecb3ccafe9497ef18af",
"0xef23fff25399fdf2f16ac61e54fbd4ccf31788cb20cc71af775f690f089c1417",
"0xf64321d57a98a0e373b7062a64f65f0bf60f30e1473a7ac8a79a93318100e454",
"0x4fe2b019931fdc4534051fa685e1b1ff2c0f6f902f245b84d90ec09b7459dec6",
"0x1f763918b63a4057bdafddd0fd063e9cd97465fd6353338a0b1e61a5aaeb001d",
"0x9de8cd3b003ca2e2144ace537221bf86f08f81b2d65f988d251e4103625fde93",
"0xf265404d8b11acdc41b5ee4f9c3df32379c060ff40b2cb2165adaf2259e96938",
"0xd96ebe09c8c68d0d3907deb0aad6c20dd260825749e2a6a3e69730da96d3c830",
"0x3373ef16293437a5b05772ad49a0969fc04b0c76f959a70ede6ccb72769e80fc",
"0xaff546658c6b5014e3102075d9a1d8705f4a356e527e27b88108cd87110dad6b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
