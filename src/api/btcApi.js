import btc from 'bitcoinjs-lib';
import bip39 from 'bip39';

const _PURPOSE = 44;
const _COIN = 0;
const _ACCOUNT = 0;

// function deriveAddressFromPath(root, addressType, addressIndex){
//   const path = `m/44'/0'/0'/${addressType}/${addressIndex}`;
//   return root.derivePath(path).getAddress();
// }

function deriveAddressFromAccount(xpub, addressType, atIndex){

  return btc.HDNode.fromBase58(xpub).derive(addressType).derive(atIndex).getAddress();
}

export function generateBtcAccount() {
  return new Promise((resolve) => {

    setTimeout(() => {
      const mnemonic = bip39.generateMnemonic(256);
      const seed = bip39.mnemonicToSeed(mnemonic);
      const HDRootNode = btc.HDNode.fromSeedBuffer(seed);
      const accountNode = HDRootNode.deriveHardened(_PURPOSE).deriveHardened(_COIN).deriveHardened(_ACCOUNT);
      const xpub = accountNode.neutered().toBase58();

      resolve({ mnemonic, xpub, internalAddresses: [], externalAddresses: [] });
    }, 50);
  });
}

// externalPaymentNode = accountNode.derive(0),
// internalChangeNode = accountNode.derive(1),

// externalBip32ExtendedXprv = externalPaymentNode.toBase58(),
// externalBip32ExtendedXpub = externalPaymentNode.neutered().toBse58(),

// internalBip32ExtendedXprv = internalChangeNode.toBase58(),
// internalBip32ExtendedXpub = internalChangeNode.neutered().toBse58(),

// externalAddresses = Array(5).fill().map( (addr, idx) => externalBip32ExtendedXpub.derive(idx)),
// internalAddresses = Array(5).fill().map( (addr, idx) => internalBip32ExtendedXpub.derive(idx));

export function getAddressAt(xpub, addressIndex, isChange = false) {
  //console.log(xpub, addressIndex, isChange);
  const addressType = isChange ? 1 : 0;
  return new Promise((resolve) => {
    setTimeout(() => { resolve({
      path: `m/44'/0'/0'/${addressType}/${addressIndex}`,
      address: deriveAddressFromAccount(xpub, addressType, addressIndex) });
    }, 50);
  });
}



