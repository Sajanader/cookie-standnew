'use strict'
var hour = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",];
var container = document.getElementById('container');
var locations = [];
console.log(locations);

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
Location.prototype.getCustomers = function () {

    for (var i = 0; i < hour.length; i++) {
        this.customers.push(getRandom(this.min, this.max));
    }
};

Location.prototype.getCookies = function () {
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
    var thEl1 = document.createElement('th');
    headerRowEl.appendChild(thEl1);
    thEl1.textContent = " //////////";

    for (var i = 0; i < hour.length; i++) {
        var thEl2 = document.createElement('th');
        headerRowEl.appendChild(thEl2);
        thEl2.textContent = hour[i];
    }
    var thEl3 = document.createElement('th');
    headerRowEl.appendChild(thEl3);
    thEl3.textContent = " daily total ";
}

Location.prototype.render = function () {
    var tableEl = document.createElement('table');
    container.appendChild(tableEl);
    var dataRowEl = document.createElement('tr');
    tableEl.appendChild(dataRowEl);
    var tdEl1 = document.createElement('td');
    dataRowEl.appendChild(tdEl1);
    tdEl1.textContent = this.location;
    for (var i = 0; i < hour.length; i++) {
        var tdEl2 = document.createElement('td');
        dataRowEl.appendChild(tdEl2);
        tdEl2.textContent = this.cookies[i];
    }
    var tdEl3 = document.createElement('td');
    dataRowEl.appendChild(tdEl3);
    tdEl3.textContent = this.total;
}
function footer() {

    var tableEl = document.createElement('table');
    container.appendChild(tableEl);
    var footerRowEl = document.createElement('tr');
    tableEl.appendChild(footerRowEl);
    var tfEl1 = document.createElement('td');
    footerRowEl.appendChild(tfEl1);
    tfEl1.textContent = "Totals";

    for (var i = 0; i < hour.length; i++) {
        var tfEl2 = document.createElement('td');
        footerRowEl.appendChild(tfEl2);
        tfEl2.textContent = "/////";
    }
    var tfEl3 = document.createElement('td');
    footerRowEl.appendChild(tfEl3);
    tfEl3.textContent = Total;
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

for (var i = 0; i < locations.length; i++) {
    locations[i].getCustomers();
    locations[i].getCookies();
    locations[i].getDailyTotal();
    locations[i].render();
}
var Total = 0;
for (var i = 0; i < locations.length; i++) {
    Total += locations[i].total;
}
footer();

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event.target);
    var locations = event.target.locations.value;
    console.log(locations);
    var max = event.target.max.value;
    console.log(max);
    var min = event.target.min.value;
    console.log(min);
    var average = event.target.average.value;
    console.log(average);
    var customers = event.target.customers.value.split(',');
    console.log(customers);
    var cookies = event.target.cookies.value.split(',');
    console.log(cookies);
    var total = event.target.total.value;
    console.log(total);
    var location = new Location(
        locations,
        min,
        max,
        average,
        Customers,
        cookies,
        total,
    );
    location.getCookies();
    location.getCustomers();
    location.getDailyTotal();
    location.getDailyTotal();
    location.render();
    form.reset();
});


// var totalCookiesPerHour =0;
// for (var i = 0; i< locations.length; i++) {
//     totalCookiesPerHour+= locations[i].cookies;

// }




function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

