//////////////////////////////////////////////
//                  HISTORY                 //
//////////////////////////////////////////////

let FetchHistory = () => {
  const url = "http://localhost:8080/history";

  return fetch(url)
    .then((res) => res.json())
    .then((resJSON) => {
      return resJSON;
    });
}



//////////////////////////////////////////////
//                  INCOME                  //
//////////////////////////////////////////////
let FetchIncome = () => {
  const url = "http://localhost:8080/income";

  return fetch(url)
    .then((res) => res.json())
    .then((resJSON) => {
      return resJSON;
    });
}

let SubmitIncome = (incomeList) => {
  const url = "http://localhost:8080/income";

  for(let i = 0; i < incomeList.length; i++) {

    fetch(url, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify(incomeList[i])
    });

    console.log(incomeList[i]);

  }
}



//////////////////////////////////////////////
//                EXPENSES                  //
//////////////////////////////////////////////
let FetchExpenses = () => {
  const url = "http://localhost:8080/expenses";

  return fetch(url)
    .then((res) => res.json())
    .then((resJSON) => {
      return resJSON;
    });
}


let SubmitExpenses = (expenseList) => {
  const url = "http://localhost:8080/expenses";

  for(let i = 0; i < expenseList.length; i++) {

    fetch(url, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify(expenseList[i])
    });

    console.log(expenseList[i]);

  }
}



module.exports = {
  FetchIncome,
  SubmitIncome,
  FetchExpenses,
  SubmitExpenses,
  FetchHistory
}