# Redux-Store
This is a online store built using MERN, GraphQL with Apollo server, MOngoDB, Nodejs/Express, REACT frontend. Redux is  used to store global state of the store. Stripe library is used tp test payments.
# Redux-Store[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Description
This is a online store built using MERN, GraphQL with Apollo server, MOngoDB, Nodejs/Express, REACT frontend. Redux is  used to store global state of the store. Stripe library is used to test payments.

## Tables of content:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)

## Installation

1. Install node.js to run this application
2. Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.
3. Make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init when you first set up the project, before installing any dependencies.
4. Create the react app with aoo name client with [Create React App].[npx create-react-app <app-name>]
5. Run command npm i express to create Express.js for Routing.
6. Run command npm i mongoose to create mongoose package to connect MongoDB database.
7. Install bcrypt,jsonwebtoken,graphql,apollo-server-express and @apollo/client.
8. Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data.
9. Created an Apollo Provider so that requests can communicate with an Apollo Server.
10. Deployed application to Heroku with a MongoDB database using MongoDB database.

## Usage 
GIVEN an e-commerce platform that uses Redux to manage global state
1. WHEN I review the app’s store,
    THEN I find that the app uses a Redux store instead of the Context API
2. WHEN I review the way the React front end accesses the store,
    THEN I find that the app uses a Redux provider
3. WHEN I review the way the app determines changes to its global state,
    THEN I find that the app passes reducers to a Redux store instead of using the Context API
4. WHEN I review the way the app extracts state data from the store,
    THEN I find that the app uses Redux instead of the Context API
5. WHEN I review the way the app dispatches actions
    THEN I find that the app uses Redux instead of the Context API
    
## Contributors
Meera

## Test
npm test

## Questions
  * GitHub Username : Meera-Mohanan
  * Email: meera@test.com
  * GitHub profile : https://github.com/Meera-Mohanan

## Mock Up
The following animation shows how a user can register using the Signup page and then navigate to the Products page:
![Redux-Store](assets/image/22-state-homework-demo-01.gif)

The following animation shows how the user can select a category, choose a product, view details about it on the product page, and add and remove it from their shopping cart:
![Redux-Store]

Finally, the user can check out by going to their shopping cart, as shown in the following animation:
![Redux-Store]

## ScreenShot

![Redux-Store]


## URL
1. The URL of the Heroku Delpoyed application:


2. The URL of the GitHub repository:
https://github.com/Meera-Mohanan/Redux-Store