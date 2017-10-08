import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import * as actions from '../actions/richTestActions';
import * as sagaActions from '../actions/richTestSagaActions';
import RichTestForm from '../components/RichTestForm';

export const RichTestPage = (props) => {
  return (
    <RichTestForm
      // saveRichTest={props.actions.saveRichTest}
      richTest={props.richTest}
      // handleRichTestFormInputUpdate={props.actions.handleRichTestFormInputUpdate}
      // generateBtcAddress={props.actions.generateBtcAddress}
      // getNextAddress={props.actions.addNewAddress}
      generateNewAccountWithSagas={props.sagaActions.generateNewAccount}
      generateNewAddressWithSagas={props.sagaActions.generateNewAddress} />
  );
};

RichTestPage.propTypes = {
  actions: PropTypes.object.isRequired,
  sagaActions: PropTypes.object.isRequired,
  richTest: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    richTest : state.richTest
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sagaActions: bindActionCreators(sagaActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RichTestPage);
