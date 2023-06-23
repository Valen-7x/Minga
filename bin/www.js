import app from'../app.js'; //importo la aplicacion de back configurada
import debug from 'debug'
import http from'http'//importo el modulo para crear servidores


let port = normalizePort(process.env.PORT || '8080');//8080 es el puerto preferido por los desarrolladores backend, una convencion 
//defino un operador OR para normalizar el puerto porque cuando hostee/deployee el servidor el hosting me va a asignar el puerto que tenga libre para mi app
app.set('port', port);

/**
 * Create HTTP server.
 */

let server = http.createServer(app); //creando un servidor con las configuraciones de app

/**
 * Listen on provided port, on all network interfaces.
 */
function ready (){
  console.log('server ready on port'+port);
}
server.listen(  //metodo listen se utiliza para escuchar un puerto
  port,        //primer parametro necesario, el puerto donde tiene que funcionar el servidor
  ready       //ready es una funcion que se va a ejecutar cuando se ejecute el servidor
  )
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
