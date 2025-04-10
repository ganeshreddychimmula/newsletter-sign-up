let newsletterCard = document.querySelector(".newsletter__signup-card");
let successCard = document.querySelector(".success-card");
let signUpButton = document.querySelector("#signup-button");
let dismissButton = document.querySelector('#dismiss');
let errorMessage = document.querySelector('#email-error');
let emailInputElement = document.querySelector('#email');
let emailValue = "";

// Save email value on renders
emailInputElement.addEventListener('input', function (e) {
    emailValue = e.target.value;
    console.log(emailValue);
})

signUpButton.addEventListener('click', function (e) {
    e.preventDefault();
    newsletterCard.classList.toggle('newsletter__signup-card--hidden')
    successCard.classList.toggle('success-card--show')
})

dismissButton.addEventListener('click', function (e){
    newsletterCard.classList.toggle('newsletter__signup-card--hidden')
    successCard.classList.toggle('success-card--show')
})
