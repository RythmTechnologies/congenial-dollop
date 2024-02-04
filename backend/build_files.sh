pip install --upgrade pip
pip install -r requirements.txt

echo "Migrate işlemleri başlatılıyor..."

python manage.py makemigrations
python manage.py migrate

echo "Tamamlandı"