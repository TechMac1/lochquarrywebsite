// contact form js for about page
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    console.log("Script Loaded");

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            // Log the values to the console
            console.log("Name: " + name);
            console.log("Email: " + email);
            console.log("Phone: " + phone);
            console.log("Message: " + message);
        });
    } else {
        console.error("Form not found");
    }
});
//  date time for site in footer
document.getElementById('dt'). innerHTML = new Date();

// cookies banner
window.onload = function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookieConsent').style.display = 'block';
    }
};

// accept cookies action
document.getElementById('acceptCookies').addEventListener('click', function() {

    document.getElementById('cookieConsent').style.display = 'none';
// logic for accept 
    
    localStorage.setItem('cookiesAccepted', 'true');
});
// booking form
