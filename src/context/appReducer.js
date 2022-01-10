import { ACTION_TYPE } from "../utils/contants";

const { ADD_TRANSACTION, DELETE_TRANSACTION } = ACTION_TYPE
export default (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transaction: [action.payload, ...state.transaction]
      }
    case DELETE_TRANSACTION:
      return {
        ...state,
        transaction: state.transaction.filter(item => item.id !== action.payload)
      }
    default:
      return state;
  }
}