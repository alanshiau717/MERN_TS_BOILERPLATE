# MERN_TS_BOILERPLATE

Simple MERN Fullstack Boilerplate using typescript

## Dependencies

- Node
- MongoDB

## Steps to deploy

### Client

The client folder is for the react frontend.
Run `npm install` to install all node modules
Use `npm start` to start the development server

### Server

The server folder is for the express server.
Run `npm install` to install all node modules
Use `npm start` to start the development server

## Environment

### Connectivity between Client and Server

Client connects to backend endpoint in client/src/http-common.ts so
change baseURL to the endpoint of your express server.

For the express server, CORS will need to be enabled. To do so, change the corsOptions to be the endpoint for your client.
This is done is server/server.ts.

### Connectivity between Server and MongoDB

MongoDB endpoint located in server/app/config/db.config.ts. The url value set
is the default mongodb endpoint. Change it to your required endpoint.
