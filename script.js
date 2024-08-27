const password = document.querySelector('.password');
const overlay = document.querySelector('.overlay');
const email = document.querySelector('.email');

password.addEventListener("input" , e =>{
    const input = e.target.value;
    const length = input.length;
    const blurness = 20 - length * 2;
    overlay.style.backdropFilter = `blur(${blurness}px)`
})

email.addEventListener("input" , e =>{
    const input = e.target.value;
    const length = input.length;
    const blurness = 20 - length * 2;
    overlay.style.backdropFilter = `blur(${blurness}px)`
})