// //? Loading;
document.addEventListener('DOMContentLoaded', function(e){
    document.querySelector('main').style.display = 'none';
})
let container = document.querySelector('.container');
let progress_value_percentage = 0;
let interval = setInterval(() => {
    if(progress_value_percentage <= 100) {
        progress_value_percentage += 3;
        document.querySelector('main').style.display = 'none';
    }else{
        clearInterval(interval);
        document.querySelector('main').style.display = 'block';
        container.style.display = 'none'
        document.body.style.backgroundColor = '#fff';
    }
}, 50);

//!===================================================================
// //? Header SLider
let index = 0;
carusel();
function carusel() {
    let img = document.querySelectorAll('.slider-img');
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = 'none';
    }
    index++;
    if (index > img.length) {
        index = 1;
    }
    img[index - 1].style.display = 'block';
    setTimeout(carusel, 3000)
}
//!===================================================================
// //? Navbar and back to top settings
window.addEventListener('scroll', function (e) {
    if (window.scrollY >= 300) {
        document.querySelector('#navbar').style.position = 'fixed';
    } else {
        document.querySelector('#navbar').style.position = 'relative';
    }
    if (window.scrollY >= 1500) {
        document.querySelector('#toUp').style.opacity = '1';
    } else {
        document.querySelector('#toUp').style.opacity = '0';
    }
});
//! ====================================================================
// //? About Img 
const myImg = document.querySelector('.myImg');
const closeImg = document.querySelector("#closeImg")
myImg.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.focus-img').style.display = 'flex';

})
closeImg.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.focus-img').style.display = 'none';
})
//! ====================================================================
//? Form Validation
const a = document.querySelectorAll('a');
const form = document.querySelector('#form');
const inputName = document.querySelector('#text');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const textarea = document.querySelector('#textarea');

form.addEventListener('submit', formSubmit);

function formSubmit(e) {
    let check = false;
    e.preventDefault();
    if (!inputName.value) {
        inputName.style.borderBottom = '1px solid red';
    } else {
        inputName.style.borderBottom = '1px solid green';
    }
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        email.style.borderBottom = '1px solid green';
    } else {
        email.style.borderBottom = '1px solid red';
    }
    if (!subject.value) {
        subject.style.borderBottom = '1px solid red';
    } else {
        subject.style.borderBottom = '1px solid green';
    }
    if (!textarea.value) {
        textarea.style.borderBottom = '1px solid red';
    } else {
        textarea.style.borderBottom = '1px solid green';
    }
    if (inputName.value && subject.value && textarea.value && email.value.match(mailformat)) {
        check = true;
    }
    if (check) {
        button.style.backgroundColor = 'green'
        button.style.color = 'white'
        button.style.color = 'none'
    } else if (!check) {
        button.style.color = 'white'
        button.style.backgroundColor = 'red'
        button.style.border = 'none'
    }
}

//? Hamburger Menu
const hamburger = document.querySelector('.ham');
const cross = document.querySelector('.cross');
const lists = document.querySelector('#lists');
hamburger.addEventListener('click', function(e){
    e.preventDefault();
    hamburger.style.display = 'none';
    cross.style.display = 'block';
    lists.style.display = 'flex'
    lists.style.width = '70%';
    lists.style.borderLeft = '1px solid lightgray'
})
cross.addEventListener('click', function(e){
    e.preventDefault();
    cross.style.display = 'none';
    hamburger.style.display = 'block';
    lists.style.display = 'none';
    lists.style.width = '0';
    lists.style.borderLeft = '1px solid transparent';
    lists.style.transition = '1s all'
})