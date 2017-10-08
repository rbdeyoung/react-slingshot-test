import React from 'react';
import PropTypes from 'prop-types';
import PathAndAddress from './RichTestBtcPathAndAddress';

class RichTestForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    // this.save = this.save.bind(this);
    // this.richTestKeypress = this.richTestKeypress.bind(this);
    // this.generateNewAccount = this.generateNewAccount.bind(this);
    // this.getNextAddress = this.getNextAddress.bind(this);

    this.generateNewAccountWithSagas = this.generateNewAccountWithSagas.bind(this);
    this.generateNewAddressWithSagas = this.generateNewAddressWithSagas.bind(this);

    // this.testBitcoinJs = this.testBitcoinJs.bind(this);
  }

  // richTestKeypress(e) {
  //   const { name, value } = e.target;
  //   this.props.handleRichTestFormInputUpdate(this.props.richTest, name, value);
  // }

  // save() {
  //   this.props.saveRichTest();
  // }

  // generateNewAccount() {
  //   this.props.generateBtcAddress(this.props.richTest);
  // }

  // getNextAddress() {
  //   this.props.getNextAddress(this.props.richTest.mnemonic, this.props.richTest.addresses.length);
  // }

  generateNewAccountWithSagas() {
    this.props.generateNewAccountWithSagas(this.props.richTest);
  }

  generateNewAddressWithSagas() {
    this.props.generateNewAddressWithSagas(this.props.richTest.xpub, this.props.richTest.externalAddresses.length);
  }

  // testBitcoinJs() {
  //   var _TestMnemonic =  'maple acquire need weather sleep patient domain oak dust real weird dizzy column any goose curious flee drink retire imitate antenna idea couple attitude';
  //   var _TestSeed = bip39.mnemonicToSeed(_TestMnemonic);
  //   console.log(`BIP39 Seed: ${_TestSeed.toString('hex')}`);
  //   var _TestHDNode = btc.HDNode.fromSeedBuffer(_TestSeed);
  //   console.log(`BIP32 Root Key: ${_TestHDNode.toBase58()}`);
  //   var _AccountHDNode = _TestHDNode.deriveHardened(44).deriveHardened(0).deriveHardened(0);
  //   var Bip32ExtendedPrivate = _AccountHDNode.derive(0);
  //   console.log(`Bip32 Extended Private Key: ${Bip32ExtendedPrivate.toBase58()}`);
  //   console.log(`Bip32 Extended Public Key: ${Bip32ExtendedPrivate.neutered().toBase58()}`);
  //   console.log(`Account extended private key: ${_AccountHDNode.toBase58()}`);
  //   var _AccountHDNodeXPub = _AccountHDNode.neutered();
  //   console.log(`Account extended public key: ${_AccountHDNodeXPub.toBase58()}`);
  //   console.log(btc.HDNode.fromBase58(_AccountHDNodeXPub.toBase58()).toBase58());
  //   for(var i = 0; i < 5; i++){
  //     console.log(`Address ${i}: ${_AccountHDNodeXPub.derive(0).derive(i).getAddress()}`);
  //   }
  // }

  render() {
    const { richTest } = this.props;

    return (
      <div>
        <h2>Rich Test Form</h2>
        <table className="table wallet-address-table">
          <tbody>
          {/*<tr>*/}
          {/*<td><label htmlFor="richTestInput">Memo</label></td>*/}
          {/*<td><input className="small" type="text" onChange={this.richTestKeypress} name="richTestInputValue"*/}
          {/*value={richTest.richTestInputValue} placeholder="Rich Test Input"/>*/}
          {/*</td>*/}
          {/*</tr>*/}
          {/*<tr>*/}
          {/*<td><label>Date Modified</label></td>*/}
          {/*<td>{richTest.dateModified}</td>*/}
          {/*</tr>*/}
          <tr>
            <td>Mnemonic</td>
            <td className="breakable">{richTest.mnemonic}</td>
          </tr>
          <tr>
            <td>Extended Public Key</td>
            <td className="breakable">{richTest.xpub}</td>
          </tr>
           { !richTest.mnemonic && !richTest.xpub &&
                <tr><td>
                  {/*<input type="submit" value="Generate New Account With Thunks" onClick={this.generateNewAccount}/>*/}
                  <input type="submit" value="Generate New Account" onClick={this.generateNewAccountWithSagas}/>
                </td></tr>
           }
          </tbody>
        </table>
        <table className="table">
          <tbody>

          <tr>
            <th>Path</th>
            <th>Address</th>
          </tr>
          {
              richTest.externalAddresses.map((pa, i) => {
                return <PathAndAddress key={i} path={pa.path} address={pa.address}/>;
              })
          }
          <tr>
            <td>&nbsp;</td>
            <td>
              {/*<input type="submit" value="New Address With Thunks" onClick={this.getNextAddress}/>*/}
              <input type="submit" value="New Address" disabled={!(richTest.mnemonic && richTest.xpub)} onClick={this.generateNewAddressWithSagas}/>
              {/*<input type="submit" value="Test bitcoinJS" onClick={this.testBitcoinJs}/>*/}
            </td>
          </tr>
          </tbody>
        </table>
        <hr/>
      </div>
    );
  }
}

const { func, shape, string } = PropTypes;

RichTestForm.propTypes = {
  // saveRichTest: func.isRequired,
  // handleRichTestFormInputUpdate: func.isRequired,
  // generateBtcAddress: func.isRequired,
  generateNewAddressWithSagas: func.isRequired,
  generateNewAccountWithSagas: func.isRequired,
  // getNextAddress: func.isRequired,
  richTest: shape({
    richTestInputValue: string,
    address: string,
  }).isRequired
};

export default RichTestForm;
