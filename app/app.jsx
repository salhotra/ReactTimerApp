var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main.jsx');
var Timer = require('./components/Timer.jsx');
var Countdown = require('./components/Countdown.jsx');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!./styles/app.scss');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <Route path='/countdown' component={Countdown}></Route>
        <IndexRoute component={Timer}></IndexRoute>
      </Route>
    </Router>,
    document.getElementById('app')
  );
