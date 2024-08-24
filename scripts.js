// Mostrar la hora actual
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeElement.textContent = `Hora: ${hours}:${minutes}:${seconds}`;
}

// Mostrar la fecha actual
function updateDate() {
    const dateElement = document.getElementById('date');
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    dateElement.textContent = `Fecha: ${day}/${month}/${year}`;
}

// Obtener y mostrar la ubicación actual
function updateLocation() {
    const locationElement = document.getElementById('location');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude.toFixed(2);
            const long = position.coords.longitude.toFixed(2);
            locationElement.textContent = `Ubicación: Latitud ${lat}, Longitud ${long}`;
        }, () => {
            locationElement.textContent = 'Ubicación: No disponible';
        });
    } else {
        locationElement.textContent = 'Ubicación: No soportada por el navegador';
    }
}

// Actualizar la hora, fecha y ubicación cada segundo
setInterval(updateTime, 1000);
setInterval(updateDate, 1000);
updateLocation();
