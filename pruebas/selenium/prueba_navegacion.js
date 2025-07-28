const { Builder, By, until } = require('selenium-webdriver');

(async () => {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // INICIO
        console.log("Visitando página de inicio...");
        await driver.get('https://duque-s-coffees.web.app/');
        const bienvenida = await driver.wait(until.elementLocated(By.xpath("//h1[contains(text(), \"Bienvenido\")]")), 5000);
        console.log("Inicio cargado correctamente:", await bienvenida.getText());

        // MENÚ
        console.log("Visitando página de menú...");
        await driver.get('https://duque-s-coffees.web.app/menu');
        const tituloMenu = await driver.wait(until.elementLocated(By.css("h1, h2, h3")), 5000);
        console.log("Menú detectado con título:", await tituloMenu.getText());

        // GALERÍA
        console.log("Visitando galería...");
        await driver.get('https://duque-s-coffees.web.app/galeria');
        const imgGaleria = await driver.wait(until.elementLocated(By.css("section#galeria img")), 5000);
        console.log("Imagen de galería cargada con alt:", await imgGaleria.getAttribute("alt"));

        // UBICACIÓN
        console.log("Visitando página de ubicación...");
        await driver.get('https://duque-s-coffees.web.app/ubicacion');
        const mapa = await driver.wait(until.elementLocated(By.id("map")), 5000);
        console.log("Mapa Leaflet.js detectado correctamente.");



        // HORARIOS
        console.log("Visitando página de horarios...");
        await driver.get('https://duque-s-coffees.web.app/horarios');
        const horarios = await driver.wait(until.elementLocated(By.css("table, ul, .horarios")), 5000);
        console.log("Sección de horarios detectada correctamente.");

        console.log("🎉 SIIIIII!!!! TODAS LAS PRUEBAS FINALIZADAS CON ÉXITO.");
    } catch (error) {
        console.error("ERROR durante la prueba:", error.message);
    } finally {
        await driver.quit();
    }
})();
