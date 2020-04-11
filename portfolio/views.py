from flask import render_template

from portfolio.run import app


@app.route('/')
def index():
    return render_template('portfolio/index.html')


@app.route('/about_me')
def about_me():
    return render_template('portfolio/about_me.html')


@app.route('/blog')
def blog():
    return render_template('portfolio/blog.html')


@app.route('/projects')
def projects():
    return render_template('portfolio/projects.html')


@app.route('/resume')
def resume():
    return render_template('portfolio/resume.html')


@app.route('/contact_ma')
def contact_me():
    return render_template('portfolio/contact_me.html')


@app.route('/canvas')
def canvas():
    return render_template('portfolio/templates/canvas.html')
