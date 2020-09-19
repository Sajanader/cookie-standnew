
'use strict'
var hour = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",];
var container = document.getElementById('container');
var tableEl = document.createElement('table');
container.appendChild(tableEl);
var form= document.getElementsByTagName('form')[0];
var locations = [];
function Location(
    location,
    max,
    min,
    average,
    customers,
    cookies,
    total,

) {
    this.location = location;
    this.max = max;
    this.min = min;
    this.average = average;
    this.customers = []
    this.cookies = [];
    this.total = 0;
    locations.push(this);
}
Location.prototype.getCustomer = function () {

    for (var i = 0; i < hour.length; i++) {
        this.customers.push(getRandom(this.min, this.max));
    }
};

Location.prototype.getCookie = function () {
    for (var i = 0; i < hour.length; i++) {
        this.cookies.push(Math.ceil(this.average * this.customers[i]));
    }
};

Location.prototype.getDailyTotal = function () {
    for (var i = 0; i < hour.length; i++) {
        this.total += this.cookies[i];

    }

};
function header() {
    var tableEl = document.createElement('table');
    container.appendChild(tableEl);
    var headerRowEl = document.createElement('tr');
    tableEl.appendChild(headerRowEl);
    var thEl = document.createElement('th');
    headerRowEl.appendChild(thEl);
    thEl.textContent = "                              ";

    for (var i = 0; i < hour.length; i++) {
        var thEl = document.createElement('th');
        headerRowEl.appendChild(thEl);
        thEl.textContent = hour[i];
    }
    var thEl = document.createElement('th');
    headerRowEl.appendChild(thEl);
    thEl.textContent = " daily total ";
}

Location.prototype.render = function () {
    var tableEl = document.createElement('table');
    container.appendChild(tableEl);
    var dataRowEl = document.createElement('tr');
    tableEl.appendChild(dataRowEl);
    var tdEl = document.createElement('td');
    dataRowEl.appendChild(tdEl);
    tdEl.textContent = this.location;
    for (var i = 0; i < hour.length; i++) {
        var tdEl = document.createElement('td');
        dataRowEl.appendChild(tdEl);
        tdEl.textContent = this.cookies[i];
    }
    var tdEl = document.createElement('td');
    dataRowEl.appendChild(tdEl);
    tdEl.textContent = this.total;
}

function footer() {
    var tableEl = document.createElement('table');
    container.appendChild(tableEl);
    var footerRowEl = document.createElement('tr');
    tableEl.appendChild(footerRowEl);
    var tfEl = document.createElement('td');
    footerRowEl.appendChild(tfEl);
    tfEl.textContent = "Totals";
    for (var i = 0; i < hour.length; i++) {
        var totalCookiesPerHour = 0;
        var Total = 0;
        for (var t = 0; t < locations.length; t++) {
            totalCookiesPerHour += locations[t].cookies[i];
            Total += locations[t].total;
        }
        var tfEl = document.createElement('td');
        footerRowEl.appendChild(tfEl);
        tfEl.textContent = totalCookiesPerHour;
    }
    var tfEl = document.createElement('td');
    footerRowEl.appendChild(tfEl);
    tfEl.textContent = Total;
}



new Location(
    'Seattle',
    65,
    23,
    6.3,
    [],
    [],
    0,
);
new Location(
    'Tokyo',
    24,
    3,
    1.2,
    [],
    [],
    0,
);
new Location(
    'Dubai',
    39,
    11,
    3.7,
    [],
    [],
    0,
);
new Location(
    'Paris',
    38,
    20,
    2.3,
    [],
    [],
    0,

);
new Location(
    'Lima',
    16,
    2,
    4.6,
    [],
    [],
    0,
);
header();
for (var t = 0; t < locations.length; t++) {
    locations[t].getCustomer();
    locations[t].getCookie();
    locations[t].getDailyTotal();
    locations[t].render();
}
footer();

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var location = event.target.location.value;
    var max = event.target.max.value;
    var min = event.target.min.value;
    var average = event.target.average.value;
    var shops = new Location(
        location,
        max,
        min,
     average,
    
    );
    var rowCount=tableEl.rows.length;
    tableEl.deleteRow(rowCount-1)
    shops.getCustomer();
    shops.getCookie();
    shops.getDailyTotal();
    shops.render();
    form.reset();
    footer();
});

