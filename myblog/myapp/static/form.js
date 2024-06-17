function validateForm() {
    
    let firstName = document.querySelector("input[name='firstName']").value;
    let lastName = document.querySelector("input[name='lastName']").value;
    let email = document.querySelector("input[name='email']").value;
    let genderElements = document.querySelectorAll("input[name='gender']");
    let message = document.querySelector("textarea[name='message']").value;

   
    if (firstName == "" || lastName == "" || email == "" || message == "") {
        alert("First name, last name, email, and message must be filled out");
        return false;
    }

    
    let genderSelected = false;
    for (let i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            genderSelected = true;
            break;
        }
    }

    if (!genderSelected) {
        alert("Please select a gender");
        return false;
    }
    

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
   
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    
    alert("Success!");
    
    return true;
}
