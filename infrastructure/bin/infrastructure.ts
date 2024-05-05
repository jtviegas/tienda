#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CognitoStack } from '../lib/cognito-stack';
import { Props } from '../lib/props';

const app = new cdk.App();
const environment_ctx = (app.node.tryGetContext("environment"))[(process.env.ENVIRONMENT || 'dev')]

const props: Props = {
  env: environment_ctx,
  solution: process.env.SOLUTION!,
  organisation: process.env.ORGANISATION!,
  domain: process.env.DOMAIN!,
  userpool: process.env.USER_POOL!,
  userpool_client: process.env.USER_POOL_CLIENT!,
  root_one_pswd: process.env.ROOT_ONE_PSWD!,
  root_one_email: process.env.ROOT_ONE_EMAIL!,
}

const cognitoStack: CognitoStack = new CognitoStack(app, 'CognitoStack', props);