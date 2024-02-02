#!/bin/bash

# Build the project
echo "Building the project..."
python3.9 -m pip install --no-cache-dir -r requirements.txt

echo "Make Migration..."
python3.9 manage.py makemigrations --noinput
python3.9 manage.py migrate --noinput
