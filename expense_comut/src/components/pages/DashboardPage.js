import React, { Component } from 'react';
import ExpenseData from './ExpenseData';
import ExpenseAdd from '../forms/ExpenseAdd';
import {Link} from 'react-router-dom';




class DashboardPage  extends Component{


    render(){

      return(
        <div className="ui grid">
          <div className="one column row">
            <div className="ui cards centerAddBtn">
              <div className="card">
                <div className="content">
                  <div className="header">Add New Transaction</div>
                  <div className="description">
                      <Link to='/add-expense'><i className="plus circle icon huge"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="ui cards centerAddBtn">
              <div className="card">
                <div className="content">
                  <div className="header">Chart</div>
                  <div className="description">
                      inputTypeSelect
                  </div>
                </div>
              </div>
            </div>


             <div className="sixteen wide column">
               <ExpenseData />
             </div>
           </div>
        </div>
      )
    }

}




export default DashboardPage;
