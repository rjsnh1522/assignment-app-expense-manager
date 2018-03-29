import {ALL_TRANSACTIONS} from "../types";


export default function transactionReducer(state=[],action={}){
  switch(action.type){
    case ALL_TRANSACTIONS:
    return action.transactions;
    default:return state;
  }
}
