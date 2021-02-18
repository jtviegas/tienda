#!/usr/bin/env bash

# ===> COMMON SECTION START  ===>
# http://bash.cumulonim.biz/NullGlob.html
shopt -s nullglob

# ---------- CONSTANTS ----------
export USER_BIN_DIR=~/.local/bin
export INCLUDES_DIR=~
export AWS_PROFILE=tienda_dev
# -------------------------------

if [ -z "$this_folder" ]; then
  this_folder="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
  if [ -z "$this_folder" ]; then
    this_folder=$(dirname $(readlink -f $0))
  fi
fi
if [ -z "$parent_folder" ]; then
  parent_folder=$(dirname "$this_folder")
fi

debug(){
    local __msg="$@"
    echo " [DEBUG] `date` ... $__msg "
}

info(){
    local __msg="$@"
    echo " [INFO]  `date` ->>> $__msg "
}

warn(){
    local __msg="$@"
    echo " [WARN]  `date` *** $__msg "
}

err(){
    local __msg="$@"
    echo " [ERR]   `date` !!! $__msg "
}

wxd=$(pwd)

npx create-react-app site && \
cd site && \
npm --save install aws-amplify @aws-amplify/ui-react bootstrap && \
amplify init
if [ ! "$?" -eq "0" ] ; then err "amplify init failed" && exit 1; fi

cat << EOF
please edit "index.js":
  import Amplify from "aws-amplify";
  import awsExports from "./aws-exports";
  Amplify.configure(awsExports);
EOF

amplify add api && amplify push && amplify codegen models && amplify status
cd "$wxd"
