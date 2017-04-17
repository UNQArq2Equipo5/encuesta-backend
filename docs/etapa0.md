# Etapa 0

## Seguridad
- Login persistente (en sesión del servidor) `/auth/login` pasando email y password. La autenticación queda activa mediante cookies. Util para aplicaciones frontend con formulario de login.
- Autenticación básica http stateless (no usa sesión del servidor) para cada petición protegida para director, en caso de no tener una autenticación con el método previo.
- Autenticación para alumnos mediante token. Se pasa parámetro `access_token` y se valida que pertenezca a un alumno existente. Se utiliza en controller de encuestas.

#### TODO:
- Manejo de autorización a nivel de recurso. (Un alumno sólo puede ver/editar su encuesta)

## Log
- Loggly: https://encuestaarq2.loggly.com

## Monitoreo
- NewRelic

## Testing
- Se implementaron algunos tests de integración usando `mocha` (https://mochajs.org) y `supertest` (https://github.com/visionmedia/supertest) basados en la guía del tp.
- Para correrlos: `npm test`


## Heroku
- Deploy automático del branch master http://encuesta-arq2.herokuapp.com/
