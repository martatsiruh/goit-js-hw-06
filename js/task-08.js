const formRef = document.querySelector(".login-form");
console.log(formRef);

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;
    
    if (email.value === '' || password === '') {
        return console.error("Please fill all the free fields!")
    };

    console.log(`Login: ${email.value}, Password ${password.value}`);
    event.currentTarget.reset();
}