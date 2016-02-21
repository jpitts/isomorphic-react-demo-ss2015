#!/usr/bin/env bash

# directory
BINDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $BINDIR
cd ../../
DIR=`pwd`

cd $DIR

# watch the files and rebuild this thing if one changes
# SEE: Gulpfile.js
node_modules/gulp/bin/gulp.js watch

