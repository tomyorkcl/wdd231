document.addEventListener("DOMContentLoaded", function() {
    // Fetch the JSON data from the file
    fetch('data/discover.json')
        .then(response => response.json())
        .then(items => {
            // Load items dynamically into the grid
            const container = document.getElementById('cards-container');
            items.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <figure>
                        <img src="${item.image}" alt="${item.name}">
                    </figure>
                    <h2>${item.name}</h2>
                    <address>${item.address}</address>
                    <p>${item.description}</p>
                    <button onclick="window.location='#'">Learn More</button>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error loading JSON data:', error);
        });

    // Handle localStorage for last visit message
    const lastVisit = localStorage.getItem("lastVisit");
    const currentVisit = new Date();
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';

    if (!lastVisit) {
        sidebar.innerHTML = `<p>Welcome! Let us know if you have any questions.</p>`;
    } else {
        const daysSinceLastVisit = Math.floor((currentVisit - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            sidebar.innerHTML = `<p>Back so soon! Awesome!</p>`;
        } else {
            sidebar.innerHTML = `<p>You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? 'day' : 'days'} ago.</p>`;
        }
    }

    document.body.appendChild(sidebar);

    // Store current date for next visit
    localStorage.setItem("lastVisit", currentVisit.toISOString());
});