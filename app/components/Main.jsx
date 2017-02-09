var React = require('react');
var Nav = require('./Nav.jsx');

var Main = (props) => {
  return (
    <div>
      <div>
        <Nav/>
        <div className="row">
          {props.children}
        </div>
      </div>
    </div>
  )
};

module.exports = Main;
