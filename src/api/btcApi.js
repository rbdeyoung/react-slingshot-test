import btc from 'bitcoinjs-lib';
import bip39 from 'bip39';

function deriveAddressFromPath(root, addressType, addressIndex){
  const path = `m/44'/0'/0'/${addressType}/${addressIndex}`;
  return root.derivePath(path).getAddress();
}
export function generateBtcAccount() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mnemonic = bip39.generateMnemonic(256);
      const seedRoot = getRootFromMnemonic(mnemonic);
      const extendedPublicKey = seedRoot.neutered().toBase58();
      const extendedPrivateKey = seedRoot.toBase58();

      resolve({
        mnemonic,
        extendedPublicKey,
        extendedPrivateKey,
        addresses: []
      });
    }, 1000);
  });
}

export function getRootFromMnemonic(mnemonic) {
  return btc.HDNode.fromSeedBuffer(bip39.mnemonicToSeed(mnemonic));
}

export function getAddressAt(root, addressType, addressIndex) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const path = `m/44'/0'/0'/${addressType}/${addressIndex}`;
      resolve({ path, address: deriveAddressFromPath(root, addressType, addressIndex) });
    }, 1000);
  });
}



