# Dockerfile
FROM node:4
ADD ./ /app
WORKDIR /app
RUN rm -rf node_modules && npm cache clean && npm install --silent
