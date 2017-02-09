var React = require('react');
var {Link, IndexLink} = require('react-router');

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">ReactTimer</li>
          <li>
            <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
          </li>
          <li>
            <Link to='/countdown' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
        <li className="menu-text">
          Created by <a href='https://google.com' target="_blank">Nishant Salhotra</a>
        </li>
      </ul>
      </div>
    </div>
    );
  }
}

module.exports = Nav;
