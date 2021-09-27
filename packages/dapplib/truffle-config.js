require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remain common harvest glove frame giant'; 
let testAccounts = [
"0xf0bed449068818cf372ac758b43f373ce914651f90809fe7d107d64fc95a17cd",
"0xc59f03d62d0ba259397db7d357e2fbb4d176177cd2c00515f80a985062ceb4aa",
"0x0642c8e2b9a2872849072d8644dd16285698586df9e1b39079987f028d4ccfc7",
"0xe641cdcc85431e39791e7386c0b6a9104802341c0eecc47c6f1a5127736dc61c",
"0xdd9b69b33ab02c6d19190992bc97f33d2a8c0ef66fa78ac689710d6b5a18073e",
"0x9700e74107ed1330e8a85f8ee6bc283f2ae33ceddfccd9084d078c7db8e93390",
"0x06881d44cfb49e37343f9650acf8bfb38f863c44cc6e513af1217698c0a8031f",
"0xaca9d6ff3df75aecb1dcfd92cd38247c761d6b69056fad9498ef6218a966c15b",
"0x3bb5bd15fa248c8a1f3b5bc89863b93fd21c7222e79ad350a95f476fba142b4c",
"0xe0df2394b77dd71c91d941d0213bd4ca7407a1f5be29df304ba3d2c2bfefd23f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


