import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions';
import Button from '../components/Button';

const mapStateToProps = ({ running }) => ({
  running,
  children: running ? 'Stop' : 'Start',
  primary: true,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mergeProps = ({ running, ...props }, { start, stop }) => ({
  ...props,
  onClick: running ? stop : start,
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
