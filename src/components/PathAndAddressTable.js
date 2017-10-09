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
const { shape, string, arrayOf } = PropTypes;
const pathAndAddressItem = shape({ mnemonic: string, xpub: string });
PathAndAddressTable.propTypes = {
    addresses: arrayOf(pathAndAddressItem).required
};

export default PathAndAddressTable;
