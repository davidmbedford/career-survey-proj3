import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="result">
      <p>You should pursue <strong>{props.quizResult}</strong>!</p>
      <p>You can find more info <strong>here</strong>.</p>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;