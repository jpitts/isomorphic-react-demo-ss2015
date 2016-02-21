#!/usr/bin/env bash

# defaults
SCREENID="nodereact-devel"
ENV=""

# directory
BINDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $BINDIR
cd ../../
DIR=`pwd`

cd $DIR

echo "Stop developing!"

# stop screen
echo "Stop the screen session"
CMD="screen -X -S $SCREENID quit"
eval $CMD

echo "Done."
