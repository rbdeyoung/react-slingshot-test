import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Bip44Demo from './RichTestPage';
import BitcoinJSHowToPage from './BitcoinJSHowToPage';
import FuelSavings from './FuelSavingsPage';

const HomePage = () => {
    return (
      <div>
        <h1>HomePage</h1>
        <p>Just a sandbox for Rich</p>
        <p><div className="row">
          <div className="col-md-3"><b><NavLink to="/bip44-demo">BIP44 Account Generator:</NavLink></b></div>
          <div className="col-md-9">Utilizes Redux Sagas with mocked async calls to generate BIP44 Bitcoin accounts and derive external addresses</div>
        </div>
        </p>
        <p><div className="row">
          <div className="col-md-3"><b><NavLink exact to="bip44-howto">BIP 44 HowTo</NavLink></b></div>
          <div className="col-md-9">Just a simple code memo on BIP44</div>
        </div>
        </p>
        <p><div className="row">
          <div className="col-md-3"><b><NavLink to="fuel-savings">Fuel Savings Calculator</NavLink></b></div>
          <div className="col-md-9">Cory House's original raw Redux demo</div>
        </div>
        </p>
        <Switch>
          <Route exact path="/bip44-demo" component={Bip44Demo} />
          <Route exact path="/bip44-howto" component={BitcoinJSHowToPage} />
          <Route exact path="/fuel-savings" component={FuelSavings} />
        </Switch>
      </div>
    );
};

export default HomePage;

