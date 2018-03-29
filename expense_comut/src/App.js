import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import ChartData from './components/pages/ChartData';

import PropTypes from 'prop-types';
import ExpenseAdd from './components/forms/ExpenseAdd';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';


class App extends Component {
  render() {
    const {location} = this.props;
    return (
      <div className="ui container">
        <Route location={location} path='/' exact component={HomePage} />
        <GuestRoute location={location} path='/login' exact component={LoginPage} />
        <GuestRoute location={location} path='/register' exact component={RegisterPage} />
        <UserRoute location={location} path='/add-expense' exact component={ExpenseAdd} />
        <UserRoute location={location} path='/view-chart' exact component={ChartData} />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
};


export default App;
