#!/bin/bash


# Create environment
python3.12 -m venv venv
source venv/bin/activate 

# Build the project
echo "Building the project..."
python3.12 -m pip install --upgrade pip
python3.12 -m pip install --no-cache-dir -r requirements.txt
python3.12 -m pip install psycopg2-binary --no-cache-dir

echo "Make Migration..."
python3.12 manage.py makemigrations --noinput
python3.12 manage.py migrate --noinput
python3.12 manage.py collectstatic --no-input --clear