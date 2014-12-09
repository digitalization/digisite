#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Starting built in PHP web server for development testing (/public/)"
echo "-------------------------------------------------------------------"

php -S 127.0.0.1:8080 -t $BASE_DIR/public/  $BASE_DIR/server/server.php