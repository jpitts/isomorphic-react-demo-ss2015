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

echo "Start developing!"

# start screen
echo "Start a screen session"
CMD="bash -c 'sleep 2; screen -d $SCREENID' & screen -c $DIR/devel/config/devel.screenrc -m"
eval $CMD

# configure individual screens

# notes
CMD="screen -S $SCREENID -p0 -X stuff \$'\03 cd $DIR \015'"
eval $CMD

# git
CMD="screen -S $SCREENID -p1 -X stuff \$'\03 cd $DIR \015'"
eval $CMD

# bash
CMD="screen -S $SCREENID -p2 -X stuff \$'\03 cd $DIR \015'"
eval $CMD

# config
CMD="screen -S $SCREENID -p3 -X stuff \$'\03 cd $DIR/config \015'"
eval $CMD

# server
CMD="screen -S $SCREENID -p4 -X stuff \$'\03 cd $DIR \015'"
eval $CMD

# app
CMD="screen -S $SCREENID -p5 -X stuff \$'\03 cd $DIR/entities/app \015'"
eval $CMD

# auth
CMD="screen -S $SCREENID -p6 -X stuff \$'\03 cd $DIR/entities/auth \015'"
eval $CMD

# foyer
CMD="screen -S $SCREENID -p7 -X stuff \$'\03 cd $DIR/entities/foyer \015'"
eval $CMD

# workspace
CMD="screen -S $SCREENID -p8 -X stuff \$'\03 cd $DIR/entities/workspace \015'"
eval $CMD

# user
CMD="screen -S $SCREENID -p9 -X stuff \$'\03 cd $DIR/entities/user \015'"
eval $CMD

# css
CMD="screen -S $SCREENID -p10 -X stuff \$'\03 cd $DIR/public/css \015'"
eval $CMD

# bash
CMD="screen -S $SCREENID -p11 -X stuff \$'\03 cd $DIR \015'"
eval $CMD

# node service
CMD="screen -S $SCREENID -p12 -X stuff \$'\03 cd $DIR \015'"
eval $CMD

# redis service
CMD="screen -S $SCREENID -p13 -X stuff \$'\03 cd $DIR/vendor/redis \015'"
eval $CMD

# mongodb service
CMD="screen -S $SCREENID -p14 -X stuff \$'\03 cd $DIR/vendor/mongodb \015'"
eval $CMD

# bash
CMD="screen -S $SCREENID -p15 -X stuff \$'\03 cd $DIR \015'"
eval $CMD

# mongo client
CMD="screen -S $SCREENID -p16 -X stuff \$'\03 cd $DIR/vendor/mongodb \015'"
eval $CMD


# wrap up

# leave a message in screen 0
CMD="screen -S $SCREENID -p0 -X stuff \$'\03 cat $DIR/devel/config/devel.txt \015'"
eval $CMD

echo "Done."
echo "Now launching the session..."

# wait a moment
sleep 2

# now load the screen up
CMD="screen -dr $SCREENID"
eval $CMD


