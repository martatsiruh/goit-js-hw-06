const formRef = document.querySelector(".login-form");
console.log(formRef);

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    let formData = {};
    const { elements: { email, password } } = event.currentTarget;
    
    if (email.value === '' || password.value === '') {
        return alert("Please fill all the free fields!");
    };

    formData.email = `$(email.value)`;
    formData.password = `$(password.value)`;
    console.log(formData);

    //console.log(`Login: ${email.value}, Password ${password.value}`);
    event.currentTarget.reset();
}