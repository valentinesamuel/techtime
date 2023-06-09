# Techtime
### Table of Content
- [Project Description](#project-description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Running Locally](#to-run-locally)
- [Running a docker container](#to-run-in-a-docker-container)
- [Previewing the Project](#previewing-the-application)

## Project Description
This project is a landing page of an e-learning platform called TechTime that was built in fulfillment of the vetting process for the TalentPlus Frontend Developer role.

Demo Video [Here](https://youtu.be/pi4JwY6yP8U)


## Technologies
The project was built with the followind technologies.
- React
- Styled Components
- Material UI 
- [React-simple-carousel](https://www.npmjs.com/package/react-simply-carousel#demo)
- docker

## Installation
This project was dockerized, there for you can choose to run it locally or in a docker container

- Clone the github repository

`git clone https://github.com/valentinesamuel/techtime`

- Enter into the project's root directory

`cd techtime`

_This project can be run on your local computer and also in a docker container. Follow the steps below depending on your choice._

### To run locally
- Install all the dependencies

`npm install`

- Run the application on localhost

`npm run dev`

### To run in a docker container
- Pull the image from the author's docker repository. (Skip this step if you want to build the docker image yourself). This will pull the docker image so that you can run it in a container instead of your local computer.

`docker pull valentinesamuel/techtime:1.0.0`

- Build the docker image. (Skip this step if you pulled the image from the author's repository)

`docker build -t valentinesamuel/techtime:1.0.0 .`

- Run the docker container in the background and print the container ID, remove the container when it exits.

`docker run -d --rm -p 5173:5173 valentinesamuel/techtime:1.0.0`

## Previewing the application
To display this application, open your browser and paste the following url in the address bar [http://localhost:5173/](http://localhost:5173/)
If you have followed the above stes, you should see the application beautifully running in your browser

TLDR:
Watch the video on [youtube](https://youtu.be/pi4JwY6yP8U)