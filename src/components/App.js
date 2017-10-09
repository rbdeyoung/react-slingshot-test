/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import RichTestPage from '../containers/RichTestPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import BitcoinJSHowToPage from '../containers/BitcoinJSHowToPage';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: '#fff', 'backgroundColor': '#080808' };
    return (
      <div className="container">
        <div>
          <nav className="navbar navbar-inverse navbar-default">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="#">React Bitcoin Toolbox</a>
              </div>
              <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                  <li><NavLink exact to="/bip44howto" activeStyle={activeStyle}>Bip 44 Howto</NavLink></li>
                  <li><NavLink to="/about" activeStyle={activeStyle}>About</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={RichTestPage} />
          <Route exact path="/bip44howto" component={BitcoinJSHowToPage} />
          {/*<Route path="/fuel-savings" component={FuelSavingsPage} />*/}
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
