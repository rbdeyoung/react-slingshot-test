import React from 'react';

class BitcoinJSHowToPage extends React.Component {
    constructor(props, context) {
      super(props, context);
    }

    render() {
        return (
          <div>
            <h1>BitcoinJS BIP44 HowTo</h1>
            <div><pre>{` testBitcoinJs(){

   var _TestMnemonic =  'maple acquire need weather sleep patient domain oak dust real weird dizzy column any goose curious flee drink retire imitate antenna idea couple attitude';

   var _TestSeed = bip39.mnemonicToSeed(_TestMnemonic);
   console.log(\`BIP39 Seed: $\{_TestSeed.toString('hex')}\`);

   var _TestHDNode = btc.HDNode.fromSeedBuffer(_TestSeed);
   console.log(\`BIP32 Root Key: $\{_TestHDNode.toBase58()}\`);

   var _AccountHDNode = _TestHDNode.deriveHardened(44).deriveHardened(0).deriveHardened(0);
   var Bip32ExtendedPrivate = _AccountHDNode.derive(0);
   console.log(\`Bip32 Extended Private Key: $\{Bip32ExtendedPrivate.toBase58()}\`);
   console.log(\`Bip32 Extended Public Key: $\{Bip32ExtendedPrivate.neutered().toBase58()}\`);
   console.log(\`Account extended private key: $\{_AccountHDNode.toBase58()}\`);

   var _AccountHDNodeXPub = _AccountHDNode.neutered();
   console.log(\`Account extended public key: $\{_AccountHDNodeXPub.toBase58()}\`);

   for(var i = 0; i< 5; i++){
     console.log(\`Address $\{i}: $\{_AccountHDNodeXPub.derive(0).derive(i).getAddress()}\`);
   }
 }`}</pre><pre style={{backgroundColor: "black", color: "chartreuse"}}>
  {` BIP39 Seed: 2f1c2aa72b5eb37192223da088f0f9a4eb692a7472cad320587e3e38fd7aa4b8235d87c6dbd97ae5c60187eccdb217ade2ee5996b39cef8a7c0a680877bb22b2

 BIP32 Root Key: xprv9s21ZrQH143K4JZ6BnCpjM4HBkFvpHsy6WQhTRWV4xVo4UipbEed8vFHPDPrXutxkQrvzzbLfk7w75sTgnfTDUvQ39QbwxsYPcQ8XSTNo5d

 Bip32 Extended Private Key: xprv9zZNbU5ye32cDYL6DYPM3JACy3wL1RrKfocXRtMncgMDwo5XtF6LdpFkcRewPPYBsFSdGwwbH5PeBRibpxpYoREKVto5Ab8TjvAjodPMZhY
 Bip32 Extended Public Key: xpub6DYizycsUQauS2QZKZvMQS6wX5mpQtaB32Y8EGmQB1tCpbQgRnQbBcaETiH1SkDBrSNqULmqEwEXNJKxnEgjkNvY7pQcTsqSqQNAAdjm2Mq

 Account extended private key: xprv9yh3LySXtSUa84SiG35Uqy6QAEiiT8a8w5tcyf8BK3wdfuiCn7rD9zzQyemhnFBybooeXH5qMXk6GvdpmhKkbgGuYbqhwn9qqJEPuAKzcwt
 Account extended public key: xpub6CgPkUyRip2sLYXBN4cVD738iGZCrbHzJJpDn3XnsPUcYi3MKfAThoJtpxPn9UjNZD6wb1KSJVvyDuGNdsUv1E9VHUwp6yJhtp25XuyLRyB

 Address 0: 1HGArs3D1wnf3p56WquroaA5stJ1Ne44LV
 Address 1: 12hSgVVVz7CAmQwZG6oKNydLqMeGbThhdu
 Address 2: 1E19tfgu6rGP7QPHZRhSohntbmo8r42kgA
 Address 3: 1NwDGRwiRbDcwk9FgUxvdxBovJvqt47pc5
 Address 4: 1Fd1jxfprJuww6ZEfXY9RH1LaqVJxcWoSB`}
           </pre></div>
              {/*{getCodeString()}*/}
          </div>
        );
    }
}

export default BitcoinJSHowToPage;

