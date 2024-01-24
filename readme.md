# Getting Start

## 1. Setting Up `.env` Files
- Go to directory `backend`.
- Change `.env-example` to `.env`
```sh
SECRET_KEY = "YourSpeacialKey"
```

## 2. Setting up Docker & Migrations & Create Super User

- You must the be directory `backend`

```sh
docker-compose build
```

- Makemigrations from Docker

```sh
docker-compose run djapp python manage.py makemigrations
```

- Migration from Docker

```sh
docker-compose run djapp python manage.py migrate
```

- Create Super User

```sh
docker-compose run djapp python manage.py createsuperuser
```

- Run the Docker

```sh
docker-compose up
```

- Now you can go to [127.0.0.1:8000](127.0.0.1:8000) to see it live. 🚀
- Admin panel [127.0.0.1:8000/admin](127.0.0.1:8000/admin)
- You can create what u want!

## 3. Check the our API'S
- You should use a tool like Postman or Insomnia for check out the endpoints
- `http://127.0.0.1:8000/swagger/` or `http://127.0.0.1:8000/redoc/` can be check the api's

# Working Space
- All applications are inside the `Apps` folder.
- The `static` folder was completely collectstatic.
- Can be chill with our project 🚀