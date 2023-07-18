# tienda

## setting up

### install amplify cli

- Install the Amplify CLI, a command line toolchain that runs locally that communicates with your app backend: `curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL`
- configure aws profile
  - if you have one already, remember to set the aws profile with: 
  `export AWS_PROFILE=tienda_dev`
  - if not: 
  `amplify configure`

### app scaffolding - script `devops/setup.sh`

- move to the project root (tienda)
- create a fresh react app
  ```
  npx create-react-app site
  ```
- move to the site folder (tienda/site)
  ```
  cd site
  ```
- install libraries
  ```
  npm --save install aws-amplify @aws-amplify/ui-react bootstrap
  ```
-  it’s time to set up Amplify so that we can create the necessary backend services needed to support the app:
  ```
  amplify init
  ```
- edit `tienda/site/src/index.js` and add:
  ```
  import Amplify from "aws-amplify";
  import awsExports from "./aws-exports";
  Amplify.configure(awsExports);
  ```
- add graphql api - for dev purposes use api key auth and add graphql schema defined in `tienda/devops/schema.graphql`
  ```
  amplify add api
  ```
- deploy the backend to the cloud
  ```
  amplify push
  ```
- generate graphql models
  ```
  amplify codegen models
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

## add file storage

## if we want to use bootstrap
- [started off by react-bootstrap example](https://codesandbox.io/s/github/react-bootstrap/code-sandbox-examples/tree/master/basic-react-router)
- [react-bootstrap getting started](https://react-bootstrap.github.io/getting-started/introduction/)
- [one possible example](https://getbootstrap.com/docs/4.5/examples/pricing/#)
- [bootstrap getting started](https://getbootstrap.com/docs/4.5/getting-started/introduction/)



## GraphQL

Edit your schema at /Users/jotvi/Documents/code/tienda/site/amplify/backend/api/amplifyDatasource/schema.graphql or place .graphql files in a directory at /Users/jotvi/Documents/code/tienda/site/amplify/backend/api/amplifyDatasource/schema



