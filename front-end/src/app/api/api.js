


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


module.exports = {
  FetchIncome,
  SubmitIncome
}