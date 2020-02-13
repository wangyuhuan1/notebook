from flask import Flask
__author__="chengchao"
app=Flask(__name__)
@app.route('/')
# 视图函数
def index():
    return "flask"
@app.route("/hello/")
def hello():
    return "hello world"
app.run(debug=True)