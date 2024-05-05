#!/usr/bin/env bash

# ===> COMMON SECTION START  ===>

# http://bash.cumulonim.biz/NullGlob.html
shopt -s nullglob
# -------------------------------
this_folder="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
if [ -z "$this_folder" ]; then
  this_folder=$(dirname $(readlink -f $0))
fi
parent_folder=$(dirname "$this_folder")
# -------------------------------
debug(){
    local __msg="$1"
    echo " [DEBUG] `date` ... $__msg "
}

info(){
    local __msg="$1"
    echo " [INFO]  `date` ->>> $__msg "
}

warn(){
    local __msg="$1"
    echo " [WARN]  `date` *** $__msg "
}

err(){
    local __msg="$1"
    echo " [ERR]   `date` !!! $__msg "
}
# ---------- CONSTANTS ----------
export FILE_VARIABLES=${FILE_VARIABLES:-".variables"}
export FILE_LOCAL_VARIABLES=${FILE_LOCAL_VARIABLES:-".local_variables"}
export FILE_SECRETS=${FILE_SECRETS:-".secrets"}
export NAME="bashutils"
export INCLUDE_FILE=".${NAME}"
# -------------------------------
if [ ! -f "$this_folder/$FILE_VARIABLES" ]; then
  warn "we DON'T have a $FILE_VARIABLES variables file - creating it"
  touch "$this_folder/$FILE_VARIABLES"
else
  . "$this_folder/$FILE_VARIABLES"
fi

if [ ! -f "$this_folder/$FILE_LOCAL_VARIABLES" ]; then
  warn "we DON'T have a $FILE_LOCAL_VARIABLES variables file - creating it"
  touch "$this_folder/$FILE_LOCAL_VARIABLES"
else
  . "$this_folder/$FILE_LOCAL_VARIABLES"
fi

if [ ! -f "$this_folder/$FILE_SECRETS" ]; then
  warn "we DON'T have a $FILE_SECRETS secrets file - creating it"
  touch "$this_folder/$FILE_SECRETS"
else
  . "$this_folder/$FILE_SECRETS"
fi

# ---------- include bashutils ----------
. ${this_folder}/${INCLUDE_FILE}

# ---------- FUNCTIONS ----------

update_bashutils(){
  echo "[update_bashutils] ..."

  tar_file="${NAME}.tar.bz2"
  _pwd=`pwd`
  cd "$this_folder"

  curl -s https://api.github.com/repos/jtviegas/bashutils/releases/latest \
  | grep "browser_download_url.*${NAME}\.tar\.bz2" \
  | cut -d '"' -f 4 | wget -qi -
  tar xjpvf $tar_file
  if [ ! "$?" -eq "0" ] ; then echo "[update_bashutils] could not untar it" && cd "$_pwd" && return 1; fi
  rm $tar_file

  cd "$_pwd"
  echo "[update_bashutils] ...done."
}

# <=== COMMON SECTION END  <===
# -------------------------------------

# =======>    MAIN SECTION    =======>

# ---------- LOCAL CONSTANTS ----------
export INFRA_DIR="${this_folder}/infrastructure"
# ---------- LOCAL FUNCTIONS ----------
commands(){
    cat <<EOM
  handy commands:

  jupyter-notebook --log-level=40 --no-browser                            starts jupyter server
  cdk init app --language typescript                                      create new cdk app on typescript
  npm run build                                                           compile typescript to js
  npm run watch                                                           watch for changes and compile
  npm run test                                                            perform the jest unit tests
  aws-cdk
    cdk init app --language typescript                                    create new cdk app on typescript
    cdk deploy                                                            deploy this stack to your default AWS account/region
    cdk diff                                                              compare deployed stack with current state
    cdk synth                                                             emits the synthesized CloudFormation template
  aws
    aws cloudformation delete-stack --stack-name CDKToolkit               delete stack to later recreate with bootstrap (see https://stackoverflow.com/questions/71280758/aws-cdk-bootstrap-itself-broken/71283964#71283964)
    aws configure sso --profile nn --no-browser                           configure sso
    export AWS_PROFILE=nn                                                 set current environment profile
    aws sts get-caller-identity                                           check current session
    aws sts get-caller-identity --profile <PROFILE>                       display session profile info
    aws lambda invoke --function-name FUNCTION_NAME out --log-type Tail 
EOM
}

prereqs()
{
    info "[prereqs|in]"

    which node
    return_value=$?
    if [[ ! "$return_value" -eq "0" ]]; then
        err "[prereqs] please install node"
        exit 1
    fi

    which npm
    return_value=$?
    if [[ ! "$return_value" -eq "0" ]]; then
        err "[prereqs] please install npm"
        exit 1
    fi

    which aws
    return_value=$?
    if [[ ! "$return_value" -eq "0" ]]; then
        err "[prereqs] please install aws cli"
        exit 1
    fi

    which tmole
    return_value=$?
    if [[ ! "$return_value" -eq "0" ]]; then
        err "[prereqs] please install tunnelmole ( npm install -g tunnelmole )"
        exit 1
    fi

    info "[prereqs|out]"
}


ui_scaffolding(){
  info "[ui_scaffolding|in]"

  _pwd=`pwd`
  cd "$this_folder"
  
  npm create vite@latest $UI_DIR -- --template react && cd $UI_DIR && npm install && \
    npm install --save @aws-sdk/client-cognito-identity-provider@^3.533.0 react-router-dom@^6.22.3 && \
    npm install --save-dev @types/react-router-dom@^5.3
  
  result="$?"
  cd "$_pwd"
  [ "$result" -ne "0" ] && err "[ui_scaffolding|out]  => ${result}" && exit 1
  info "[ui_scaffolding|out] => ${result}"
}

infra_scaffolding(){
  info "[infra_scaffolding|in]"
  _pwd=`pwd`
  cd "$INFRA_DIR"

  info "[infra_scaffolding] installing: typescript@${TYPESCRIPT_VERSION} and  aws-cdk@${CDK_VERSION}"
  npm install -g "typescript@${TYPESCRIPT_VERSION}" "aws-cdk@${CDK_VERSION}" && \
    cdk init app --language typescript

  result="$?"
  cd "$_pwd"
  [ "$result" -ne "0" ] && err "[install_infra_reqs|out]  => ${result}" && exit 1
  info "[infra_scaffolding|out] => ${result}"
}

ngrok_on(){
  info "[ngrok_on|in]"
  tmole $PORT &
  info "[ngrok_on|out]"
}

ngrok_off(){
  info "[ngrok_off|in]"
  pid=$(ps -a | grep tunnelmole | grep -v "grep" | awk '{print $1}')
  kill -9 $pid
  info "[ngrok_off|out]"
}

# -------------------------------------
usage() {
  cat <<EOM
  usage:
  $(basename $0) { option }
    options:
      - update_bashutils                    updates the include '.bashutils' file
      - commands                            handy commands list
      - prereqs                             check requirements to develop the project
      - ui <option>
          options:
            scaffolding                     initializes the react app
      - infra <option>
          options:
            scaffolding                     initializes IaC solution
            on                              deploys infrastructure
            off                             destroys infrastructure
      - ngrok {on, off}                     sets up (and closes) tunnel with a dns to local '$PORT'


      
EOM
  exit 1
}

debug "1: $1 2: $2 3: $3 4: $4 5: $5 6: $6 7: $7 8: $8 9: $9"

case "$1" in
  update_bashutils)
    update_bashutils
    ;;
  commands)
    commands
    ;;
  prereqs)
    prereqs
    ;;
  ui)
    case "$2" in
      scaffolding)
        ui_scaffolding
        ;;
      *)
        usage
        ;;
    esac
    ;;
  infra)
    case "$2" in
      scaffolding)
        infra_scaffolding
        ;;
      on)
        cdk_infra on
        ;;
      off)
        cdk_infra off
        ;;
      *)
        usage
        ;;
    esac
    ;;
  ngrok)
    case "$2" in
      on)
        ngrok_on
        ;;
      off)
        ngrok_off
        ;;
      *)
        usage
        ;;
    esac
    ;;
  *)
    usage
    ;;
esac

debug "?: $?"