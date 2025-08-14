// mail.js

// Load and initialize EmailJS
(function() {
    emailjs.init("h5LWzY8YUESb4sZbS"); // Your Public Key
})();

// Function to send email
function sendEmail(name, email, message) {
    emailjs.send("service_cvvr3vn", "template_6xgms6a", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        console.log("✅ Email sent successfully!", response);
        alert("Email sent successfully!");
    })
    .catch(function(error) {
        console.error("❌ Email send failed:", error);
        alert("Error sending email: " + JSON.stringify(error));
    });
}
