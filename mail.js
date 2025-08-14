(function() {
    emailjs.init("h5LWzY8YUESb4sZbS"); // Your Public Key
})();

function sendWelcomeEmail(name, email) {
    emailjs.send("service_cvvr3vn", "template_6xgms6a", {
        from_name: "Excellent_Develops",
        to_name: name,
        to_email: email,
        message: `Hi ${name}, welcome to Excellent_Develops!`
    })
    .then(function(response) {
        console.log("✅ Welcome email sent!", response);
    })
    .catch(function(error) {
        console.error("❌ Failed to send welcome email:", error);
    });
}
