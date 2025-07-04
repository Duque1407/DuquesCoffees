/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');

// Inicializa la app de Express
const app = express();

// Configuración de seguridad y rendimiento
app.use(compression());
app.use(helmet({
  contentSecurityPolicy: false, // Personaliza esto después según tus necesidades
  crossOriginEmbedderPolicy: false // Necesario para algunos recursos externos
}));

// Sirve archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, '../public')));

// Configuración de rutas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/menu.html'));
});

app.get('/galeria', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/galeria.html'));
});

app.get('/ubicacion', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/ubicacion.html'));
});

app.get('/horarios', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/horarios.html'));
});

// Manejo de errores 404 (página no encontrada)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
});

// Configuración global de Firebase Functions
setGlobalOptions({
  maxInstances: 5, // Ajusta según tráfico esperado (máx 10 para plan Blaze)
  memory: '256MB'  // Opcional: '128MB', '256MB', '512MB', etc.
});

// Exporta la app como función de Firebase
exports.app = functions
  .runWith({
    timeoutSeconds: 60,  // Máximo tiempo de ejecución
    memory: '256MB'     // Memoria asignada
  })
  .https.onRequest(app);

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
