#!/bin/bash
cd "$(cd -P -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)";

# Exit when any command fails
set -e

# Build library version
echo '> Building latest library version ...';
ng build --prod
cp -f ../README.md ../dist;
cp -f ../LICENSE ../dist;
cp -f ../package.json ../dist;

# Running tests
echo '';
echo '> Running tests...';
npx jasmine ../package.spec.ts

# Check if main project package.json and library package.json are have same property values
echo '';
echo '> Comparing package.json files between repo and library...';

repVersion=$( cat ../package.json | jq -r ".version" );
libVersion=$( cat ../dist/iqui-ngx/package.json | jq -r ".version");
echo "- version: '${repVersion}' ?= '${libVersion}'";
if [ "${repVersion}" != "${libVersion}" ]; then
  echo "ERROR: version in package.json are different between the showcase repo and the library!"
  exit 1;
fi

repAuthor=$( cat ../package.json | jq -r ".author" );
libAuthor=$( cat ../dist/iqui-ngx/package.json | jq -r ".author");
echo "- author: '${repAuthor}' ?= '${libAuthor}'";
if [ "${repAuthor}" != "${libAuthor}" ]; then
  echo "ERROR: author in package.json are different between the showcase repo and the library!"
  exit 1;
fi

repTitle=$( cat ../package.json | jq -r ".title" );
libTitle=$( cat ../dist/iqui-ngx/package.json | jq -r ".title");
echo "- title: '${repTitle}' ?= '${libTitle}'";
if [ "${repTitle}" != "${libTitle}" ]; then
  echo "ERROR: title in package.json are different between the showcase repo and the library!"
  exit 1;
fi

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
