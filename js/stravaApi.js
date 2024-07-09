// Code cobbled together from strava user guide and forums

document.addEventListener('DOMContentLoaded', function() {
    const accessToken = '19c67f3ebd6711e5517822373a23a16b09a4d121'; // Access tokens expire after 6 hours, how to sort this?

// Having a problem getting Stava API's to work, they seem to require the user to log in themselves
// to access the data using Strava's OAuth 2.0, not sure how to implement OAuth 2.0

// Strava API endpoint to fetch activities, focus on all activities for a full year
    const apiEndpoint = 'https://www.strava.com/api/v3/athlete/activities';
    const startDate = new Date('2024-01-01').getTime() / 1000; // Convert to Unix timestamp
    const endDate = new Date('2024-12-31').getTime() / 1000; // Convert to Unix timestamp

// check for API errors and return appropriate message
    fetch(`${apiEndpoint}?after=${startDate}&before=${endDate}&per_page=200`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const totalDistance = calculateTotalDistance(data);
        displayTotalDistance(totalDistance);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('totalDistance').innerText = 'Failed to load distance.';
    });
});

// Calculate the total distance and return the value 
function calculateTotalDistance(activities) {
    return activities.reduce((total, activity) => total + activity.distance, 0);
}

function displayTotalDistance(distance) {
    const distanceInKm = (distance / 1000).toFixed(2); // Convert to kilometers
    document.getElementById('totalDistance').innerText = `Total Distance in 2024: ${distanceInKm} km`;
}