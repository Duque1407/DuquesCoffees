// Dependencias necesarias
const express = require('express');  // Importa Express, el framework para Node.js
const path = require('path');       // Importa el módulo 'path', útil para trabajar con rutas de archivos
const app = express();              // Inicializa una aplicación de Express
const port = 8080;                  

// Sirve archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));  // Permite que Express sirva archivos de la carpeta 'public'

// Configuración de las rutas (URLs)
app.get('/', (req, res) => { 
  res.sendFile(path.join(__dirname, 'vistas', 'index.html')); 
});

app.get('/menu', (req, res) => {  
  res.sendFile(path.join(__dirname, 'vistas', 'menu.html'));
});

app.get('/galeria', (req, res) => {  
  res.sendFile(path.join(__dirname, 'vistas', 'galeria.html'));
});

app.get('/ubicacion', (req, res) => {  
  res.sendFile(path.join(__dirname, 'vistas', 'ubicacion.html'));  
});


app.get('/horarios', (req, res) => { 
  res.sendFile(path.join(__dirname, 'vistas', 'horarios.html'));
});

// Inicia el servidor
app.listen(port, () => {  // Escucha en el puerto 3000
  console.log(`Servidor corriendo en http://localhost:${port}`);  // Mensaje en consola indicando que el servidor está activo
});
