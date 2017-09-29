import React from 'react';
import PropTypes from 'prop-types';
import PathAndAddress from './RichTestBtcPathAndAddress';

class RichTestForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.richTestKeypress = this.richTestKeypress.bind(this);
    this.generateNewAddress = this.generateNewAddress.bind(this);
    this.getNextAddress = this.getNextAddress.bind(this);
  }

  richTestKeypress(e) {
    const { name, value } = e.target;
    this.props.handleRichTestFormInputUpdate(this.props.richTest, name, value);
  }

  save() {
    this.props.saveRichTest();
  }

  generateNewAddress() {
    this.props.generateBtcAddress(this.props.richTest);
  }

  getNextAddress(){
    this.props.getNextAddress(this.props.richTest.address, this.props.richTest.addresses.length);
  }

  render() {
    const { richTest } = this.props;

    return (
      <div>
        <h2>Rich Test Form</h2>
        <table>
          <tbody>
          <tr>
            <td><label htmlFor="richTestInput">Rich Test Input</label></td>
            <td><input className="small" type="text" onChange={this.richTestKeypress} name="richTestInputValue"
                       value={richTest.richTestInputValue} placeholder="Rich Test Input"/>
            </td>
          </tr>
          <tr>
            <td><label>Date Modified</label></td>
            <td>{richTest.dateModified}</td>
          </tr>
          <tr>
            <td><label>Price</label></td>
            <td>{richTest.price}</td>
          </tr>
          <tr>
            <td><input type="submit" value="GNA" onClick={this.generateNewAddress} /></td>
            <td>{richTest.address}</td>
          </tr>
          </tbody>
        </table>
        <table className="rich-test-table"><tbody>
          <tr><th>Path</th><th>Address</th></tr>
          {
            richTest.addresses.map( (pa,i) => {
              return <PathAndAddress key={i} path={pa.path} address={pa.address}/>
            } )
          }
          <tr><td></td><td> <input type="submit" value="New Address" onClick={this.getNextAddress} /></td></tr>
        </tbody></table>
        <hr/>
        <input type="submit" value="Save" onClick={this.save}/>
        <input type="submit" value="Get Price" onClick={this.getPrice}/>
      </div>
  );
  }
  }
  const {func, shape, string} = PropTypes;

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
