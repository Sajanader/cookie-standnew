'use strict'
var hour = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", 'total',];
var container = document.getElementById('container');
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
    this.customers = customers;
    this.cookies = cookies;
    this.total = total;
    locations.push(this);
}
Location.prototype.get = function () {

    for (var i = 0; i < hour.length; i++) {

        this.customers.push(getRandom(this.min, this.max));
        this.cookies.push(Math.ceil(this.average * this.customers[i]));
        this.total += this.cookies[i];
    }

};
Location.prototype.render = function () {
    var container = document.getElementById('container');
    var unorderdlistEL = document.createElement('ul');
    var tittleEL = document.createElement('p');
    container.appendChild(tittleEL);
    container.appendChild(unorderdlistEL);
    var listLE = document.createElement('li');
    tittleEL.textContent = this.location;
    for (var i = 0; i < hour.length; i++) {
        listLE = document.createElement('li');
        listLE.textContent = `${hour[i]} : ${this.cookies[i]} `;
        unorderdlistEL.appendChild(listLE);
    }
    var totalEL = document.createElement('li');
    unorderdlistEL.appendChild(totalEL);
    totalEL.textContent = `${hour[i]}: ${this.total}`;
}
function header() {
    var tableEl = document.createElement('table');
    container.appendChild(tableEl);
    var headerRowEl = document.createElement('tr');
    tableEl.appendChild(headerRowEl);
    var thEl = document.createElement('th');
        headerRowEl.appendChild(thEl);
        thEl.textContent =   '   /////////   ';

    for (var i = 0; i < hour.length; i++) {
        var thEl= document.createElement('th');
        headerRowEl.appendChild(thEl);
        thEl.textContent = hour[i];
    }
    var thEl= document.createElement('th');
    headerRowEl.appendChild(thEl);
    thEl.textContent = "daily total";
}

Location.prototype.render = function () {
    var tableEl = document.createElement('table');
    container.appendChild(tableEl);
    var dataRowEl = document.createElement('tr');
    tableEl.appendChild(dataRowEl);
    var tdEl= document.createElement('td');
    dataRowEl.appendChild(tdEl);
    tdEl.textContent = this.location;
    for(var i=0;i<hour.length;i++){
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
        var thEl= document.createElement('th');
        footerRowEl.appendChild(thEl);
        thEl.textContent= "";
    }
    var tfEl11= document.createElement('td');
    footerRowEl.appendChild(tfEl11);
    tfEl11.textContent = " total of total";
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
    locations[i].get();
    locations[i].render();
}
footer();

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
