import React, { Component } from 'react';
import { getAllTransactions,deleteTransaction } from '../../actions/manager';
import {connect} from 'react-redux';
import '../../style.css'
import {Link} from 'react-router-dom';




class ExpenseData  extends Component{

  state = {
    loading: true,
    transactionData:[]
  }

  componentDidMount = () => {
    this.props.getAllTransactions()
  }

  deleteThisTransaction = (id_link) => {
    console.log('delete this ',id_link)
    this.props.deleteTransaction(id_link)
  }

    render(){
      const {loading} = this.state;
      const {transactions} = this.props
      return(
      <div>
        <table className="ui sortable celled table">
        <thead>
          <tr>
            <th>Id</th>
            <th>For what</th>
            <th>When</th>
            <th>Type of </th>
            <th>How Much?</th>
            <th>Why</th>
            <th>Action</th>
          </tr>
        </thead>
          <tbody>
            { transactions.map((res,id) => (<tr key={id} id={`row_id_${res.id}`}>
              <td>{res.id}</td>
              <td>{res.name}</td>
              <td>{res.on_date}</td>
              <td>{res.type_of}</td>
              <td>{res.amount}</td>
              <td>{res.note}</td>
              <td>
              <span><Link to='/'><i className="share square outline icon"></i></Link></span>
              <span><Link to='#' onClick={() => this.deleteThisTransaction(res.id)}><i className="trash alternate outline icon red"></i></Link></span>
            </td>
            </tr>)) }

          </tbody>
        </table>
      </div>
      )
    }

}
function mapStateToProps(state){
  console.log("state reducers",state.transactionReducer)
  return {
    transactions:state.transactionReducer
  }
}



export default connect(mapStateToProps,{getAllTransactions,deleteTransaction})(ExpenseData);
