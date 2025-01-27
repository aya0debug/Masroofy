// actions/transactionActions.js
import { v4 as uuidv4 } from 'uuid';

// Action Types
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION';

// Action Creators
export const addTransaction = (transaction) => ({
  type: ADD_TRANSACTION,
  payload: {
    ...transaction,
    id: uuidv4(),
    date: new Date().toISOString(),
  },
});

export const deleteTransaction = (id) => ({
  type: DELETE_TRANSACTION,
  payload: id,
});

export const updateTransaction = (id, updatedTransaction) => ({
  type: UPDATE_TRANSACTION,
  payload: {
    id,
    ...updatedTransaction,
  },
});
