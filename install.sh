#!/usr/bin/env bash
echo "hellow world"
dir=node_modules
node=nodejs-plugin
if [[ ! -e $dir ]]; then
    mkdir $dir
    cd $dir
    if [[ ! -e $dir ]]; then
        mkdir $node
        npm install
    else 
        echo "dir alreadey exist"
        npm install
elif [[ ! -d $dir ]]; then
    echo "$dir already exists but is not a directory" 1>&2
else
    echo "$dir already exists"
fi