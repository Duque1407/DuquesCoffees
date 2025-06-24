function iniciarMap() {
    console.log("iniciarMap() ejecutada"); // Verificar si se está llamando

var coord = [21.8823, -102.2826]; 

    // Crea el mapa con Leaflet.js
    var map = L.map('map').setView(coord, 10); // "10" es el nivel de zoom

    // Carga el mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Añade un marcador en las coordenadas
    L.marker(coord).addTo(map)
        .bindPopup("<b>Hola clientes!</b><br />Vengan a comprar aqui")
        .openPopup();
}

// Llamar a la función al final de tu archivo JS
window.onload = function() {
    iniciarMap(); // Aseguramos que la función se llame cuando la página se haya cargado completamente
};
