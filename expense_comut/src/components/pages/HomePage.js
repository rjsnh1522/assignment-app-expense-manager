import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import DashboardPage from './DashboardPage';



class HomePage  extends Component{

    render(){
      const {isAuthenticated,logout} = this.props;
      return(
      <div>
        <h1> Home Page</h1>
      {isAuthenticated ? <button onClick={()=>logout()}>Logout</button> : <p><Link to="/login">Login</Link> <Link to="/register">Register</Link> </p>}
      <div className="dashBoardData">
          {isAuthenticated && <DashboardPage />}
      </div>

      </div>
      )
    }

}



HomePage.propTypes = {
  isAuthenticated:PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    isAuthenticated: !!state.user.token
  }
}
export default connect(mapStateToProps,{logout})(HomePage);
