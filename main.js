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

//VARIABLES
let ENTRY_LIST = [];

//FUNCTIONS FOR TOGGLE
function active( element ){
    element.classList.add("active");
}

function show( element ) {
    element.classList.remove("hide");
}

function hide(elementsArray){
    elementsArray.forEach( element => {
            element.classList.add("hide");
        });
}

function inactive(elementsArray){
    elementsArray.forEach( element => {
        element.classList.remove("active");
    });
}
//EVENT LISTENERS FOR TOGGLE
expenseBtn.addEventListener('click', function(){
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
    show(expenseEl);
    hide([incomeEl, allEl]);
});
incomeBtn.addEventListener('click', function(){
    active(incomeBtn);
    inactive([expenseBtn, allBtn]);
    show(incomeEl);
    hide([expenseEl, allEl]);
});
allBtn.addEventListener('click', function(){
    active(allBtn);
    inactive([expenseBtn, incomeBtn]);
    show(allEl);
    hide([expenseEl, incomeEl]);
});