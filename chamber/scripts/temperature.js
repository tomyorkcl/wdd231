document.addEventListener("DOMContentLoaded", async () => {
    const apiKey = "4d3d1cfc866311e242f5f2812c10e385"; 
    const city = "Santiago"; 
    const country = "CL"; 

    try {
        // Get data from weather
        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${apiKey}`);
        const weatherData = await weatherRes.json();

        // Show weather
        document.getElementById("weather").innerHTML = `
            <h3>Weather in ${city}</h3>
            <p><strong>Temperature:</strong> ${weatherData.list[0].main.temp}°C</p>
            <p><strong>Description:</strong> ${weatherData.list[0].weather[0].description}</p>
        `;
    } catch (error) {
        console.error("Error obtaining weather:", error);
    }

    // Data members
    const members = [
        { name: "Tech Solutions", membership: "Gold", phone: "1234", website: "https://tech.com", image: "lion-logo.png" },
        { name: "Green Energy", membership: "Silver", phone: "5678", website: "https://green.com", image: "green-logo.png" },
        { name: "Fast Logistics", membership: "Gold", phone: "9101", website: "https://fast.com", image: "labour-logo.png" },
        { name: "Marketing Pro", membership: "Gold", phone: "1234", website: "https://tech.com", image: "rocket-logo.png" },
        { name: "Security Experts", membership: "Silver", phone: "5678", website: "https://green.com", image: "security-logo.png" },
        { name: "CloudTech", membership: "Gold", phone: "9101", website: "https://fast.com", image: "cloud-logo.png" },
        { name: "Smart Finances", membership: "Gold", phone: "9101", website: "https://fast.com", image: "finances-logo.png" }
    ];

    // show 2 or 3 members randomnly
    const spotlight = members.filter(m => m.membership === "Gold" || m.membership === "Silver")
                             .sort(() => 0.5 - Math.random())
                             .slice(0, 2 + Math.floor(Math.random() * 2));

    document.getElementById("spotlight").innerHTML = spotlight.map(member => `
        <div class="member-card">
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit site</a></p>
        </div>
    `).join("");
});