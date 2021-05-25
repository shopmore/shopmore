from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/title", methods=['GET', 'POST'])
def return_messages():
    resp = app.make_response(render_template("_title.html"))
    resp.headers["accept"] = "text/vnd.turbo-stream.html"
    resp.headers["content-type"] = "text/vnd.turbo-stream.html; charset=utf-8"
    resp.headers["media-type"] = "text/vnd.turbo-stream.html"
    return resp

@app.route("/paragraph", methods=['POST'])
def return_paragraph():
    resp = app.make_response(render_template("_paragraph.html"))
    resp.headers["accept"] = "text/vnd.turbo-stream.html"
    resp.headers["content-type"] = "text/vnd.turbo-stream.html; charset=utf-8"
    resp.headers["media-type"] = "text/vnd.turbo-stream.html"
    return resp