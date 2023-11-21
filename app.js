

let toggleButton = document.querySelector(".toggle-button");
let icon = document.getElementById("icon");

toggleButton.addEventListener('click',()=>{
    let input = document.getElementById("password-field");
    input.getAttribute('type') === 'password' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password');
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
})