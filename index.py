from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/one-piece")
def onePiece():
    return render_template("onePiece.html")

if __name__ == '__main__':
    app.run("192.168.1.50", 5000, debug=True)