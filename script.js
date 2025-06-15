document.addEventListener('DOMContentLoaded', function() {
            // Select the form and feedback div
            const form = document.getElementById('registration-form');
            const feedbackDiv = document.getElementById('form-feedback');
            
            // Add submit event listener
            form.addEventListener('submit', function(event) {
                // Prevent form submission
                event.preventDefault();
                
                // Get and trim input values
                const username = document.getElementById('username').value.trim();
                const email = document.getElementById('email').value.trim();
                const password = document.getElementById('password').value.trim();
                
                // Initialize validation variables
                let isValid = true;
                const messages = [];
                
                // Validate username
                if (username.length < 3) {
                    isValid = false;
                    messages.push("Username must be at least 3 characters long.");
                }
                
                // Validate email
                if (!email.includes('@') || !email.includes('.')) {
                    isValid = false;
                    messages.push("Email must contain '@' and '.' characters.");
                }
                
                // Validate password
                if (password.length < 8) {
                    isValid = false;
                    messages.push("Password must be at least 8 characters long.");
                }
                
               // Make feedbackDiv visible
                feedbackDiv.style.display = "block";
                
                if (isValid) {
                    // Success case
                    feedbackDiv.textContent = "Registration successful!";
                    feedbackDiv.style.color = "#28a745";
                    
                    // form.submit();
                } else {
                    // Error case
                    feedbackDiv.innerHTML = messages.join('<br>');
                    feedbackDiv.style.color = "#dc3545";
                }
            });
        });