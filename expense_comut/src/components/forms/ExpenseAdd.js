import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {Link} from 'react-router-dom';
import {Form , Button,Message,Grid } from 'semantic-ui-react'
import Validator from 'validator';
import InLineError from '../messages/InlineError';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { expenseIncomeData } from '../../actions/manager';
import '../../style.css';





class ExpenseAdd  extends Component{


  state = {
    data :{
      name:'',
      amount:'',
      type_of:'',
      on_date:moment(),
      note:''
    },
    loading:false,
    errors:{}
  }


    onChange = (e) => this.setState({ data: {...this.state.data,[e.target.name]:e.target.value}
    });


    submitExpenseIncome = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0){
          this.setState({loading:true});
          this.props.expenseIncomeData(this.state.data).then(() => this.props.history.push("/")).catch(err => this.setState({errors:err.response.data.data,loading:false}));
        }
    }


    validate = (data) => {
      const errors = {};


      if(!data.name) errors.name = "Please fill for what you spend";
      if(!data.amount) errors.amount = "Please fill how you spend or earn";
      if(!data.type_of) errors.type_of = "Please fill its an expense or income";
      if(!data.on_date) errors.on_date = "Please fill the date";
      if(!data.note) errors.note = "Please write a note to remember";
      if(data.amount.length >=7) errors.amount = "Your earning/expense is in 7 digits on days ,you dont need to manage your expenses";
      if(new Date(data.on_date) > new Date()) errors.on_date  = "You need time machine to earn/or spend on future"
      return errors;
    }

    render(){
      const {data,errors,loading} = this.state;
      return(
        <Grid centered columns={2}>
                <Grid.Row columns={2}>
                    <h3 className="noPadd"><Link to="/">Go Back</Link></h3>
                </Grid.Row>
                    <h1 className="noPadd"> Add Expense </h1>
              <Grid.Row columns={2}>
                 <Grid.Column width={6}>
                    <Form onSubmit={this.submitExpenseIncome} loading={loading}>
                      {errors.msg && <Message negative>
                        <Message.Header> Something went wrong </Message.Header>
                        <p>{errors.msg}</p>
                      </Message>}
                      <Form.Field error={!!errors.name}>
                          <label htmlFor="name"> For What ?</label>
                          <input type="text" id="name"
                            name="name"
                            placeholder="For what ?"
                            value={data.name}
                            onChange={this.onChange}/>
                            {errors.name &&  <InLineError text={errors.name} /> }
                      </Form.Field>
                        <Form.Field error={!!errors.amount}>
                            <label htmlFor="amount"> How Much? </label>
                            <input type="number" id="amount"
                              name="amount"
                              placeholder="How much ?"
                              value={data.amount}
                              onChange={this.onChange}/>
                              {errors.amount &&  <InLineError text={errors.amount} /> }
                        </Form.Field>
                        <Form.Field error={!!errors.on_date}>
                          <label htmlFor="on_date"> When ? </label>
                          <input type="date" id="on_date"
                            name="on_date"
                            placeholder="How much ?"
                            value={data.on_date}
                            onChange={this.onChange}/>
                            {errors.on_date &&  <InLineError text={errors.on_date} /> }
                        </Form.Field>
                        <Form.Field error={!!errors.type_of}>
                          <label htmlFor="type"> It was an ? </label>
                            <select name="type_of" value={data.type_of} onChange={this.onChange}>
                              <option value="">Select</option>
                              <option value="1">Expense</option>
                              <option value="2">Income</option>
                            </select>
                        </Form.Field>
                        <Form.Field error={!!errors.note}>
                            <textarea name="note"
                              placeholder="Any reason ?"
                              value={data.note}
                              onChange={this.onChange}
                              > </textarea>
                            {errors.note &&  <InLineError text={errors.note} /> }
                        </Form.Field>
                        <Button primary> Add Data</Button>
                      </Form>
                    </Grid.Column>
                </Grid.Row>
              </Grid>
      )
    }

}




export default connect(null,{expenseIncomeData})(ExpenseAdd);
