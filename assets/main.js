let emailInputElement = document.querySelector('#email');
let emailValue = "";

// Save email value on renders
emailInputElement.addEventListener('input', function (e) {
    emailValue = e.target.value;
    console.log(emailValue);
})