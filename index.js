function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mercy@gmail.com",
        Password : "password",
        To : 'vobikot891@teasya.com',
        From : document.getElementById("email.value"),
        Subject : "Message from inquiry",
        Body : "Name"+document.getElementById("name").value
              + "Email"+document.getElementById("email").value
              + "Phone no."+document.getElementById("phone").value
              + "Message"+document.getElementById("message").value
    }).then(
      message => alert("message send successfully")
    );
}


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the form, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

