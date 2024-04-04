// Initialize EmailJS with your user ID
emailjs.init("qkPxfUIbq-r8VoSfg");

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    let formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send("78708423", "template_q86q5f5", formData)
        .then(function(response) {
            alert('Message sent successfully!');
        }, function(error) {
            console.error('Error sending message:', error);
            alert('An error occurred while sending the message.');
        });
});
