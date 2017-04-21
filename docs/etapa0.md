# Etapa 0

## Seguridad
- Login persistente (en sesión del servidor) `/auth/login` pasando email y password. La autenticación queda activa mediante cookies. Util para aplicaciones frontend con formulario de login. [[AuthController](api/controllers/AuthController.js)]
- Autenticación básica http stateless (no usa sesión del servidor) para cada petición protegida para director, en caso de no tener una autenticación con el método previo. [[policies/isAuthenticated.js](api/policies/isAuthenticated.js)]
- Autenticación para alumnos mediante token. Se pasa parámetro `access_token` y se valida que pertenezca a un alumno existente. Se utiliza en controller de encuestas.
- Manejo de autorización a nivel de recurso. (Un alumno sólo puede ver/editar su encuesta). Se valida que el alumno al que pertenece el access_token sea el owner de la encuesta que se quiere ver/editar. [[policies/hasAccessToken.js](api/policies/hasAccessToken.js)]
- Las reglas de cómo se aplican las distintas autenticaciones a los controllers/actions están definidas en [config/policies.js](config/policies.js)

## Log
- Loggly: https://encuestaarq2.loggly.com
- Configuración de loggers en [config/log.js](config/log.js)

## Monitoreo
- NewRelic

## Testing
- Se implementaron algunos tests de integración usando `mocha` (https://mochajs.org) y `supertest` (https://github.com/visionmedia/supertest) basados en la guía del tp.
- Para correrlos: `npm test`


## Heroku
- Deploy automático del branch master http://encuesta-arq2.herokuapp.com/

### TODO
- Estadisticas
