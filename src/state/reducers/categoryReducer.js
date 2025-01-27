// reducers/categoryReducer.js
import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    UPDATE_CATEGORY,
    SET_CATEGORIES,
  } from '../actions/categoryActions';
  
  const initialState = {
    categories: [],
  };
  
  export const darkenColor = (color, percent) => {
    const num = parseInt(color, 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = (num & 0x0000ff) + amt,
      B = ((num >> 8) & 0x00ff) + amt;
  
    return (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)
      .toUpperCase();
  };
  
  export const calculateSpending = (transactions, categoryId) => {
    const currentMonth = new Date().getMonth();
    return transactions
      .filter(
        (transaction) =>
          transaction.categoryID === categoryId &&
          new Date(transaction.date).getMonth() === currentMonth
      )
      .reduce((sum, transaction) => sum + parseFloat(transaction.value), 0);
  };
  
  const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CATEGORY:
        return {
          ...state,
          categories: [...state.categories, action.payload],
        };
      case DELETE_CATEGORY:
        return {
          ...state,
          categories: state.categories.filter(
            (category) => category.id !== action.payload
          ),
        };
      case UPDATE_CATEGORY:
        return {
          ...state,
          categories: state.categories.map((category) =>
            category.id === action.payload.id
              ? { ...category, ...action.payload }
              : category
          ),
        };
      case SET_CATEGORIES:
        return {
          ...state,
          categories: action.payload,
        };
      default:
        return state;
    }
  };
  export const calculateTotalExpenseBudget = (categories) => {
    return categories
      .filter((category) => category.type === 'expense')
      .reduce((total, category) => total + parseFloat(category.budget), 0);
  };
  
  export const calculateCategoryPercentage = (categories, categoryBudget) => {
    const totalExpenseBudget = calculateTotalExpenseBudget(categories);
    if (totalExpenseBudget === 0) return 0;
    return (categoryBudget / totalExpenseBudget) * 100;
  };
  
  
  export default categoryReducer;
  