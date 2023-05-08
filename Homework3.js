/** 
Name: James Walker Bruckschen
Name of file: homework2.JS
Date created: 2023-02-02
Date last edited: 2023-03-31
Description: This is assignment two where I create a form for hiring.*/


date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("datetime").innerHTML = month + "/" + day + "/" + year;

// get current date and time
var dateTime = new Date().toLocaleString();
      
// set the date and time in the span element with id "datetime"
document.getElementById("datetime").innerHTML = dateTime;

var fileTypeSelect = document.getElementById("suffix");
var selectedFileType = fileTypeSelect.value;

function convertToLowerCase() {
    // Get the input element
    var input = document.getElementById("username");

    // Convert to lowercase
    var output = input.value.toLowerCase();

    // Update the input value
    input.value = output;
  }

  

const d = new Date() ;
let text = d. toLocaleDateString();
document. getElementById ("today"). innerHTML = text;

function dobValidation() {
  var dateInput = document.getElementById('dob'); 
  date = new Date(dateInput.value);
var maxAge = new Date().setFullYear(new Date().getFullYear() - 120); 
var alert = document.getElementById("dobAlert");

if (date > new Date() || date < new Date(maxAge)) {
alert.innerHTML = "Cannot be in the future or more than 120 years ago";
dateInput.value = '';
return false;
}else {
alert.innerHTML = '';
return true;
}
}

function phoneValidation() {
  const phoneNumberInput = document.getElementById('phoneNum');
  let phone = phoneNumberInput.value;
  const cleaned = ('' + phone).replace(/\D/g, '');
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(cleaned)) {
      document.getElementById("PhoneAlert").innerHTML = "Must be a valid phone number (XXX) XXX-XXXX";
      return false;
  }
  const formattedPhone = '(' + cleaned.substring(0, 3) + ') ' + cleaned.substring(3, 6) + '-' + cleaned.substring(6);
  phoneNumberInput.value = formattedPhone;
  document.getElementById("PhoneAlert").innerHTML = "";
  return true;
}


    function checkform()
    {
        var f = document.forms["theform"].elements;
        var cansubmit = true;

        for (var i = 0; i < f.length; i++) {
            if (f[i].value.length == 0) cansubmit = false;
        }

        if (cansubmit) {
            document.getElementById('submitbutton').disabled = false;
        }
    }
 




function reviewForm() {
    var firstName = document.getElementById("firstName").value;
    var middleInitial = document.getElementById("midInitial").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var ssn = document.getElementById("ssn").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phoneNum").value;
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var checkbox1 = document.getElementById("ExcelYes","ExcelNo").checked;
    var checkbox2 = document.getElementById("DaysYes","DaysNo").checked;
    var checkbox3 = document.getElementById("HTMLyes","HTMLno").checked;
    var checkbox4 = document.getElementById("JavaYes","JavaNo").checked;
    var checkbox4 = document.getElementById("PizzaYes","PizzaNo").checked;

    var radio1 = document.getElementById("radio1").checked;
    var radio2 = document.getElementById("radio2").checked;
    var radio3 = document.getElementById("radio3").checked;
    var slider = document.getElementById("slider").value;
    var textbox = document.getElementById("textbox").value;

    var output = "<h2>Review Information:</h2>";
    output += "<p>First Name: " + firstName + "</p>";
    output += "<p>Middle Initial: " + middleInitial + "</p>";
    output += "<p>Last Name: " + lastName + "</p>";
    output += "<p>Date of Birth: " + dob + "</p>";
    output += "<p>Social Security: " + ssn + "</p>";
    output += "<p>Email: " + email + "</p>";
    output += "<p>Phone: " + phone + "</p>";
    output += "<p>Address 1: " + address1 + "</p>";
    output += "<p>Address 2: " + address2 + "</p>";
    output += "<p>City: " + city + "</p>";
    output += "<p>State: " + state + "</p>";
    output += "<p>Zip Code: " + zip + "</p>";
    output += "<p>Checkbox 1: " + checkbox1 + "</p>";
    output += "<p>Checkbox 2: " + checkbox2 + "</p>";
    output += "<p>Checkbox 3: " + checkbox3 + "</p>";
    output += "<p>Checkbox 4: " + checkbox4 + "</p>";
    output += "<p>Radio Button 1: " + radio1 + "</p>";
    output += "<p>Radio Button 2: " + radio2 + "</p>";
    output += "<p>Radio Button 3: " + radio3 + "</p>";
    output += "<p>Slider: " + slider + "</p>";
    output += "<p>Text Box: " + textbox + "</p>";

    document.getElementById("output-area").innerHTML = output;
  }


  function getData() {
    var form = document.getElementById("Applify");
    var outputTableBody = document.getElementById("outputTableBody");
    var row, dataNameCell, valueCell;
  
    outputTableBody.innerHTML = "";
  
    for (var i = 0; i < form.elements.length; i++) {
      if (form.elements[i].value !== "") {
        row = document.createElement("tr");
        dataNameCell = document.createElement("td");
        valueCell = document.createElement("td");
  
        dataNameCell.textContent = form.elements[i].name;
  
        if (form.elements[i].type === "checkbox") {
          valueCell.textContent = form.elements[i].checked ? "checked" : "unchecked";
        } else if (form.elements[i].type === "radio") {
          if (form.elements[i].checked) {
            valueCell.textContent = form.elements[i].value;
          }
        } else {
          valueCell.textContent = form.elements[i].value;
        }
  
        row.appendChild(dataNameCell);
        row.appendChild(valueCell);
        outputTableBody.appendChild(row);
      }
    }
  }

function dobValidation() {

        var dateInput = document.getElementById('dob');
        date = new Date(dateInput.value);
      var maxAge = new Date().setFullYear(new Date().getFullYear() - 120);
      var alert = document.getElementById("dobAlert");
    

    if (date > new Date() || date < new Date(maxAge)) {
      alert.innerHTML = "Cannot be in the future or more than 120 years ago";
      dateInput.value = '';
      return false;
    }else {
      alert.innerHTML = '';
      return true;
      }
    }




function lastNameValidation() {
          firstName = document.getElementById("lastName").value;
          var namePattern3 = /[a-zA-Z'-]+( the (2nd|3rd|4th|5th)){0,1}(\|\|\|\|\|){0,1}/;
  
          if (firstName == ''){
              document.getElementById("LNameAlert").innerHTML = "Last Name must not be left blank!";
              return false;
          } else if(firstName != ''){
              if(!firstName.match(namePattern3)){
                  document.getElementById("LNameAlert").innerHTML = "Letters, apostrophes, and dashes only!";
                  return false;
              } else if(firstName.length < 1){
                  document.getElementById("LNameAlert").innerHTML = "Last name must contain at least 1 charactrer!";
                  return false;
              } else if(firstName.length > 30){
                  document.getElementById("LNameAlert").innerHTML = "Last name must be less than 30!";
                  return false;
              }
               else{
                  document.getElementById("LNameAlert").innerHTML = "";
                  return true;
              }
          }
      }

  function firstNameValidation() {
        firstName = document.getElementById("firstName").value;
        var namePattern = /^[A-Za-z'-]+$/;
    
     
    
        if (firstName == ''){
            document.getElementById("FNameAlert").innerHTML = "First Name must not be left blank"
            return false;
        } else if(firstName != ''){
            if(!firstName.match(namePattern)){
                document.getElementById("FNameAlert").innerHTML = "Letters, apostrophes, and dashes only!";
                return false;
            } else if(firstName.length < 1){
                document.getElementById("FNameAlert").innerHTML = "First name must contain at least 1 charactrer"
                return false;
            } else if(firstName.length > 30){
                document.getElementById("FNameAlert").innerHTML = "First name must be less than 30!"
                return false;
            }
             else{
                document.getElementById("FNameAlert").innerHTML = "";
                return true;
            }
        }
    }


    function emailValidation() {
      email = document.getElementById('email').value;
      var emailpattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (email == ''){
          document.getElementById("EAlert").innerHTML = "Email must be entered!";
          return false;
      }else if (!email.match(emailpattern)){
          document.getElementById("EAlert").innerHTML = "Email address must be valid!";
          return false;
      }else {
          document.getElementById("EAlert").innerHTML = "";
          return true
      }
  }

  
  function ssnValidation() {
    const ssnInput = document.getElementById('ssn');
    let ssn = ssnInput.value;
    if (ssn.trim() === '') {
        document.getElementById("ssnAlert").innerHTML = "Must not be empty.";
        return false;
    }
    const cleaned = ssn.replace(/\D/g, '');
    const socialPattern = /^\d{9}$/;
    if (!socialPattern.test(cleaned)) {
        document.getElementById("ssnAlert").innerHTML = "Must match the following format: xxx-xx-xxxx";
        return false;
    }
    const formattedSocial = cleaned.substring(0, 3) + '-' + cleaned.substring(3, 5) + '-' + cleaned.substring(5);
    ssnInput.value = formattedSocial;
    document.getElementById("ssnAlert").innerHTML = "";
    return true;
}

  
 
  function userValidation() {
    userID = document.getElementById('username').value;
    var userpattern = /^\S+[A-Za-z_-][A-Za-z0-9_-]+$/;

    if (userID == ''){
        document.getElementById("UserAlert").innerHTML = "User ID must be entered!";
        return false;
    }else if (!userID.match(/^[^0-9][a-zA-Z_\-0-9]{0,20}$/)){
        document.getElementById("UserAlert").innerHTML = "5 to 20 characters, no special charicters, cannot start with a number";
        return false;
    }else {
        document.getElementById("UserAlert").innerHTML = "";
        return true
    }
}

/**function zipValidation() {
  const zipInput = document.getElementById("zip").value;
  const zipRegex = /^\d{5}(-\d{4})?$/;

  return zipRegex.test(zipInput);
}
const zipInput = document.getElementById("zip");
const zipAlert = document.getElementById("zipAlert");

zipInput.addEventListener("input", () => {
  let zipValue = zipInput.value.trim();
  const isValidZip = zipValidation(zipValue);
  if (isValidZip) {
    // truncate zip code to first 5 digits
    zipValue = zipValue.slice(0, 5);
    zipInput.value = zipValue;

    zipInput.setCustomValidity("");
    zipAlert.innerHTML = "";
  } else {
    zipInput.setCustomValidity(
      "Must enter a valid zip code (5 digits i.e. 12345)."
    );
    zipAlert.innerHTML =
      "Must enter a valid zip code (5 digits i.e. 12345).";
  }
});**/



function mNameValidation() {

        midAlert = document.getElementById("midInitial").value;
    
        let namePattern2 = /[A-Z]/;
    
    
    
    
        if (!midAlert.match(namePattern2)) {
            document.getElementById("midAlert").innerHTML = "Capital Letters Only!";
            return false;
        } else if (midAlert.length !== 1) {
            document.getElementById("midAlert").innerHTML = "Middle initial must contain only 1 character"
            return false;
        }
        else {
            document.getElementById("midAlert").innerHTML = "";
            return true;
    
        }
    
    }
   


    function passwordValidation(){
        userpassword = document.getElementById('password1').value;
        userID = document.getElementById('username').value;
        var userpasswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
        var alert = document.getElementById('password-error');
    
        if(userpassword == ''){
            alert.innerHTML = "Field must not be empty";
            return false;
    
        }else if (userpassword == userID){
                 alert.innerHTML = "Password must not match UserID.";
                 return false;
            } else if (userpassword != ''){
            if(!userpassword.match(userpasswordPattern)){
                alert.innerHTML = "Password must contain 1 uppercase, 1 lowercase, 1 special character, and 1 digit.";
                return false;
            } else if (userpassword.length < 8){
                alert.innerHTML = "Password must be at least 8 characters.";
                return false;
            } else if (userpassword.length > 30){
                alert.innerHTML = "Password must notexceedd 30 characters.";
    
            } else {
                alert.innerHTML = "";
                return true;
    
            }
    
        }
    }


    function password2Validation() {
      pwd1 = document.getElementById("password1").value;
      pwd2 = document.getElementById("password2").value;
    
      if (!pwd2) {
        document.getElementById("password-alert2").innerHTML =
          "Please confirm your password.";
        return false;
      }
    
      if (pwd2 !== pwd1) {
        document.getElementById("password-alert2").innerHTML =
          "Confirm Password does not match password.";
        return false;
      } else if (pwd2 == pwd1) {
        document.getElementById("password-alert2").innerHTML = "";
        return true;
      }
    }    



function sliderValidation(x) {
  document.getElementById('D-value').innerHTML = x;
}
    
const validations = [
  firstNameValidation,
  mNameValidation,
  lastNameValidation,
  ssnValidation,
  zipValidation,
  emailValidation,
  dobValidation,
  userValidation,
  phoneValidation,
  passwordValidation,
  password2Validation,
];
function checkValidation() {
  for (let func of validations) {
    console.log(func(), func.name)

    if (!func()) {
      document.getElementById("subAlert").innerHTML =
        "Please fix your fields and re-submit.";
      return false;
    }
  }
  return true;
}

function validatePasswords() {
  var password1 = document.getElementById("password1").value;
  var password2 = document.getElementById("password2").value;
  var subAlert = document.getElementById("subAlert");
  
  if (password1 != password2) {
    subAlert.innerHTML = "Passwords do not match";
    return false;
  } else {
    subAlert.innerHTML = "";
    return true;
  }
}

function checkValidation() {
  // your existing code for form validation goes here
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}