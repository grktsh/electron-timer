import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions';
import Button from '../components/Button';

const mapStateToProps = state => ({
  children: 'Reset',
  disabled: state.running || state.offset === 0,
  accent: true,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mergeProps = (stateProps, { reset }) => ({
  ...stateProps,
  onClick: reset,
});

export {
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Button);
