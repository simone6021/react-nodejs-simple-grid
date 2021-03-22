# react-nodejs-simple-grid
Simple grid which displays a list of users and an expandable detail section, using reactjs and nodejs.  
Little case study to take a quick tour into recent react and to come back to nodejs after a long time.

## Requirements
Recent versions of **nodejs** (tested with version 14.x and 10.x) and **npm** (tested with 6.x) installed.  

As an alternative and for convenience, a **Dockerfile** is provided to run the production build: needs docker version 19.x or higher, tested with 20.10.5 version.  

Also, a **docker-compose** file is included to ease the development process.

## How to run

First clone the repository:  
`git clone https://github.com/simone6021/react-nodejs-simple-grid`

Then use one of the following methods to build both frontend and backend.

- ### npm
    1. Build the backend and the frontend react app:  
       `cd api && npm run build`
    2. Launch the backend:  
       `npm start`

- ### docker
    1. Build the docker image:  
       `docker build -t react-nodejs-simple-grid:latest .`
    2. Run the docker container:  
       `docker run -p 3080:3080 react-nodejs-simple-grid:latest`

Regardless the method chosen you should be able to access the frontend react app by 
opening the url [http://localhost:3080](http://localhost:3080) in a modern browser.  

The backend provide two unauthenticated endpoints:
- **GET /api/users**  
  Return a JSON list of objects containing limited information about users.
- **GET /api/users/:id**  
  Return a JSON object containing all the information about a user identified by required `:id` parameter.

Note that data are actual fetched asynchronously from a simple json file: [`api/data/MOCK_DATA.json`](https://github.com/simone6021/react-nodejs-simple-grid/blob/main/api/data/MOCK_DATA.json) 

### docker-compose for development
For a smooth development experience, use **docker-compose** to take advantage of nodejs hot reload (using **nodemon**) 
and the development server provided by **react-scripts**: both are really handy!

1. Run the docker-compose services:  
   `docker-compose up`
2. Open the url [http://localhost:3000](http://localhost:3000) with a modern browser for the frontend react app,
   while backend APIs are reachable as explained above.  
   

## TODO
- [ ] Add tests: testing suites have changed quite a bit in the meantime, but it is nice that a single tool can be used for both nodejs and react: [jest](https://jestjs.io). 
- [ ] Server side filtering, sorting and pagination: the [grid component used](https://github.com/jbetancur/react-data-table-component) is ready for this.
- [ ] Maybe make the expanded detail a little nicer.
- [ ] Replace the bare "Loading..." with a nice throbber image. 
