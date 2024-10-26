let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

// Default timezone set to the local time
let selectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// List of countries with their respective timezones
const countries = [
    { name: 'USA (New York)', timezone: 'America/New_York' },
    { name: 'UK (London)', timezone: 'Europe/London' },
    { name: 'Japan (Tokyo)', timezone: 'Asia/Tokyo' },
    { name: 'Australia (Sydney)', timezone: 'Australia/Sydney' },
    { name: 'India (Kolkata)', timezone: 'Asia/Kolkata' },
    { name: 'South Africa (Johannesburg)', timezone: 'Africa/Johannesburg' },
    { name: 'France (Paris)', timezone: 'Europe/Paris' },
    { name: 'China (Beijing)', timezone: 'Asia/Shanghai' },
    { name: 'Brazil (São Paulo)', timezone: 'America/Sao_Paulo' },
    { name: 'Russia (Moscow)', timezone: 'Europe/Moscow' },
    { name: 'Canada (Toronto)', timezone: 'America/Toronto' },
    { name: 'Germany (Berlin)', timezone: 'Europe/Berlin' },
    { name: 'UAE (Dubai)', timezone: 'Asia/Dubai' },
    { name: 'Mexico (Mexico City)', timezone: 'America/Mexico_City' },
    { name: 'Singapore', timezone: 'Asia/Singapore' },
    { name: 'Argentina (Buenos Aires)', timezone: 'America/Argentina/Buenos_Aires' },
    // Add more countries and timezones as needed
];

// Populate dropdown dynamically
const dropdown = document.getElementById('countryDropdown');
countries.forEach(country => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'dropdown-item';
    a.href = '#';
    a.setAttribute('data-timezone', country.timezone);
    a.textContent = country.name;
    li.appendChild(a);
    dropdown.appendChild(li);
});

// Function to update the clock
function updateClock() {
    let currentTime = new Date().toLocaleString('en-US', { timeZone: selectedTimezone });
    let time = new Date(currentTime);
    
    let hours = (time.getHours() < 10 ? "0" : "") + time.getHours();
    let minutes = (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();
    let seconds = (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
    
    hrs.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Event listener for the dropdown selection
document.getElementById('countryDropdown').addEventListener('click', function(event) {
    if (event.target.matches('.dropdown-item')) {
        // Get the selected timezone from the dropdown item's data attribute
        selectedTimezone = event.target.getAttribute('data-timezone');
        
        // Update the clock immediately when the user selects a timezone
        updateClock();
    }
});
