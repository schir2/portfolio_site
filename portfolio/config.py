import os

DEBUG = True
SQLALCHEMY_DATABASE_URI = 'sqlite:///portfolio.db'
SQLALCHEMY_TRACK_MODIFICATIONS = False
SECRET_KEY = os.environ['SECRET_KEY']
