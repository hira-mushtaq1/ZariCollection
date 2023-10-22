//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//  function subscribe() {
//    // Get the email input field value
//    var name = document.getElementById("name").value
//    var email = document.getElementById("email").value;

//    // You can add validation here to check the email format, etc.

//    // For this example, we'll simply display an alert with the entered email.
//    alert("Subscribed with email: " + email);

//    // Clear the email input field
//    document.getElementById("email").value = "";
//    document.getElementById("name").value = "";
//  }