'use strict'
var hour = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", 'total',];
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
var header={
render:function () {
var tableEl = document.createElement('table');
container.appendChild(tableEl);
var headerRowEl = document.createElement('tr');
tableEl.appendChild(headerRowEl);
var thEl1 = document.createElement('th');
headerRowEl.appendChild(thEl1);
thEl1.textContent = "///////////";
var thEl2 = document.createElement('th');
headerRowEl.appendChild(thEl2);
thEl2.textContent = '	6:00am  ';
var thEl3 = document.createElement('th');
headerRowEl.appendChild(thEl3);
thEl3.textContent = '  7:00am ';
var thEl4 = document.createElement('th');
headerRowEl.appendChild(thEl4);
thEl4.textContent = '	 8:00am ';
var thEl5 = document.createElement('th');
headerRowEl.appendChild(thEl5);
thEl5.textContent = '	9:00am';
var thEl6 = document.createElement('th');
headerRowEl.appendChild(thEl6);
thEl6.textContent = '	10:00am ';
var thEl7 = document.createElement('th');
headerRowEl.appendChild(thEl7);
thEl7.textContent = ' 11:00am  ';
var thEl8 = document.createElement('th');
headerRowEl.appendChild(thEl8);
thEl8.textContent = ' 12:00pm   ';
var thEl9 = document.createElement('th');
headerRowEl.appendChild(thEl9);
thEl9.textContent = '	1:00pm	';
var thEl10 = document.createElement('th');
headerRowEl.appendChild(thEl10);
thEl10.textContent = ' 2:00pm ';
var thEl11 = document.createElement('th');
headerRowEl.appendChild(thEl11);
thEl11.textContent = '  3:00pm ';
var thEl12 = document.createElement('th');
headerRowEl.appendChild(thEl12);
thEl12.textContent = '  4:00pm ';
var thEl13 = document.createElement('th');
headerRowEl.appendChild(thEl13);
thEl13.textContent = '  5:00pm  ';
var thEl14 = document.createElement('th');
headerRowEl.appendChild(thEl14);
thEl14.textContent = ' 6:00pm ';
var thEl15 = document.createElement('th');
headerRowEl.appendChild(thEl15);
thEl15.textContent = ' 7:00pm ';
var thEl16 = document.createElement('th');
headerRowEl.appendChild(thEl16);
thEl16.textContent = 'Daily Location Total';
},
};

header.render();

Location.prototype.render = function () {
var tableEl = document.createElement('table');
container.appendChild(tableEl);
var dataRowEl = document.createElement('tr');
tableEl.appendChild(dataRowEl);
var tdEl1 = document.createElement('td');
dataRowEl.appendChild(tdEl1);
tdEl1.textContent = this.location;
var tdEl2 = document.createElement('td');
dataRowEl.appendChild(tdEl2);
tdEl2.textContent = this.cookies[0];
var tdEl3 = document.createElement('td');
dataRowEl.appendChild(tdEl3);
tdEl3.textContent = this.cookies[1];
var tdEl4 = document.createElement('td');
dataRowEl.appendChild(tdEl4);
tdEl4.textContent = this.cookies[2];
var tdEl5 = document.createElement('td');
dataRowEl.appendChild(tdEl5);
tdEl5.textContent = this.cookies[3];
var tdEl6 = document.createElement('td');
dataRowEl.appendChild(tdEl6);
tdEl6.textContent = this.cookies[4];
var tdEl7 = document.createElement('td');
dataRowEl.appendChild(tdEl7);
tdEl7.textContent = this.cookies[5];
var tdEl8 = document.createElement('td');
dataRowEl.appendChild(tdEl8);
tdEl8.textContent = this.cookies[6];
var tdEl9 = document.createElement('td');
dataRowEl.appendChild(tdEl9);
tdEl9.textContent = this.cookies[7];
var tdEl10 = document.createElement('td');
dataRowEl.appendChild(tdEl10);
tdEl10.textContent = this.cookies[8];
var tdEl11 = document.createElement('td');
dataRowEl.appendChild(tdEl11);
tdEl11.textContent = this.cookies[9];
var tdEl12 = document.createElement('td');
dataRowEl.appendChild(tdEl12);
tdEl12.textContent = this.cookies[10];
var tdEl13 = document.createElement('td');
dataRowEl.appendChild(tdEl13);
tdEl13.textContent = this.cookies[11];
var tdEl14 = document.createElement('td');
dataRowEl.appendChild(tdEl14);
tdEl14.textContent = this.cookies[12];
var tdEl15 = document.createElement('td');
dataRowEl.appendChild(tdEl15);
tdEl15.textContent = this.cookies[13];
var tdEl16 = document.createElement('td');
dataRowEl.appendChild(tdEl16);
tdEl16.textContent = this.total;
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
new Location('Tokyo',
    24,
    3,
    1.2,
    [],
    [],
    [],
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
for (var i = 0; i < locations.length; i++) {
    locations[i].get();
    locations[i].render();}











// var Seattle = {
//     location: 'Seattle',
//     max: 65,
//     min: 23,
//     average: 6.3,
//     customers: [],
//     cookies: [],
//     total: 0,
//     get: function () {
//         for (var i = 0; i < hour.length; i++) {

//             this.customers.push(getRandom(this.min, this.max));
//             this.cookies.push(Math.ceil(this.average * this.customers[i]));
//             this.total += this.cookies[i];

//         }

//     },
//     render: function () {
//         var container = document.getElementById('container');
//         var tittleEL = document.createElement('tittle');
//         container.appendChild(tittleEL);
//         var unorderdlistEL = document.createElement('ul');
//         container.appendChild(unorderdlistEL);
//         tittleEL.textContent = this.location;
//         var listLE = document.createElement('li');
//         for (var i = 0; i < hour.length; i++) {
//             var listLE = document.createElement('li');
//             listLE.textContent = `${hour[i]} : ${this.cookies[i]} `;
//             unorderdlistEL.appendChild(listLE);
//         }
//         var totalEL = document.createElement('li');
//         unorderdlistEL.appendChild(totalEL);
//         totalEL.textContent = `${hour[i]}: ${this.total}`;
//     },
// };

// console.log(Seattle.max);

// Seattle.get();

// Seattle.render();


// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// var Tokyo = {
//     location: 'Tokyo',
//     max: 24,
//     min: 3,
//     average: 1.2,
//     customers: [],
//     cookies: [],
//     total: 0,
//     get: function () {
//         for (var i = 0; i < hour.length; i++) {

//             this.customers.push(getRandom(this.min, this.max));
//             this.cookies.push(Math.ceil(this.average * this.customers[i]));
//             this.total += this.cookies[i];
//         }

//     },
//     render: function () {
//         var container = document.getElementById('container');
//         var unorderdlistEL = document.createElement('ul');
//         var tittleEL = document.createElement('p');
//         container.appendChild(tittleEL);
//         container.appendChild(unorderdlistEL);
//         var listLE = document.createElement('li');
//         tittleEL.textContent = this.location;
//         for (var i = 0; i < hour.length; i++) {
//             listLE = document.createElement('li');
//             listLE.textContent = `${hour[i]} : ${this.cookies[i]} `;
//             unorderdlistEL.appendChild(listLE);
//         }
//         var totalEL = document.createElement('li');
//         unorderdlistEL.appendChild(totalEL);
//         totalEL.textContent = `${hour[i]}: ${this.total}`;
//     },
// };


// Tokyo.get();

// Tokyo.render();


// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// var Dubai = {
//     location: 'Dubai',
//     max: 39,
//     min: 11,
//     average: 3.7,
//     customers: [],
//     cookies: [],
//     total: 0,
//     get: function () {
//         for (var i = 0; i < hour.length; i++) {

//             this.customers.push(getRandom(this.min, this.max));
//             this.cookies.push(Math.ceil(this.average * this.customers[i]));
//             this.total += this.cookies[i];
//         }

//     },
//     render: function () {
//         var container = document.getElementById('container');
//         var unorderdlistEL = document.createElement('ul');
//         var tittleEL = document.createElement('p');
//         container.appendChild(tittleEL);
//         container.appendChild(unorderdlistEL);
//         var listLE = document.createElement('li');
//         tittleEL.textContent = this.location;
//         for (var i = 0; i < hour.length; i++) {
//             listLE = document.createElement('li');
//             listLE.textContent = `${hour[i]} : ${this.cookies[i]} `;
//             unorderdlistEL.appendChild(listLE);
//         }
//         var totalEL = document.createElement('li');
//         unorderdlistEL.appendChild(totalEL);
//         totalEL.textContent = `${hour[i]}: ${this.total}`;
//     },
// };


// Dubai.get();

// Dubai.render();


// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// var Paris = {
//     location: 'Paris',
//     max: 38,
//     min: 20,
//     average: 2.3,
//     customers: [],
//     cookies: [],
//     total: 0,
// get: function () {
//     for (var i = 0; i < hour.length; i++) {

//         this.customers.push(getRandom(this.min, this.max));
//         this.cookies.push(Math.ceil(this.average * this.customers[i]));
//         this.total += this.cookies[i];
//     }

// },
//     render: function () {
//         var container = document.getElementById('container');
//         var unorderdlistEL = document.createElement('ul');
//         var tittleEL = document.createElement('p');
//         container.appendChild(tittleEL);
//         container.appendChild(unorderdlistEL);
//         var listLE = document.createElement('li');
//         tittleEL.textContent = this.location;
//         for (var i = 0; i < hour.length; i++) {
//             listLE = document.createElement('li');
//             listLE.textContent = `${hour[i]} : ${this.cookies[i]} `;
//             unorderdlistEL.appendChild(listLE);
//         }
//         var totalEL = document.createElement('li');
//         unorderdlistEL.appendChild(totalEL);
//         totalEL.textContent = `${hour[i]}: ${this.total}`;
//     },
// };


// Paris.get();

// Paris.render();


// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// var Lima = {
//     location: 'Lima',
//     max: 16,
//     min: 2,
//     average: 4.6,
//     customers: [],
//     cookies: [],
//     total: 0,
//     get: function () {
//         for (var i = 0; i < hour.length; i++) {

//             this.customers.push(getRandom(this.min, this.max));
//             this.cookies.push(Math.ceil(this.average * this.customers[i]));
//             this.total += this.cookies[i];
//         }

//     },
//     render: function () {
//         var container = document.getElementById('container');
//         var unorderdlistEL = document.createElement('ul');
//         var tittleEL = document.createElement('p');
//         container.appendChild(tittleEL);
//         container.appendChild(unorderdlistEL);
//         var listLE = document.createElement('li');
//         tittleEL.textContent = this.location;
//         for (var i = 0; i < hour.length; i++) {
//             listLE = document.createElement('li');
//             listLE.textContent = `${hour[i]} : ${this.cookies[i]} `;
//             unorderdlistEL.appendChild(listLE);
//         }
//         var totalEL = document.createElement('li');
//         unorderdlistEL.appendChild(totalEL);
//         totalEL.textContent = `${hour[i]}: ${this.total}`;
//     },
// };


// Lima.get();

// Lima.render();


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
