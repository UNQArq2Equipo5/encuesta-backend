# Encuesta backend

a [Sails](http://sailsjs.org) application

[Link heroku](http://encuesta-arq2.herokuapp.com)

## Instalación

Build del proyecto:
``` bash
docker-compose build
```

Iniciar aplicación (http://localhost:1337):
``` bash
docker-compose up web
```

Correr tests de integración (la aplicación no debe estar corriendo):
``` bash
docker-compose run --rm -e NODE_ENV=dev --entrypoint bash web -c 'npm test'
```

## Etapas
- [Etapa 0](docs/etapa0.md)
- [Etapa 1 - Docker](docs/etapa1.md)
- [Etapa 2 - Tests performance](docs/etapa2.md)
- [Etapa 3 - HA](docs/etapa3.md)
