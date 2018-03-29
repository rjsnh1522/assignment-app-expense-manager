import React, { Component } from 'react';
import RegisterForm from '../forms/RegisterForm';
import PropTypes from 'prop-types';
import { registerAuth } from '../../actions/auth';
import {connect} from 'react-redux'



class RegisterPage  extends Component{

  register = (data) =>
    this.props.registerAuth(data).then(
      () => this.props.history.push("/login")
    );



    render(){

      return(
      <div>
          <RegisterForm register={this.register}/>
      </div>
      )
    }

}

RegisterPage.propTypes = {
  history: PropTypes.shape({
    push:PropTypes.func.isRequired
  }).isRequired,
  registerAuth: PropTypes.func.isRequired
};



export default connect(null,{registerAuth})(RegisterPage);
