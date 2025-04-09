import { initializePhysiciansDb, PhysicianDB } from './physicianDb.js'; 

// mock database
initializePhysiciansDb();

// event listener to the login form
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // validate credentials
    const physicians = PhysicianDB.getAll();
    const physician = physicians.find(p => p.username === username && p.password === password);

    if (physician) { // Successful login
        alert(`Welcome, ${physician.name}!`);
        window.location.href = 'physician_dashboard.html'; // Redirect to dashboard
    } 
    
    else { // Invalid credentials
        alert('Invalid username or password. Please try again.');
    }
});