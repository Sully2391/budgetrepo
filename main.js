// SELECTING ELEMENTS//
//BUDGET DISPLAY ELEMENTS --------
const balanceEl = document.querySelector(".balance .value");
const incomeTotalEl = document.querySelector(".income-total");
const outcomeTotalEl = document.querySelector(".outcome-total");
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
let balance = 0, income = 0, outcome = 0;

const DELETE = "delete", EDIT = "edit";

//FUNCTIONS FOR TOGGLE
function active( element ){
    element.classList.add("active");
}

function show( element ) {
    element.classList.remove("hide");
}

function hide(elements){
    elements.forEach( element => {
            element.classList.add("hide");
        });
}

function inactive(elements){
    elements.forEach( element => {
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

//FUNCTIONS FOR ENTRY ADDITIONS
function updateUI(){
    income = calculateTotal("income", ENTRY_LIST);
    outcome = calculateTotal("expense", ENTRY_LIST);
    balance = Math.abs( calculateBalance(income, outcome) );

    //determine sign of balance
    let sign = (parseFloat(income) >= parseFloat(outcome) ) ? "$" : "-$";

    //updateUI
    balanceEl.innerHTML = `<small>${sign}</small>${balance.toFixed(2)}`;
    outcomeTotalEl.innerHTML = `<small>$</small>${outcome}`;
    incomeTotalEl.innerHTML = `<small>$</small>${income}`;

    clearElement( [incomeList, expenseList, allList] );

    ENTRY_LIST.forEach( (entry, index) => {
        if( entry.type === "income") {
            showEntry(incomeList, entry.type, entry.title, entry.amount, index);
        } else if(entry.type === "expense") {
            showEntry(expenseList, entry.type, entry.title, entry.amount, index);
        }
        showEntry(allList, entry.type, entry.title, entry.amount, index);
    });

    console.log(`income is ${income}, outcome:${outcome}, balance ${sign} ${balance}`);
}

function showEntry(list, type, title, amount, id) {
    const entry = `<li id= "${id}" class="${type}">
                        <div class= "entry">${title}: $${amount.toFixed(2)}</div>
                        <button type="button" id="edit">Edit</button>
                        <button type="button" id="delete">Delete</button>
                    </li>`
    const position = "afterbegin";

    list.insertAdjacentHTML(position, entry);
}

function clearElement(elements) {
    elements.forEach( element => {
        element.innerHTML = "";
    })
}

function clearInput(inputs) {
    inputs.forEach( input => {
        input.value = "";
    })
}

function calculateTotal (type, list) {
    let sum = 0;
    list.forEach( entry => {
        if ( entry.type === type ) {
            sum += entry.amount;
        }
    })
    return sum.toFixed(2);
}

function calculateBalance(income, outcome) {
    return income - outcome;
}

//EVENT LISTENERS FOR ADDITION OF ENTRIES
addExpense.addEventListener("click", function(){
    //do not run if either input is empty
    if( expenseTitle.value === '' || expenseAmount.value === '' ) return;
    // add entry to list
    let expense = {
        type : "expense",
        title : expenseTitle.value,
        amount : parseFloat(expenseAmount.value)
    }
    ENTRY_LIST.push(expense);

    updateUI(); 
    clearInput([expenseTitle, expenseAmount]);
    console.log(ENTRY_LIST);
});

addIncome.addEventListener("click", function(){
    //do not run if either input is empty
    if( incomeTitle.value === '' || incomeAmount.value === '' ) return;
    // add/save entry to list
    let income = {
        type : "income",
        title : incomeTitle.value,
        amount : parseFloat(incomeAmount.value)
    }
    ENTRY_LIST.push(income);

    updateUI();  
    clearInput([incomeTitle, incomeAmount]);
    console.log(ENTRY_LIST);
});



//FUNCTIONS FOR EDITS/REMOVAL
function deleteOrEdit(event) {
    const targetBtn = event.target;
    const ENTRY = targetBtn.parentNode;

    if( targetBtn.id === DELETE ) {
        deleteEntry(ENTRY);
    } else if( targetBtn.id === EDIT ) {
        editEntry(ENTRY);
    }
}

function deleteEntry(ENTRY) {
    ENTRY_LIST.splice( ENTRY.id, 1 );
    updateUI();
}

function editEntry(ENTRY) {
    let entry = ENTRY_LIST[ENTRY.id];

    if(entry.type === "income") {
        incomeAmount.value = entry.amount;
        incomeTitle.value = entry.title;
    } else if (entry.type === "expense") {
        expenseAmount.value = entry.amount;
        expenseTitle.value = entry.title;
    }

    deleteEntry(ENTRY);
}

//EVENT LISTENERS FOR EDITS/REMOVAL
incomeList.addEventListener("click", deleteOrEdit);
expenseList.addEventListener("click", deleteOrEdit);
allList.addEventListener("click", deleteOrEdit);