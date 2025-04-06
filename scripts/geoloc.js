
document.addEventListener("DOMContentLoaded", () => {
    const locationDiv = document.getElementById("userLocation");
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                locationDiv.textContent = `Votre position approximative : (${latitude.toFixed(2)}, ${longitude.toFixed(2)})`;
            },
            error => {
                locationDiv.textContent = "Impossible d’obtenir votre position.";
            }
        );
    } else {
        locationDiv.textContent = "La géolocalisation n’est pas supportée par votre navigateur.";
    }
});
