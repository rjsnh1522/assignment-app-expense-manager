import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getAllTransactions } from '../../actions/manager';
import {Bar,Line,Pie} from 'react-chartjs-2';


class ChartData  extends Component{

  state = {
    loading: true,
    transactionData:[],
    dataSet: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [1022, 18459, 8743, 74585, 24125, 3745],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  }

  componentDidMount = () => {
    this.props.getAllTransactions()
  }





    render(){
      const {transactions} = this.props;
      const {store} = this.props;
      console.log(transactions)
      return(
      <div>
        <div className="">
          <Bar
          	data={this.state.dataSet}
          	width={100}
            height={500}
          	options={{
          		maintainAspectRatio: false
          	}}
          />

        </div>
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



export default connect(mapStateToProps,{getAllTransactions})(ChartData);
