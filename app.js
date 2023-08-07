function validateForm() {

  var errorMessages = document.getElementById("errorMessages");
  errorMessages.innerHTML = "";
 
  // Get form input values
  var name = document.getElementById("name").value;
  var user = document.getElementById("user").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var contact = document.getElementById('contact').value;

  
  var errors = [];


  if (name === "") {
    errors.push("Name is required");
  }

  if (user === "") {
    errors.push("userId is required");
  }


  if (email === "") {
    errors.push("Email is required");
  }

  if (password === "") {
    errors.push("Password is required");
  }

  if(contact === ""){
    errors.push("Password is required");
  }

 
  if (errors.length > 0) {
    for (var i = 0; i < errors.length; i++) {
      displayError(errors[i]);
    }
    return false;
  }
  return true;
}

function displayError(message) {
  var errorMessages = document.getElementById("errorMessages");
  var errorParagraph = document.createElement("p");
  errorParagraph.innerText = message;
  errorMessages.appendChild(errorParagraph);
}
