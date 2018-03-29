import api from "../api";
import {ALL_TRANSACTIONS,} from "../types";


export const expenseIncomeData = (data) => (dispatch) =>
  api.user.addExpenseIncome(data).then(user => {
    console.log(user)
  })

export const allTransactionData = (transactions) =>({
    type: ALL_TRANSACTIONS,
    transactions
  })


export const getAllTransactions = () => (dispatch) =>
  api.user.getAllTransactions().then(transactions => {
      console.log('dispatch',transactions)
      dispatch(allTransactionData(transactions.transactions));
  })

export const deleteTransaction = (transaction_id) => (dispatch) =>{
  console.log(transaction_id)
  api.user.deleteTransaction(transaction_id).then(data => {
    
  });
}
