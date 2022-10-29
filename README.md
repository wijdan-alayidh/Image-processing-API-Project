# Project Instructions

The Basic idea of this project is to provide a simple query to search for a specific image in the Project Files, in addition to searching images if the URL received correct width and height values in this case the URL will send a resized image based on the received dimensions from the URL as a response.

This Project using these technologyes:

- Typescript Node.js and Express Server in Backend
- Jasmine testing framework for testing
- Lint and prettier for formatting

## Getting started

### Step 1: install node and npm in your device

1- This project requires you to have pre-installed node.js and npm or yarn to manage node packages:

- To check the node.js version use this command:

`node -v`

If you don't have node.js in your device you can visit [Node.js website to install Node](https://nodejs.org/en/).

- To check the npm version use this command:

`npm -v`

If you don't have npm in your device you can visit [npm website to install npm](https://www.npmjs.com/).

### Step 2 : Clone The project Folder.

### Step 3 : Install all project dependencies

After cloning the repo to your device move to the project Folder and run this command to install all project dependencies

`npm install`

## Run The project

The project will run on localhost port 3000 you can change it based on your needs from `src/server/index.ts` file.

### Project Scripts

you can run the project in your device using this commands:

- run express server:
  `npm run start`

- compile typescript files to javascript files:
  `npm run build`

- run Jasmine test and rebuild project files:
  `npm run test`

- change files formate using prettier:
  `npm run prettier`

- run lint to fix code writing errors:
  `npm run lint`

## Possible Endpoints to test project:

    - http://localhost:3000/api

      Base Endpoint for the project and will return This message:

      main api route

    - http://localhost:3000/api/images/?image=<image name>


      This Endpoint will return the image file to the browser if the image is found otherwise will return the:

      Image not found -> message to the browser

      - Example: http://localhost:3000/api/images/?image=fjord


      The Possible image names to use in this project:

        1 - encenadaport
        2 - fjord
        3 - icelandwaterfall
        4 - palmtunnel
        5 - santamonica

      or you can use any images you want if you put the images inside `assets/images/full` Folder.


    - http://localhost:3000/api/images/?image=<image name>&height=<height value number>&width=<width value number>

      This Endpoint will work on resizing the image based on query values (height & width ) passed to the URL and will send the image after resizing to the browser.

        - Example: http://localhost:3000/api/images/?image=fjord&height=1000&width=600

      In case the height and width values are not valid or one of them missing and the image is found in project files, in this case, the URL will return the original image without resizing.

      The resizing imges will saved in `assets/images/thumb` Folder.
