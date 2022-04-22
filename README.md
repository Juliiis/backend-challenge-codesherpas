# Backend-Challenge-Codesherpas

## What you will find in this repository
You will find a design and implementations of HTTP API to manage customer data for a small shop. This is a challenge project for Code Sherpas.

## How to run the app

1. Fork or download the app and clone the repository in your local machine.
2. Install dependencies using `npm install`
3. To check the Jest tests use `npm test`
4. To start the project and check the endpoints in Postman use `npm start`. The app is served at <http://localhost:3000/>

## How to run the app with Docker

1. docker run `image name`
2. docker build -t `image name`


## Tools

- Nodejs
- Express
- Typescript
- Jest
- Postman
- Docker

## Work in Progress

- Finish tests for PUT, DELETE and GET customer/:id endpoints.
- Fix Docker image 
This is the last error:

```
node:internal/modules/cjs/loader:928
  throw err;
  ^

Error: Cannot find module '/app/server.js'
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:925:15)
    at Function.Module._load (node:internal/modules/cjs/loader:769:27)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}
```

## Future Features

- Create a real Database.
- Refactor the code.

## What was new and where am I trying to apply?

- On a more technical level, "Jest" and adding "Docker" to the project were completely new points for me.
- Trying to apply and think about design patterns, SOLID principle and Clean Code was also something new.

- I tried to apply dependency injection. But first try to also apply the singleton pattern which at the end I decided not to use.

_This challenge project was created in Barcelona for Code Sherpas in April 2022._