function tableSwitch(flight, mySwitch, myAirportCode){
    if((mySwitch === 'DEPARTURES') && (flight.origin === myAirportCode)){
        return true;
    }

    return (mySwitch === 'ARRIVALS') && (flight.destination === myAirportCode);
}

function getHeaders(data){
    let arr = [];
    Object.keys(data.dummy).forEach(function (key){
        arr.push(key);
    });
    return arr;
}

function generateTableHead(table, keys) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    for (let key of keys) {
            let th = document.createElement("th");
            let text = document.createTextNode(key);

            th.appendChild(text);
            row.appendChild(th);
    }
}

function generateRow(table, row, element){
    let cell = row.insertCell();
    let text = document.createTextNode(element);
    cell.appendChild(text);
}

function addImage(table, row, element){
    let cell = row.insertCell();
    var img = document.createElement('img');
    console.log(element);
    img.src = element;
    cell.appendChild(img);
}

function generateExchangeTable(table, myData) {
    for (let element in myData) {
        let row = table.insertRow();
        let exchangeRate = 1 / myData[element];
        generateRow(table, row, element);
        generateRow(table, row, exchangeRate.toFixed(3));
    }
}

function generateCarsTable(table, myData) {
    for(let elem in myData){
        if (elem != 'dummy'){
            let car = myData[elem];
            let row = table.insertRow();
            for(let cell in car){
                let td = car[cell];
                if(cell === 'picture'){
                    addImage(table, row, car[cell]);
                }
                else{
                    generateRow(table, row, car[cell]);
                }
            }
        }
    }
}

function generateFlightsTable(table, myData, mySwitch, myAirportCode) {
    for(let elem in myData){
        let flight = myData[elem];
        console.log(flight);
        if (elem !== 'dummy' && tableSwitch(flight, mySwitch, myAirportCode)){
            console.log(flight);
            let row = table.insertRow();
            for(let cell in flight){
                let td = flight[cell];
                if(typeof td == 'object'){
                    td = td.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
                    generateRow(table, row, td);
                }
                else {
                    generateRow(table, row, flight[cell]);
                }
            }
        }
    }
}