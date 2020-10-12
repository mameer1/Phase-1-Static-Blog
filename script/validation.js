function validateForm() {
    var name = document.forms["contact-form"]["name"].value;
    var email = document.forms["contact-form"]["email"].value;
    var subject = document.forms["contact-form"]["subject"].value;
    var message = document.forms["contact-form"]["message"].value;
    if (name == "" || email == "" || subject == "" || message == "") {
      alert("All fields must be filled out");
      return false;
    }
    alert("Sent!")
  }