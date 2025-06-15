  // Asynchronous function to fetch and display user data
        async function fetchUserData() {
            // API endpoint
            const apiUrl = 'https://jsonplaceholder.typicode.com/users';
            
            // Get the container element
            const dataContainer = document.getElementById('api-data');
            
            try {
                // Fetch data from API
                const response = await fetch(apiUrl);
                
                // Check if response is OK
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                // Parse JSON data
                const users = await response.json();
                
                // Clear loading message
                dataContainer.innerHTML = '';
                
                // Create list element
                const userList = document.createElement('ul');
                
                // Loop through users and create list items
                users.forEach(user => {
                    const listItem = document.createElement('li');
                    listItem.textContent = user.name;
                    userList.appendChild(listItem);
                });
                
                // Append the list to container
                dataContainer.appendChild(userList);
                
            } catch (error) {
                // Handle errors
                console.error('Error fetching user data:', error);
                dataContainer.innerHTML = '';
                dataContainer.textContent = 'Failed to load user data.';
                dataContainer.className = 'error';
            }
        }
        
        // Run the function when DOM is loaded
        document.addEventListener('DOMContentLoaded', fetchUserData);