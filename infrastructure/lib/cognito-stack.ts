import * as cdk from 'aws-cdk-lib';
import { CfnOutput, Duration, RemovalPolicy } from 'aws-cdk-lib';
import { AccountRecovery, CfnUserPoolGroup, CfnUserPoolUser, CfnUserPoolUserToGroupAttachment, ClientAttributes, Mfa, OAuthScope, UserPool, UserPoolClient, UserPoolClientIdentityProvider } from 'aws-cdk-lib/aws-cognito';
import { Construct } from 'constructs';
import { Props } from './props';
import { AwsCustomResource, AwsCustomResourcePolicy, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';

export class CognitoStack extends cdk.Stack {

  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);

    const solutionPrefix = `${props.solution}_${props.env.name}`
    const idPrefix =  `${id}_${props.env.name}`

    const pool = new UserPool(this, `${idPrefix}_userpool`, {
      signInAliases: { email: true },
      autoVerify: { email: true, phone: true },
      mfa: Mfa.OPTIONAL,
      selfSignUpEnabled: true,
      userPoolName: props.userpool,
      deletionProtection: false,
      removalPolicy: RemovalPolicy.DESTROY,
      accountRecovery: AccountRecovery.EMAIL_ONLY
    });

    const writeAttributes = new ClientAttributes().withStandardAttributes({email: true});
    const readAttributes = writeAttributes.withStandardAttributes({emailVerified: true, lastUpdateTime: true});

    const poolClient: UserPoolClient = pool.addClient(`${idPrefix}_userpool_client`, {
      accessTokenValidity: Duration.minutes(720),
      authFlows: {
        userPassword: true,
        userSrp: true,
      },
      //supportedIdentityProviders: [UserPoolClientIdentityProvider.COGNITO],
      userPoolClientName: props.userpool_client,
      readAttributes: readAttributes,
      writeAttributes: writeAttributes
    });

    new CfnOutput(this, 'userPoolClientId', {
      value: poolClient.userPoolClientId,
      exportName: props.userpool_client_id_exported_var, 
    });

    const poolUserRootOne = new CfnUserPoolUser(this, `${idPrefix}_userpool_user_root_one`, {
      userPoolId: pool.userPoolId,
      // optional configs
      desiredDeliveryMediums: ['EMAIL'],
      userAttributes: [{name: 'email', value: props.root_one_email}, { name: "email_verified", value: "true" },],
      username: props.root_one_email,
    });

    // set test user password
    new AwsCustomResource(this, `${idPrefix}_userpool_user_root_one_pswd`, {
      onCreate: {
        service: "CognitoIdentityServiceProvider",
        action: "adminSetUserPassword",
        parameters: {
          UserPoolId: pool.userPoolId,
          Username: props.root_one_email,
          Password: props.root_one_pswd,
          Permanent: true,
        },
        physicalResourceId: PhysicalResourceId.of(`${idPrefix}_userpool_user_root_one_pswd`),
      },
      policy: AwsCustomResourcePolicy.fromSdkCalls({
        resources: AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
    })

    const poolGroupRoot = new CfnUserPoolGroup(this, `${idPrefix}_userpool_group_root`, {
      userPoolId: pool.userPoolId,
      // the properties below are optional
      groupName: 'root',
      precedence: 10,
    });
    poolGroupRoot.addDependency(poolUserRootOne)

    const poolGroupRootAttachmentRootOne = new CfnUserPoolUserToGroupAttachment(this, `${idPrefix}_userpool_group_root_attach_root_one`, {
      groupName: poolGroupRoot.groupName!,
      username: poolUserRootOne.username!,
      userPoolId: pool.userPoolId,
    });
    poolGroupRootAttachmentRootOne.addDependency(poolGroupRoot)

  }
}
