#!/usr/bin/env bash

# ===> COMMON SECTION START  ===>
# http://bash.cumulonim.biz/NullGlob.html
shopt -s nullglob

# ---------- CONSTANTS ----------
export USER_BIN_DIR=~/.local/bin
export INCLUDES_DIR=~
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
export AWS_PROFILE=tienda_dev
npx create-react-app site && \
cd site && \
npm --save install aws-amplify @aws-amplify/ui-react bootstrap --force && \
amplify init && \
npm start
cd "$wxd"

