import { connect } from 'react-redux';

import Time from '../components/Time';

const mapStateToProps = state => ({
  time: state.time,
});

export {
  mapStateToProps,
};

export default connect(
  mapStateToProps,
)(Time);
