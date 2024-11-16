$(document).ready(function() {
    // Highlight form field on focus
    $('input, textarea').focus(function() {
    $(this).css({
    'border-color': '#007bff',
    'box-shadow': '0 0',
    'box-shadow': '0 0 5px rgba(0, 123, 255, 0.5)'
    });
    });
    // Remove highlight on blur
    $('input, textarea').blur(function() {
    $(this).css({
    'border-color': '#ced4da',
    'box-shadow': 'none'
    });
    });
    // Form validation on submit
    $('#contactForm').submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting
    // Get the values of the input fields
    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();
    // Simple validation
    if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
    }
    // Simple email validation using regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
    }
    // If everything is fine, you can send the form data using AJAX or other methods here
    alert('Message sent successfully!'); // For demonstration purposes
    // Reset the form fields
    $('#contactForm')[0].reset();
    });
   })