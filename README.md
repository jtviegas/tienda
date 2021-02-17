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

- Install the Amplify CLI, a command line toolchain that runs locally that communicates with your app backend: `curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL`
- configure aws profile
  - if you have one already, remember to set the aws profile with: 
  `export AWS_PROFILE=tienda_dev`
  - if not: 
  `amplify configure`
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
  sudo npm install aws-amplify @aws-amplify/ui-react bootstrap
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




