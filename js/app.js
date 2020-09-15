'use strict'
var hour = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm","total",];
var Seattle = {
    location: 'Seattle',
    max: 65,
    min: 23,
    average: 6.3,
    customers: [],
    cookies: [],
    total: 0,
    get: function () {
        for (var i = 0; i < hour.length; i++) {

            this.customers.push(getRandom(this.min, this.max));
            this.cookies.push(Math.ceil(this.average * this.customers[i]));
            this.total += this.cookies[i];

        }
        
    },
    render: function () {
        var container = document.getElementById('container');
        var tittleEL = document.createElement('tittle');
        container.appendChild(tittleEL);
        var unorderdlistEL = document.createElement('ul');
        container.appendChild(unorderdlistEL);
        tittleEL.textContent = this.location;
       var listLE = document.createElement('li');
        for (var i = 0; i < hour.length; i++) {
          var  listLE = document.createElement('li');
            listLE.textContent = `${hour[i]} : ${this.cookies[i]} `;
            unorderdlistEL.appendChild(listLE);
        }
        var totalEL= document.createElement('li');
        unorderdlistEL.appendChild(totalEL);
        totalEL.textContent= `${hour[i]}: ${this.total}`; 
    },
};
        
console.log(Seattle.max);       
    
Seattle.get();

Seattle.render();


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


var Tokyo = {
    location: 'Tokyo',
    max:24,
    min: 3,
    average:1.2,
    customers: [],
    cookies: [],
    total: 0,
    get: function () {
        for (var i = 0; i < hour.length; i++) {

            this.customers.push(getRandom(this.min, this.max));
            this.cookies.push(Math.ceil(this.average * this.customers[i]));
            this.total += this.cookies[i];
        }
        
    },
    render: function () {
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
        var totalEL= document.createElement('li');
        unorderdlistEL.appendChild(totalEL);
        totalEL.textContent= `${hour[i]}: ${this.total}`; 
    },
};
        
    
Tokyo.get();

Tokyo.render();


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var Dubai= {
    location: 'Dubai',
    max:39,
    min: 11,
    average:3.7,
    customers: [],
    cookies: [],
    total: 0,
    get: function () {
        for (var i = 0; i < hour.length; i++) {

            this.customers.push(getRandom(this.min, this.max));
            this.cookies.push(Math.ceil(this.average * this.customers[i]));
            this.total += this.cookies[i];
        }
        
    },
    render: function () {
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
        var totalEL= document.createElement('li');
        unorderdlistEL.appendChild(totalEL);
        totalEL.textContent= `${hour[i]}: ${this.total}`; 
    },
};
        
    
Dubai.get();

Dubai.render();


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


var Paris= {
    location: 'Paris',
    max: 38,
    min: 20,
    average:2.3,
    customers: [],
    cookies: [],
    total: 0,
    get: function () {
        for (var i = 0; i < hour.length; i++) {

            this.customers.push(getRandom(this.min, this.max));
            this.cookies.push(Math.ceil(this.average * this.customers[i]));
            this.total += this.cookies[i];
        }
        
    },
    render: function () {
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
        var totalEL= document.createElement('li');
        unorderdlistEL.appendChild(totalEL);
        totalEL.textContent= `${hour[i]}: ${this.total}`; 
    },
};
        
    
Paris.get();

Paris.render();


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var Lima= {
    location: 'Lima',
    max: 16,
    min: 2,
    average:4.6,
    customers: [],
    cookies: [],
    total: 0,
    get: function () {
        for (var i = 0; i < hour.length; i++) {

            this.customers.push(getRandom(this.min, this.max));
            this.cookies.push(Math.ceil(this.average * this.customers[i]));
            this.total += this.cookies[i];
        }
        
    },
    render: function () {
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
        var totalEL= document.createElement('li');
        unorderdlistEL.appendChild(totalEL);
        totalEL.textContent= `${hour[i]}: ${this.total}`; 
    },
};
        
    
Lima.get();

Lima.render();


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
