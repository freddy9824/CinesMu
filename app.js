const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");
const promisify = require("es6-promisify").promisify;
const flash = require("connect-flash");
const expressValidator = require("express-validator");
const sequelize = require("./config/database");
const helpers = require("./helpers");
const errorHandlers = require("./handlers/errorHandlers");
require("./config/passport");
const routeIndex = require("./routes/index");
const routePelicula = require('./routes/pelicula');
const routeSede = require('./routes/sedes');
const routeTaquilla = require('./routes/taquilla');
const routeIdiomas = require('./routes/idiomas');
const routeSalas = require('./routes/salas');
const routeCarteleras = require('./routes/carteleras');
const routeFunciones = require('./routes/funciones');
const routeComida = require('./routes/comida');
const routeGenero = require('./routes/genero');
const routeSubtitulos = require('./routes/subtitulos');
const routePeliculasC = require('./routes/peliculasc');
const routeReportes = require('./routes/reportes');
const routeCompras = require('./routes/compras');
const routeCombosComida = require('./routes/combos_comida');
const routeMantenimientos = require('./routes/mantenimiento');
const routeMapas = require('./routes/mapa_sala');
const routeFacturas = require('./routes/facturas');
// Creamos La aplicacion en Express
const app = express();

// Configuramos el Template Engine
app.set("views", path.join(__dirname, "views")); // En la carpeta views es donde todos los archivos .pug deben estar
app.set("view engine", "pug"); // En este caso estamos usando pug, pero ejs o handler bar tambien puede funcionar

// Esta linea nos permite servir los archivos estaticos que se encuentran en el servidor, como las fotos, js y css
app.use(express.static(path.join(__dirname, "public")));

// Este middleware va convertir las peticiones a json para facilitarnos la vida
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Con esto vamos a tener validaciones que viene por defecto
app.use(expressValidator());

// Se creara en req un propiedad cookies con las cookies que viene de cada peticion
app.use(cookieParser());

// Sessions nos permite guardar informacion de los visitantes cada vez que hacen una peticion
// This keeps users logged in and allows us to send flash messages
const store = new SequelizeStore({
  db: sequelize,
  checkExpirationInterval: 15 * 60 * 1000,
  expiration: 24 * 60 * 60 * 1000
});
app.use(
  session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store
  })
);
store.sync();
// Passport JS es una libreria que nos va a permitir manejar nuestros logins
app.use(passport.initialize());
app.use(passport.session());

// Esto nos va a permitir mandar mensajes de error a los visitantes de nuestra pajina
app.use(flash());

// Middleware propio
app.use((req, res, next) => {
  res.locals.h = helpers; // Expondra el archivo helpers en la vistas
  res.locals.flashes = req.flash(); // Expondra los flashes en la vistas
  res.locals.user = req.user || null; // Expondra el usuario en la vistas o sera null
  res.locals.currentPath = req.path; // Expondra la ruta
  next(); // Vamos a la siguiente funcion
});

// promisify convertira las algunas API basadas en callback a Promesas
app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
});

// Configuracion de las rutas
app.use("/", routeIndex);
app.use('/pelicula', routePelicula);
app.use('/sedes', routeSede);
app.use('/taquilla', routeTaquilla); 
app.use('/idiomas', routeIdiomas); 
app.use('/salas', routeSalas);
app.use('/carteleras', routeCarteleras);
app.use('/funciones', routeFunciones);
app.use('/comida', routeComida);
app.use('/generos', routeGenero);
app.use('/subtitulos', routeSubtitulos);
app.use('/peliculasc', routePeliculasC);
app.use('/reportes', routeReportes);
app.use('/compras', routeCompras);
app.use('/combosc', routeCombosComida);
app.use('/mantenimiento', routeMantenimientos);
app.use('/mapas', routeMapas);
app.use('/facturas', routeFacturas);

// Si no conseguimos el archivo le mandamos 404 al cliente
app.use(errorHandlers.notFound);

// Si el error es del cliente le advertimos con un flash
app.use(errorHandlers.flashValidationErrors);

// Si estamos desarrollando y la app falla veamos donde esta el error
if (app.get("env") === "development") {
  app.use(errorHandlers.developmentErrors);
}

// Si la app falla y estamos en produccion los errores cambian
app.use(errorHandlers.productionErrors);

// Listo muchachos hora de trabajar, vamos a start.js
module.exports = app;
