import React from 'react';
import PropTypes from 'prop-types';

// Since this component is simple and static, there's no parent container for it.
const PathAndAddress = ({path, address}) => {
  return (
    <tr>
      <td>{path}</td>
      <td>{address}</td>
    </tr>
  );
};

PathAndAddress.propTypes = {
  path: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
};

export default PathAndAddress;
