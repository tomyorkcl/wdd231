document.addEventListener("DOMContentLoaded", async () => {
    const apiKey = "4d3d1cfc866311e242f5f2812c10e385"; 
    const city = "Santiago"; 
    const country = "CL"; 

    try {
        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${apiKey}`);
        const weatherData = await weatherRes.json();

        const currentWeather = weatherData.list[0];
        document.getElementById("weather").innerHTML = `
            <h3>Weather in ${city}</h3>
            <p><strong>Temperature:</strong> ${currentWeather.main.temp}°C</p>
            <p><strong>Description:</strong> ${currentWeather.weather[0].description}</p>
        `;

        let forecastHTML = '<h3>3-Day Forecast</h3>';
        for (let i = 0; i < 3; i++) {
            const day = weatherData.list[i * 8];
            forecastHTML += `
                <p><strong>Day ${i + 1}:</strong> ${day.main.temp}°C, ${day.weather[0].description}</p>
            `;
        }
        document.getElementById("forecast").innerHTML = forecastHTML;
    } catch (error) {
        console.error("Error obtaining weather:", error);
    }

    const members = [
        { name: "Tech Solutions", membership: "Gold", phone: "1234", address: "123 Tech St.", website: "https://tech.com", image: "lion-logo.png" },
        { name: "Green Energy", membership: "Silver", phone: "5678", address: "456 Green Ave.", website: "https://green.com", image: "green-logo.png" },
        { name: "Fast Logistics", membership: "Gold", phone: "9101", address: "789 Speed Rd.", website: "https://fast.com", image: "labour-logo.png" },
        { name: "Marketing Pro", membership: "Gold", phone: "1234", address: "123 Ad St.", website: "https://marketing.com", image: "rocket-logo.png" },
        { name: "Security Experts", membership: "Silver", phone: "5678", address: "321 Safe St.", website: "https://security.com", image: "security-logo.png" },
        { name: "CloudTech", membership: "Gold", phone: "9101", address: "654 Cloud Dr.", website: "https://cloudtech.com", image: "cloud-logo.png" },
        { name: "Smart Finances", membership: "Gold", phone: "9101", address: "987 Finance Blvd.", website: "https://finances.com", image: "finances-logo.png" }
    ];

    const spotlight = members.filter(m => m.membership === "Gold" || m.membership === "Silver")
                             .sort(() => 0.5 - Math.random())
                             .slice(0, 2 + Math.floor(Math.random() * 2));

    document.getElementById("spotlight").innerHTML = spotlight.map(member => `
        <div class="member-card">
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p class="membership-level"><strong>Membership:</strong> ${member.membership}</p>
        </div>
    `).join("");
});