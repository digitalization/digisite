#!/bin/bash

git pull
grunt deploy
sudo -u www-data cp -r public/* /var/www/digitalization.nl/www