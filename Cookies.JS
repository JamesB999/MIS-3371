function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + expiryDays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) == " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) == 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  }

  var firstName = getCookie("firstName");
  if (firstName != "") {
    document.getElementById("greetings").innerHTML =
      "Hello, " +
      firstName +
      "! <br><a href='#' id='new-user'>Not " +
      firstName +
      "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
      setCookie("firstName", "", -1);
      location.reload();
    });
  } else {
    var nameInput = prompt("Please enter your first name:");
    document.getElementById("greetings").innerHTML = "Welcome, " + nameInput;

    if (nameInput != "" && nameInput != null) {
      setCookie("firstName", nameInput, 30);
    }
  }

  var firstNameInput = document.getElementById("fname");
  if (firstName != "") {
    firstNameInput.value = firstName;
  }
  firstNameInput.addEventListener("input", function () {
    setCookie("firstName", firstNameInput.value, 30);
  });