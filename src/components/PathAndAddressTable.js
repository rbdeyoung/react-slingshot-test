import React, { PropTypes } from 'react';
import PathAndAddress from './RichTestBtcPathAndAddress';

const PathAndAddressTable = ({addresses}) => {
    return (
      <table className="table">
        <tbody>

        <tr>
          <th>Path</th>
          <th>Address</th>
        </tr>
        {
          addresses.map((pa, i) => {
            return <PathAndAddress key={i} path={pa.path} address={pa.address}/>;
          })
        }
        </tbody>
      </table>
    );
};

PathAndAddressTable.propTypes = {
  addresses: PropTypes.array.isRequired
  //addresses: arrayOf(pathAndAddressItem).required
  //addresses: PropTypes.array.required
};

export default PathAndAddressTable;
