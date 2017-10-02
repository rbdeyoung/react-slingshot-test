import React from 'react';
import PropTypes from 'prop-types';
import PathAndAddress from './RichTestBtcPathAndAddress';

class RichTestForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.richTestKeypress = this.richTestKeypress.bind(this);
    this.generateNewAccount = this.generateNewAccount.bind(this);
    this.getNextAddress = this.getNextAddress.bind(this);

    this.generateNewAccountWithSagas = this.generateNewAccountWithSagas.bind(this);
    this.generateNewAddressWithSagas = this.generateNewAddressWithSagas.bind(this);
  }

  richTestKeypress(e) {
    const { name, value } = e.target;
    this.props.handleRichTestFormInputUpdate(this.props.richTest, name, value);
  }

  save() {
    this.props.saveRichTest();
  }

  generateNewAccount() {
    this.props.generateBtcAddress(this.props.richTest);
  }

  getNextAddress() {
    this.props.getNextAddress(this.props.richTest.mnemonic, this.props.richTest.addresses.length);
  }

  generateNewAccountWithSagas() {
    console.info('generateNewAccountWithSsgas');
    this.props.generateNewAccountWithSagas(this.props.richTest);
  }

  generateNewAddressWithSagas() {
    this.props.generateNewAddressWithSagas(this.props.richTest.mnemonic, this.props.richTest.addresses.length);
  }

  render() {
    const { richTest } = this.props;

    return (
      <div>
        <h2>Rich Test Form</h2>
        <table>
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
            <td>{richTest.mnemonic}</td>
          </tr>
          <tr>
            <td>Extended Public Key</td>
            <td>{richTest.extendedPublicKey}</td>
          </tr>
          <tr>
            <td>Extended Private Key</td>
            <td>{richTest.extendedPrivateKey}</td>
          </tr>
          </tbody>
        </table>
        <table className="rich-test-table">
          <tbody>

          <tr>
            <th>Path</th>
            <th>Address</th>
          </tr>
          {
            richTest.addresses && richTest.addresses.length > 0 ?
              richTest.addresses.map((pa, i) => {
                return <PathAndAddress key={i} path={pa.path} address={pa.address}/>;
              })
              : <tr><td>
                  <input type="submit" value="Generate New Account With Thunks" onClick={this.generateNewAccount}/>
                  <input type="submit" value="Generate New Account With Sagas" onClick={this.generateNewAccountWithSagas}/>
                </td></tr>
          }
          <tr>
            <td>&nbsp;</td>
            <td>
              <input type="submit" value="New Address With Thunks" onClick={this.getNextAddress}/>
              <input type="submit" value="New Address With Sagas" onClick={this.generateNewAddressWithSagas}/>
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
  saveRichTest: func.isRequired,
  handleRichTestFormInputUpdate: func.isRequired,
  generateBtcAddress: func.isRequired,
  getNextAddress: func.isRequired,
  richTest: shape({
    richTestInputValue: string,
    address: string,
  }).isRequired
};

export default RichTestForm;
