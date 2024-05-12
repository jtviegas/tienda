import * as cdk from 'aws-cdk-lib';
import { Environment } from 'aws-cdk-lib/core';


export interface SysEnv extends Environment {
  readonly name: string;
}

export interface Props extends cdk.StackProps {
  readonly env: SysEnv;
  readonly solution: string;
  readonly organisation: string;
  readonly domain: string;
  readonly userpool: string;
  readonly userpool_client: string;
  readonly root_one_pswd: string;
  readonly root_one_email: string;
  readonly userpool_client_id_exported_var: string;
}

