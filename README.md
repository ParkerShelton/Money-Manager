# Money Manager

### Colors
```
Dark Purple: #4546B1
Medium Purple: #4B4CC2
Light Purple: #5658DD
Light Blue: #8185E8
White: #E4E3FF
```


### Income Form
  - ID of income item : VARCHAR(20)
  - Category of the income (Check/DD, Cash, Returned Item, Sold Item, Other) : VARCHAR(30)
  - Name of income : VARCHAR(30)
  - Amount of income : DECIMAL(8,2)
  - Date you got the income : DATE
  - Date you enter the income in to the form : DATE

### Expense Form
  - Category of the expense (House, Grocery, Car, Medical, Clothing) : VARCHAR(20)
  - Name of expense : VARCHAR(30)
  - Amount of the expense : DECIMAL(8,2)
  - Date you spent the money : DATE
  - Date you entered the expense in to the form : DATE


## Versions To-Do List

### V1.0
- I had the files already and moved them over to this repo so I dont have the notes for version 1.0

### V1.1
- [X] Create the expense mysql table
- [X] Make back end endpoints for posting and getting expense data from database
- [X] Create front end functions to post and get data from back end
- [X] Add expenseList to state in App.js
- [X] Add storedExpense to state in App.js
- [X] Make the expense form in the manage page
- [X] Add state inside Manage.js to be able pick between income, expense, and gift card tabs
- [X] Add actual tabs in the Manage.js (have them be buttons)
- [X] Create addExpense() function in App.js
- [X] Create removeExpense() function in App.js
- [X] Create submitExpense() function in App.js

### V1.2
- [X] Add cases to switch in handleChange function in App.js
- [X] Have history table list the expenses along with the income
- [X] Color row's backgroung green if it's income and red if it's expense
- [X] Make total on the home page add and subtract all amount from history list
- [X] Make a footer the has all the navigation

### V1.3
- [ ] Get rid of Manage page and turn it into the different pages (income, expense, and giftcard)
- [ ] Make the icons in the footer change color when selected
- [ ] Be able to sort the gift cards by the store they are for and the amount of money they have left
- [ ] Be able to sort the history by all of the parameters.