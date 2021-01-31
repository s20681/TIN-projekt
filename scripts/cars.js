let keys = getHeaders(car_rental);
let table = document.querySelector(".samochody");
generateTableHead(table, keys, 0);
generateCarsTable(table, car_rental);