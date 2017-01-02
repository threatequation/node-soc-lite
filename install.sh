echo "hellow world"
dir=node_modules
node=nodejs-plugin
if [[ ! -e $dir ]]; then
    mkdir $dir
    cd $dir
    if [[ ! -e $dir ]]; then
        mkdir $node
    else 
        echo "dir alreadey exist"
elif [[ ! -d $dir ]]; then
    echo "$dir already exists but is not a directory" 1>&2
else
    echo "$dir already exists"
fi