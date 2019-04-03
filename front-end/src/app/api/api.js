


let FetchIncome = () => {
  const url = "http://localhost:8080/income";

  return fetch(url)
    .then((res) => res.json())
    .then((resJSON) => {
      return resJSON;
    });
}

let AddIncome = (incomeList) => {
  const url = "http://localhost:8080/income";

  for(let i = 0; i < incomeList; i++) {

    fetch(url, {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify(incomeList[i])
    });

    // .then((res) => {
    //   return res.json();
    // }).then((resJSON) => {
    //   return resJSON;
    // })

  }

}


module.exports = {
  FetchIncome,
  AddIncome
}