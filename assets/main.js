let newsletterCard = document.querySelector(".newsletter__signup-card");
let successCard = document.querySelector(".success-card");
let signUpButton = document.querySelector("#signup-button");
let dismissButton = document.querySelector('#dismiss');
let errorBox = document.querySelector('#email-error');
let emailSpan = document.querySelector('.sub-email');
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
        emailSpan.innerHTML = emailValue;
        
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

emailInputElement.addEventListener('click', function (e){
    errorBox.textContent = ""
    emailInputElement.classList.remove('signup-card__form-email--error');
});



// function updateClassBasedOnScreenWidth() {
//     let headingElements = document.querySelectorAll('.card-heading');
//     let isBiggerScreen = window.matchMedia('(min-width: 600px)').matches;
//     headingElements.forEach((element) => {
//         if (element) {
//             if (isBiggerScreen) {
//               element.classList.add('text-preset-1-desktop'); // Replace 'desktop-class' with your desired class
//             } else {
//               element.classList.remove('.text-preset-1-desktop');
//             }
//           }
//     })
//   }
  
//   // Call the function initially
//   updateClassBasedOnScreenWidth();
  
//   // Add an event listener for screen width changes
//   window.addEventListener('resize', updateClassBasedOnScreenWidth);