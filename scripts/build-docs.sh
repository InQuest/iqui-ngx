#!/bin/bash

# Get repo root directory
REPO_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )/../" &> /dev/null && pwd );

# Ready docs directory for GitHub Pages
rm -rf $REPO_DIR/docs
mkdir $REPO_DIR/docs

# Build docs
ng build --project showcase --output-path docs --base-href /iqui-ngx/
cp $REPO_DIR/docs/index.html $REPO_DIR/docs/404.html
