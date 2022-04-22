# syntax=docker/dockerfile:1

FROM node:15.7.0

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD [ "node", "server.js" ]


