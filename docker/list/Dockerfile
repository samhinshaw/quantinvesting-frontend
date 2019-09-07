FROM node:12-alpine as build

RUN mkdir -p /app 

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY src/ ./

CMD npm start