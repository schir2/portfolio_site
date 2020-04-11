from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_pyfile('config.py')

from portfolio.views import *

db = SQLAlchemy(app)

import portfolio.models

if __name__ == '__main__':
    app.run(debug=True)
