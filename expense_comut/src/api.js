import axios from "axios"
const url = `http://localhost:4000`;



export default {
  user:{
    login:(credentials) =>
      axios.post(url+"/users/sign_in",{credentials}).then(res => res.data.user),
    registerApi:(registerData)=>
      axios.post(url+'/users',{registerData}).then(res => res.data.user),
    addExpenseIncome:(transactionData) =>
      axios.post(url+'/transactions',{transactionData}).then(res => res.data.data),
    getAllTransactions:() =>
      axios.get(url+'/transactions',{}).then(res => res.data.data),
    deleteTransaction:(transaction_id)=>
      axios.delete(url+`/transactions/${transaction_id}`,{}).then(res => res.data.data)
  }
};
