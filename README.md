# 🗺️ Places - National Parks Edition

<div align="center">
  
##### Built With: 
<img height="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
<img height="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
<img height="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
     
##### Testing Technologies:
<img height="100px" src="https://avatars.githubusercontent.com/u/8908513?s=200&v=4"/>

### [View Deployed App](https://places-nps.vercel.app/)

</div>

---

## Abstract:

It's time to enjoy the great outdoors! With Places (National Parks Edition) you can start to track which of the 63 National Parks you've had a chance to visit, and plan for which one's you'll visit soon. With this app you can track the parks you've visited, look at which ones you might like to, and get helpful information about them like directions. We hope to see you on the trail soon!

## Preview:
**Home Page**
<img width="1468" alt="Screenshot 2023-11-10 at 4 27 47 PM" src="https://user-images.githubusercontent.com/46095125/282182646-49c5d8d3-3b83-4341-a66f-1e4ff418ae0a.png">

**Parks Visited**
<img width="1470" alt="Screenshot 2023-11-10 at 4 29 30 PM" src="https://user-images.githubusercontent.com/46095125/282182925-7771b1a3-2f9e-4e99-8cc6-1781a111baff.png">

**Park Info**
<img width="1470" alt="Screenshot 2023-11-10 at 4 30 56 PM" src="https://user-images.githubusercontent.com/46095125/282183117-d1043e05-caa2-4885-ada8-3c5a14f326a9.png">


## Contributors:
- [Logan Matheny](https://github.com/loganpaulmatheny)

## Context:

This was an individual project during Mod 3 at Turing School of Software & Design. I was given 5 days to plan, design, and build this project from scratch using the [provided comp](https://frontend.turing.edu/projects/module-3/showcase.html).

## Learning Goals:
- Design, scope, and build a react application
- Manage the project amidst other competing priorities
- Gain competency with React fundamentals
- Test React components & asynchronous JS E2E using Cypress
- Create a multi-page UX using Router
- Learn to deploy an application (with environmental variables)

## Challenges:
- Environmental variables: This was my first time working with environmental variables and it was challenging to protect, test, and deploy the application with them.
- Data Persistence: This application utilizes the National Park Service API. The GET request occurs on the home page and data is passed down in the form of props. This means that if an individual reloads a page requiring that data to render an error will be thrown. I had to create a better user experience for this type of issue under time constraints.
- State Management: This application tracks what parks you've visited using the useState hook, and has functionality to change the individual park's state across any page of the application. 

## Installation Instructions:
**Note:** For those less techy savvy folks, you can simply click the deployed link at the top 🥳

1. Fork this repository.
2. Clone it to your local machine using the green `<> CODE` button and paste that into your terminal with the command: `git clone <paste here>`
3. Run the command: `cd places-nps`
4. Run the command: `npm install`
5. Run the command: `npm start`
6. The application will open in your browser

## Ideas for future iterations 
- Be able to differentiate between places a user would like to go vs. have already visited
- Take notes on your favorite parks
- Implement better loading experience for users with a rotating compass

### Long Term
- Use this app as a starting spot for an application leveraging a maps API to save collections of locations that you've visited/ 

