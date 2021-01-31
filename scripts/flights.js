Object.keys(flight).forEach(function (key){
    // console.log(key);
})

let keys = getHeaders(flight);

let table = document.querySelector(".przyloty");
generateTableHead(table, keys, 'destination');
generateFlightsTable(table, flight, 'ARRIVALS','GDN');

table = document.querySelector(".odloty");
generateTableHead(table, keys);
generateFlightsTable(table, flight, 'DEPARTURES','GDN');
