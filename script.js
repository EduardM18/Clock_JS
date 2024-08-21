const deg=6;
const hour = document.querySelector('#hour');//hour arrow//
const min = document.querySelector('#min');//minute arrow//
const sec = document.querySelector('#sec');//secunde arrow//

setInterval(()=> {//setInterval is necessary that the action be repeated constantly//
    let date = new Date();// date of today//
    let hh = date.getHours() * 30;//hour of this time//
    let mm = date.getMinutes() * deg;//minute of this time//
    let ss = date.getSeconds() * deg;//second of this time//
    hour.style.transform= `rotateZ(${hh+(mm/12)}deg)`;//hour arrow movement//
    min.style.transform= `rotateZ(${mm}deg)`;//minute arrow movement//
    sec.style.transform= `rotateZ(${ss}deg)`;//second arrow movement//
})


