let newsletterCard = document.querySelector(".newsletter__signup-card");
let successCard = document.querySelector(".success-card");
let signUpButton = document.querySelector("#signup-button");
let dismissButton = document.querySelector('#dismiss');
let errorBox = document.querySelector('#email-error');
let emailInputElement = document.querySelector('#email');
let emailValue = "";

// Save email value on renders
emailInputElement.addEventListener('input', function (e) {
    emailValue = e.target.value;
})

// Validate email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }


signUpButton.addEventListener('click', function (e) {
    e.preventDefault();
    if(validateEmail(emailValue)){
        errorBox.textContent = ""
        newsletterCard.classList.toggle('newsletter__signup-card--hidden');
        successCard.classList.toggle('success-card--show');
        emailInputElement.classList.remove('signup-card__form-email--error')
    } else{
        errorBox.textContent = "Valid email required";
        emailInputElement.classList.add('signup-card__form-email--error')
    }
})

dismissButton.addEventListener('click', function (e){
    newsletterCard.classList.toggle('newsletter__signup-card--hidden');
    successCard.classList.toggle('success-card--show');
    emailInputElement.value = "";
    emailValue = ""
})



