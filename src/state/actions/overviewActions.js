export const SET_OVERVIEWS = 'SET_OVERVIEWS';

export const setOverviews = (overviews) => ({
  type: SET_OVERVIEWS,
  payload: overviews,
});

export const getCurrentMonth = () => new Date().getMonth();
export const getCurrentYear = () => new Date().getFullYear();
export const getLastMonth = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return date.getMonth();
};
export const getLastYear = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return date.getFullYear();
};

export const calculateTotalIncome = (transactions, year, month) => {
  return transactions
    .filter(transaction => transaction.type === 'income' && transaction.date.year === year && transaction.date.month === month)
    .reduce((total, transaction) => total + parseFloat(transaction.value), 0);
};

export const calculateTotalExpenses = (transactions, year, month) => {
  return transactions
    .filter(transaction => transaction.type === 'expense' && transaction.date.year === year && transaction.date.month === month)
    .reduce((total, transaction) => total + parseFloat(transaction.value), 0);
};

export const calculateCategoryBudget = (categories, type) => {
  return categories
    .filter(category => category.type === type)
    .reduce((total, category) => total + parseFloat(category.budget), 0);
};
