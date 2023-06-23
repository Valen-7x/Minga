import 'dotenv/config.js'
import express  from'express'         /*para levantar y configurar un servidor */
import path  from'path'              /*necesario para conocer la ubicacion de nuestro servidor */
import logger from'morgan'  /*es una libreria para registrar las peticiones */
import cors from 'cors'
import { __dirname } from './utils.js' //importo la configuracion de la ruta padre
import indexRouter  from'./routes/index.js' /*enrutador principal de la aplicacion */

let app = express();//defino una variable con la ejecucion del modulo express con un servidor

// view engine setup
app.set('views', path.join(__dirname, 'views'));//set es un metodo que configura algo, en este caso que las carpetas vistas generadas desde el backend estan en views
app.set('view engine', 'ejs'); //configuro que las vistas se van a definir con el lenguaje EJS (motor de plantilla)
//MIDDLE WARS
//use es un metodo que obliga (en este caso) a mi aplicacion a usar algo (ejecutar una funcion)
app.use(logger('dev')); // obliga al servidor a usar el middleware de registro de peticiones
app.use(express.json());//obliga al servidor a transdformar formato json (post/pult)
app.use(express.urlencoded({ extended: false }));//obliga al servidor a acceder a consultas complejas (permite leer queries)
app.use(express.static(path.join(__dirname, 'public')));//obliga al servidor a generar una carpeta de acceso publico

app.use('/api', indexRouter);
app.use(cors());

export default app