import React from 'react';
import PropTypes from 'prop-types';
import PathAndAddressTable from './PathAndAddressTable';
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

  generateNewAccountWithSagas() {
    this.props.generateNewAccountWithSagas(this.props.richTest);
  }

  generateNewAddressWithSagas() {
    this.props.generateNewAddressWithSagas(this.props.richTest.xpub, this.props.richTest.externalAddresses.length);
  }

  render() {
    const { richTest } = this.props;

    return (
      <div>
        <h2>Bitcoin BIP44 Account 1 Generator</h2>
        <table className="table wallet-address-table">
          <tbody>
          <tr>
            <td>Mnemonic</td>
            <td>{richTest.mnemonic}</td>
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
        <PathAndAddressTable addresses={richTest.externalAddresses} />
        <input type="submit" value="New Address" disabled={!(richTest.mnemonic && richTest.xpub)} onClick={this.generateNewAddressWithSagas}/>

        <hr/>
      </div>
    );
  }
}

const { func, shape, string } = PropTypes;

RichTestForm.propTypes = {
  generateNewAddressWithSagas: func.isRequired,
  generateNewAccountWithSagas: func.isRequired,
  richTest: shape({
    mnemonic: string,
    xpub: string,
    externalAddresses: PropTypes.array,
    internalAddresses: PropTypes.array,
  }).isRequired
};

export default RichTestForm;
