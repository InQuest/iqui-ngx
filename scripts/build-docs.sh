#!/bin/bash
rm -rf ./docs
mkdir ./docs
ng build --project showcase --output-path docs --base-href /iqui-ngx/
cp ./docs/index.html ./docs/404.html
