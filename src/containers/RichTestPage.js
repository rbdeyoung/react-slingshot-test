import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/richTestActions';
import RichTestForm from '../components/RichTestForm';

export const RichTestPage = (props) => {
  console.log('RichTestPage render');
  return (
    <RichTestForm saveRichTest={props.actions.saveRichTest} richTest={props.richTest} handleRichTestFormInputUpdate={props.actions.handleRichTestFormInputUpdate} />
  );
};

RichTestPage.propTypes = {
  actions: PropTypes.object.isRequired,
  richTest: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    richTest : state.richTest
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RichTestPage);
