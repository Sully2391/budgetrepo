# budgetrepo
Repository for Code Louisville JavaScript class Spring '21 project
Budget app w/ quote generator

This project is a simple budget app, ideally I would've liked to have added more budget categories, and in the future revisiting this project would like to add some sort of date-tracking feature where recurring expenses & incomes could be saved/timed also.  

Features included:
1.) Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)
* This is found with the quote generator which draws a random quote from https://api.quotable.io/random using the fetch() method.

2.) Create a form and save the values (on click of Submit button) to an external file
* This is in the budget dashboard, the save button is in the 'display' section which on clicking will save the income/expense entries and balance to the browser's local storage.

3.) Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value
* This is in the main.js file with the 'calculateBalance' function (ln 144 in main.js file), which accepts the income & outcome parameters to calculate the total balance from user-inputed entries.

<em>Questionable feature</em>
4.) Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application
* The array is not pre-populated, ENTRY_LIST (declared on ln 32 in main.js) is set to check for saved data, and if none is found starts as an empty array. The income/expense inputs in the budget dashboard create list items that populate/display in a list that can toggle between just incomes, just expenses, or the 'all' tab to display all entries.
**Not sure if this meets the requirement or not since the array is only populated from the users input.
