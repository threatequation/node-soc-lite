#!/usr/bin/env bash
main_directory="`pwd`"
echo "The current working directory: $main_directory"
_mydir=$(dirname "$PWD")
echo "The previous current working directory: $(dirname "$PWD")"
dir=node_modules
node=nodejs-plugin
#echo "My working dir: $_mydir"
if [[ ! -d "$_mydir" ]]
echo "In the directory ..."
then
        if [[ ! -L $_mydir ]]
        then
                echo "Directory doesn't exist. Creating now"
                cd $_mydir
                mkdir $dir
                echo "Directory created"
                echo "directory $PWD"
                cd $dir
                echo "current directory $PWD"
                current_dir="`pwd`"
                cp -R $main_directory $current_dir
                cd $node
                npm install
        else
                echo "Directory exists"
                cd $_mydir
                mkdir $dir
                echo "Directory created"
                echo "directory $PWD"
                cd $dir
                echo "current directory $PWD"
                current_dir="`pwd`"
                cp -R $main_directory $current_dir
                cd $node
                npm install
        fi
fi
