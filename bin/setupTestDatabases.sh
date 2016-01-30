#!/bin/sh
# Script used to create & set up the test database for Continuous Integration
cp config/config.json.tmpl config/config.json 	 # Copy template file to template
sed -i -- 's/"_INSERT USERNAME_"/"postgres"/g' config/config.json # change username for db
sed -i -- 's/"_INSERT PASSWORD_"/""/g' config/config.json # change password for db
if [ '$DB' = 'pgsql' ]; then psql -c 'DROP DATABASE IF EXISTS drywall-test;' -U postgres; fi
if [ '$DB' = 'pgsql' ]; then psql -c 'create database drywall-test;' -U postgres; fi	
cat config/config.json