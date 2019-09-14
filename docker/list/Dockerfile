FROM node:12-alpine as build

RUN mkdir -p /app 

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

# bring in backend folder
COPY ./backend ./backend

# build backend
RUN npm run build:backend

# cherry-pick the rest of the codebase needed
COPY ./src ./src
COPY tsconfig.json ./

# build ui
RUN npm run build:ui

# default start command
CMD npm start