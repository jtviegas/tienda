# tienda

## app scaffolding

```
npx create-react-app tienda
cd tienda
```
`npm start` : Starts the development server.

`npm run build`: Bundles the app into static files for production.

`npm test`: Starts the test runner.

`npm run eject`: Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!


## ui base
- [started off by react-bootstrap example](https://codesandbox.io/s/github/react-bootstrap/code-sandbox-examples/tree/master/basic-react-router)
- [react-bootstrap getting started](https://react-bootstrap.github.io/getting-started/introduction/)
- [one possible example](https://getbootstrap.com/docs/4.5/examples/pricing/#)
- [bootstrap getting started](https://getbootstrap.com/docs/4.5/getting-started/introduction/)


## app scaffolding

- Install the Amplify CLI, a command line toolchain that runs locally that communicates with your app backend:
  ```
  curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL
  ```
- configure aws profile
  - if you have one already, remember to set the aws profile with
  ```
  export AWS_PROFILE=tienda_dev
  ```
  - if not
  ```
  amplify configure
  ```
- create a fresh react app
  ```
  npx create-react-app tienda
  cd tienda
  npm start
  ```
-  it’s time to set up Amplify so that we can create the necessary backend services needed to support the app, run the following command from your project's root folder (tienda):
  ```
  amplify init
  ```
- install libraries
  ```
  sudo npm install aws-amplify @aws-amplify/ui-react
  ```
- edit index.js
  ```
  import Amplify from "aws-amplify";
  import awsExports from "./aws-exports";
  Amplify.configure(awsExports);
  ```
- add graphql api
  ```
  amplify add api
  ```
- deploy the backend to the cloud
  ```
  amplify push
  ```
- check it
  ```
  amplify status
  ```
- To view the GraphQL API in the AppSync console at any time, run the following command:
  ```
  amplify console api
  ```
- To view your entire app in the Amplify console at any time, run the following command:
  ```
  amplify console
  ```
- Test your API - To test this out locally, you can run the mock command.
  ```
  amplify mock api
  ```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
