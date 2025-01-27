// actions/categoryActions.js
import { v4 as uuidv4 } from 'uuid';

// Action Types
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const SET_CATEGORIES = 'SET_CATEGORIES';

// Action Creators
export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  payload: {
    ...category,
    id: uuidv4(),
    date: new Date().toISOString(),
  },
});

export const deleteCategory = (id) => ({
  type: DELETE_CATEGORY,
  payload: id,
});

export const updateCategory = (id, updatedCategory) => ({
  type: UPDATE_CATEGORY,
  payload: {
    id,
    ...updatedCategory,
  },
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
