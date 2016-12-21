import React, { PropTypes } from 'react';

import formatTime from '../utils/formatTime';

const Time = ({ time = 0 }) => (
  <h1>
    {formatTime(time)}
  </h1>
);

Time.propTypes = {
  time: PropTypes.number,
};

export default Time;
