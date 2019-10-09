# react-counter-app
> ## Simple react project (CRUD). In this this project you can increment the counter of an imaginary product in cart, decrement the counter or delete a product from the cart. It also display total products selected in the cart. It simple but showcase common features in modern e-commerce.

# Getting started

To get this project running locally:

- Clone this repo `https://github.com/Terahpatrick/react-counter-app.git`.
- `npm install` to install all req'd dependencies
- `npm start` to start the local server (this project uses create-react-app)

Local web server will use port 3000. You can configure port in scripts section of `package.json`: we use [cross-env](https://github.com/kentcdodds/cross-env) to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.
 
Alternatively, you can add `.env` file in the root folder of project to set environment variables (use PORT to change webserver's port). This file will be ignored by git, so it is suitable for API keys and other sensitive stuff. Refer to [dotenv](https://github.com/motdotla/dotenv) and [React](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env) documentation for more details. Also, please remove setting variable via script section of `package.json` - `dotenv` never override variables if they are already set. 

## Functionality overview

The example application is a component of a e-commerce and display some common features used. You can run it locally to see it's working.

**General functionality:**

- *RUD Product

**The general page breakdown looks like this:**

- Home page (URL: /#/ )
    - Delete product button
    - Increment product counter button
    - Decrement product counter button
    - Display total counters
