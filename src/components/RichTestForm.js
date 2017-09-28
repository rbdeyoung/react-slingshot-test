import React from 'react';
import PropTypes from 'prop-types';

class RichTestForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.richTestKeypress = this.richTestKeypress.bind(this);
  }

  richTestKeypress(e) {
    const { name, value } = e.target;
    console.info('RichTestForm richTestKeyPress', this.props.richTest, name, value);
    this.props.handleRichTestFormInputUpdate(this.props.richTest, name, value);
  }

  save() {
    this.props.saveRichTest();
  }

  render() {
    console.info('RichTestForm render');
    const {richTest} = this.props;

    return (
      <div>
        <h2>Rich Test Form</h2>
        <table>
          <tbody>
          <tr>
            <td><label htmlFor="richTestInput">Rich Test Input</label></td>
            <td><input className="small" type="text" onChange={this.richTestKeypress} name="richTestInputValue" value={richTest.richTestInputValue} placeholder="Rich Test Input"/>
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
          </tbody>
        </table>
        <hr/>
        <input type="submit" value="Save" onClick={this.save}/>
        <input type="submit" value="Get Price" onClick={this.getPrice} />
      </div>
    );
  }
}
const { func, shape, string} = PropTypes;

RichTestForm.propTypes = {
  saveRichTest: func.isRequired,
  handleRichTestFormInputUpdate: func.isRequired,
  richTest: shape({
    richTestInputValue: string,
  }).isRequired
};

export default RichTestForm;
