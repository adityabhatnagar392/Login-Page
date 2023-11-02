const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopUp = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');l
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');l
});

btnPopUp.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');l
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');l
});

