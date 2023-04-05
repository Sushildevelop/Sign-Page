// let var1 = document.createElement("h1")
// var1.innerText = "hello world I am shushil chuabye"
// document.body.appendChild(var1)
const logregBox = document.querySelector('logreg-box');
const loginLink = document.querySelector('login-link');

const registerLink = document.querySelector('register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
})

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
})