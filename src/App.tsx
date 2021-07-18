import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeLayout from './Layouts/HomeLayout';
import DashboardLayout from './Layouts/DashboardLayout';
import { connect } from 'react-redux'
import { InitialAuthStateModel } from './Redux/Model';
function App(props: any) {
  return (
    <Router>
      <Switch>
        {!props.otp && <Route path="/" render={(rp) => <HomeLayout {...rp} {...props} />} />}
        {props.otp && <Route path="/" render={(rp) => <DashboardLayout {...rp} {...props} />} />}
      </Switch>
    </Router>
  );
}
const mapStateToProps = (state: InitialAuthStateModel) => {
  console.log('app', state);
  return {
    isAuthenticated: state.isAuthenticated,
    isExpired: state.isExpired,
    user: state.user
  };
};
export default connect(mapStateToProps)(App);
