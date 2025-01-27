import { calculateCategoryBudget, calculateTotalExpenses, calculateTotalIncome, getCurrentMonth, getCurrentYear, getLastMonth, getLastYear, SET_OVERVIEWS } from '../actions/overviewActions';

const initialState = {
  overviews: [
    {title: "Total Income", value: 0, totale: 0, date: {year: 2025, month: 1}, base: "437AFA", color: "2F22DA", icon: "Bag.svg"},
    {title: "Total Expenses", value: 0, totale: 0, date: {year: 2025, month: 1}, base: "437AFA", color: "2F22DA", icon: "Bag.svg"},
    {title: "Savings Goal", value: 0, totale: 0, date: {year: 2025, month: 1}, base: "437AFA", color: "2F22DA", icon: "bag.svg"},
    {title: "Remaining Budget", value: 0, totale: 0, date: {year: 2025, month: 1}, base: "437AFA", color: "2F22DA", icon: "Bag.svg"},
  ]
};

const overviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OVERVIEWS:
      const { transactions, categories } = action.payload;

      const currentYear = getCurrentYear();
      const currentMonth = getCurrentMonth();

      const lastYear = getLastYear();
      const lastMonth = getLastMonth();

      const totalIncomeCurrent = calculateTotalIncome(transactions, currentYear, currentMonth);
      const totalIncomeLast = calculateTotalIncome(transactions, lastYear, lastMonth);
      const totalExpensesCurrent = calculateTotalExpenses(transactions, currentYear, currentMonth);
      const totalExpensesLast = calculateTotalExpenses(transactions, lastYear, lastMonth);
      const savingsGoalCurrent = totalIncomeCurrent;
      const savingsGoalTotale = calculateCategoryBudget(categories, 'income');
      const remainingBudgetCurrent = totalExpensesCurrent;
      const remainingBudgetTotale = calculateCategoryBudget(categories, 'expense');

      return {
        ...state,
        overviews: [
          {title: "Total Income", value: totalIncomeCurrent, totale: totalIncomeLast, date: {year: currentYear, month: currentMonth}, base: "437AFA", color: "2F22DA", icon: "Bag.svg"},
          {title: "Total Expenses", value: totalExpensesCurrent, totale: totalExpensesLast, date: {year: currentYear, month: currentMonth}, base: "437AFA", color: "2F22DA", icon: "Bag.svg"},
          {title: "Savings Goal", value: savingsGoalCurrent, totale: savingsGoalTotale, date: {year: currentYear, month: currentMonth}, base: "437AFA", color: "2F22DA", icon: "Bag.svg"},
          {title: "Remaining Budget", value: remainingBudgetCurrent, totale: remainingBudgetTotale, date: {year: currentYear, month: currentMonth}, base: "437AFA", color: "2F22DA", icon: "Bag.svg"},
        ]
      };
    default:
      return state;
  }
};

export default overviewReducer;
