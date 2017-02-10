import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.formatSeconds = this.formatSeconds.bind(this);
  }

  static get defaultProps() {
    return {
      totalSeconds: 0
    }
  }

  static get propTypes() {
    return {
      totalSeconds: React.PropTypes.number
    }
  }

  formatSeconds(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);

    if(seconds < 10) {
      seconds = '0' + seconds;
    }
    if(minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  }

  render() {
    var {totalSeconds} = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
};

// Without ES6 syntax. In the code above, I have the static method that returns the defaultProps (ES6)

// Clock.defaultProps = {
//   totalSeconds: 0
// };
//
// Clock.propTypes = {
//   totalSeconds: React.PropTypes.number
// };
