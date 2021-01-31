function fetchExchangeRates(baseRate){
    let url = "https://api.exchangeratesapi.io/latest?base=".concat(baseRate);
    fetch(url)
    .then(response => response.json())
    .then(data => {

        let table = document.querySelector(".kantor");
        generateTableHead(table, ['base rate:', baseRate], false);

        table = document.querySelector(".kantor");
        generateTableHead(table, ['currency', 'rate'], false);
        table = document.querySelector(".kantor-body");
        generateExchangeTable(table, data['rates']);

    })
    .catch(error => error);
}

fetchExchangeRates('PLN');

