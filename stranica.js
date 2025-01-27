function toggleNav() {
                var navbar = document.getElementById("navbar");
                if (navbar.className === "navbar") {
                    navbar.className += " responsive";
                } else {
                    navbar.className = "navbar";
                }
            }

/*function pozovite(){
    document.getElementById("pozovite").addEventListener("click", function() {
    window.location.href = "tel:+38765587876";  // Replace with the actual phone number
});
} */     

document.getElementById("poslati").addEventListener("click", function() {
    // Get the message from the textarea
    var message = document.getElementById("message").value;

    // Specify the recipient email, subject, and body of the email
    var email = "momirovic@gmail.com"; // The recipient's email address
    var subject = "Poruka sa Web stranice"; // The subject of the email

    // Create the mailto link
    var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);

    // Open the user's email client with the mailto link
    window.location.href = mailtoLink;
});
