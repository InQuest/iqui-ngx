#!/bin/bash
cd "$(cd -P -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)";

# Build library version
echo '> Building latest library version ...';
ng build --prod

# Check if main project package.json and library package.json are have same proeprty values
echo '> Comparing package.json files between repo and library...';

repVersion=$( cat ../package.json | jq -r ".version" );
libVersion=$( cat ../dist/iqui-ngx/package.json | jq -r ".version");
echo "- version: '${repVersion}' ?= '${libVersion}'";
if [ "${repVersion}" != "${libVersion}" ]; then
  echo "ERROR: versions in package.json are different between the showcase repo and the library!"
  exit 1;
fi

repName=$( cat ../package.json | jq -r ".name" );
libName=$( cat ../dist/iqui-ngx/package.json | jq -r ".name");
echo "- name: '${repName}' ?= '${libName}'";
if [ "${repName}" != "${libName}" ]; then
  echo "ERROR: names in package.json are different between the showcase repo and the library!"
  exit 1;
fi

# TODO: Compare peer dependencies in package.json files

# TODO: Compare dependencies in package.json files

repDescription=$( cat ../package.json | jq -r ".description" );
libDescription=$( cat ../dist/iqui-ngx/package.json | jq -r ".description");
echo "- description: '${repDescription}' ?= '${libDescription}'";
if [ "${repDescription}" != "${libDescription}" ]; then
  echo "ERROR: descriptions in package.json are different between the showcase repo and the library!"
  exit 1;
fi

# Publish via NPM
cd ../dist/iqui-ngx
# npm publish
