// SELECTING ELEMENTS//
//BUDGET DISPLAY ELEMENTS --------
const balanceEl = document.querySelector(".balance .value");
const incomeTotalEl = document.querySelector(".outcome-total");
const outcomeTotalEl = document.querySelector(".income-total");
//BUDGET DASHBOARD ELEMENTS -------
//dashboard buttons
const expenseBtn = document.querySelector(".tab1");
const incomeBtn = document.querySelector(".tab2");
const allBtn = document.querySelector(".tab3");
//selects div wraps for lists
const expenseEl = document.querySelector("#expense");
const incomeEl = document.querySelector("#income");
const allEl = document.querySelector("#all");
//selects lists themselves
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#expense .list");
const allList = document.querySelector("#all .list");
//selects inputs
//income
const addIncome = document.querySelector(".add-income");
const incomeTitle = document.getElementById("income-title-input");
const incomeAmount = document.getElementById("income-amount-input");
//expense
const addExpense= document.querySelector(".add-expense");
const expenseTitle = document.getElementById("expense-title-input");
const expenseAmount = document.getElementById("expense-amount-input");
