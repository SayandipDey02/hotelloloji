document.getElementById('flight-search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    
    // Simple form validation (e.g., check if inputs are empty)
    if (!from || !to || !departureDate) {
        alert('Please fill in all required fields.');
        return;
    }

    // In a real application, you would send these values to the server
    alert(`Searching flights from ${from} to ${to} on ${departureDate}${returnDate ? ' returning on ' + returnDate : ''}`);
});
