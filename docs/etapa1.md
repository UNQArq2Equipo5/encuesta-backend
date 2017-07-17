# Etapa 1

## Docker
Servicios de `docker-compose.yml`:
- **web**: Rest api
- **mongo**: Base de datos
- **redis**: Para manejo de sesiones
- **jmeter**: Tests de performance

``` bash
docker-compose up web
```
Inicia la aplicación web con la base de datos y redis automaticamente. Se puede navegar en http://localhost:1337

``` bash
docker-compose up jmeter
```

Ejecuta los tests de performance
