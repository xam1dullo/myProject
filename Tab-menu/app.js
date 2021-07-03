// const { clear } = require("console");

// const { log } = require("console");



// const year = [
//    'Yanvar',
//    'Febral',
//    'Mart',
//    'May',
//    'Iyun',
//    'Iyul',
//    'Avgust',
//    'Sentabr',
//    'Oktabr',
//    'December'
// ]

// console.log(date.getFullYear());
// console.log(year[date.getMonth()]);
// console.log(date.getDate());
// console.log(date.getUTCDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// console.log(date.toJSON());


// function hello() {
//    alert('salom')
// }
// // let times = setInterval('hello()',2000)

// document.querySelector('.btn').onclick = function () {
//    clearInterval(times);
// }

// let num = 10;
// function div() {
//    num++;
//    document.querySelector('h1').innerHTML = num;
// };
// // let timer = setInterval('div()',1000)


// let elStop= document.querySelector('.stop');
// let elStart = document.querySelector('.start');

// elStart.addEventListener('click', () => {
//  timer = setInterval('div()',1000)
// });

// elStop.addEventListener('click', () => {
//    clearInterval(timer);
// });

// function ok() {
//    let date = new Date();
// }
// setInterval('ok()', 1000);


// document.querySelector('.hour').textContent = date.getHours();

// document.querySelector('.minut').textContent = date.minuts();

// document.querySelector('.s').textContent = date.getSeconds();

// elhours.textContent = hour;



// let show = {
//    lastName: 'xamidullo',
//    firstName: 'Xudoyberdiyev',
//    age: 21,
//    data: {
//       name: 'auto',
//       age:22 
//    }
// //    full: function () {
// //       return `${this.lastName} ${this.firstName} ${this.age}`;
// //    }
// }
// // show.isMared = false;
// let newObject = Object.create(show);
// // newObject.full.iscoder =true;
// // console.log(show.isMared);

// function obja(obj) {  
//    for (let key in obj) {
//       if (typeof obj[key] == 'object') {
//          obja(obj[key]);
//       } else {
//          console.log(`${key} :${obj[key]}`);
//       }
//    }
// }

// obja(show);


/* starts coding for  nababar  */

let click = document.querySelector('.click');
let nav_link = document.querySelector('.nav-link');

click.addEventListener('click', function() {
   nav_link.classList.toggle('open');
});


let elTab = document.querySelectorAll('.tab');
elTab.forEach(function(el ,indx )  {
   el.addEventListener('click', function () {
      this.classList.toggle('active');
   });
});



/* End coding for  nababar  */

/*start o coding for tab menu*/

let tab;
let tabContent;

window.onload = function () {
   tab = document.querySelectorAll('.tab');
   tabContent = document.querySelectorAll('.tab-content');
   hiddenContent();
}

const hiddenContent = () => {
   for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
      tab[i].classList.remove('active');
   }
}

document.querySelector('#tabs').addEventListener('click', (e) => {
   let target = e.target;
   for (let i = 0; i < tab.length; i++){
      if (tab[i] == target) {
         hiddenContent();
          tabContent[i].classList.remove('hide');
         tab[i].classList.add('active');
         tabContent[i].classList.add('show')
      }
   }
   console.log(target);
   
});

