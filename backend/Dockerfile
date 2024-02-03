FROM python:3.12

ENV PIP_DISABLE_PIP_VERSION_CHECK=1
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /home/congenial

COPY requirements.txt /home/congenial

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . .