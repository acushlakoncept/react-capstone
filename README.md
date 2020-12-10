# STOCKIST WEB APP - REACT CAPSTONE PROJECT

In this project, I developed a frontend web application, catalogue of financial values using [Stock API](https://financialmodelingprep.com/developer/docs/)  and collect the data from my React Application.

The application features includes:
- Listing of Most Active Stocks
- Listing of Most Gainer's Stocks
- Listing of Most Loser's Stocks
- Filter between those 3, most active, gainers and losers
- Open individual stock item
- Search for a particular stock item, example 'AAPL'
- Listing of the lastest stock news
- Dynamic routes for individual stock item, example `/stocks/AAPL`

![screenshot](./stockist.gif)

## Live Demo
[Live Demo](https://cush-stocks.herokuapp.com/)

## Video Presentation
[YouTube Link](https://youtu.be/l5s8WUlm1L8)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Make sure Node.js is running on your local machine

### Setup

~~~bash
$ git clone https://github.com/acushlakoncept/react-capstone.git
$ cd react-capstone
~~~

Install modules:

```
yarn add
```

Setup your API Key

- I used the [Financial Modelling Prep API](https://financialmodelingprep.com/developer/docs/). Signup and get your key.
- Create `.env` file, open it and add `REACT_APP_API_KEY=xxxxxxxxxxxxxxxxxxxxx`

### Usage

Start server with:

```
    yarn start or npm start
```
### Running Test
Jest is used to run all the tests found in this application
In order to run the test you can simply type `yarn test` or `npm run test`

Either ways, if you encounter any error while running either command, its likely you do not have `jest` installed globally, so please run `npm install -g jest-cli` then try again. That should do it.

### Deployment instructions

```
    git add .
    git commit -m "ready for first push to heroku"  
    heroku create $APP-NAME --buildpack mars/create-react-app
    git push heroku $BRANCH_NAME:master
```

Fire up your app by running `heroku open` Yay!!! your app has been deployed successfully.

# Authors

👤 **Uduak Essien**

- Github: [@acushlakoncept](https://github.com/acushlakoncept/)
- Twitter: [@acushlakoncept](https://twitter.com/acushlakoncept)
- Linkedin: [acushlakoncept](https://www.linkedin.com/in/acushlakoncept/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments
- [Microverse Inc](https://www.microverse.org/)
- [Financial Modelling Prep API](https://financialmodelingprep.com/developer/docs/)