#!/bin/bash

# Build the project
echo "Building the project..."
python3.9 -m pip install --upgrade pip
python3.9 -m pip install --no-cache-dir -r requirements.txt
python3.9 -m pip install psycopg2-binary --no-cache-dir

echo "Make Migration..."
python3.9 manage.py makemigrations --noinput
python3.9 manage.py migrate --noinput
python3.9 manage.py collectstatic --no-input --clear