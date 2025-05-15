from flask import Flask, render_template
import webbrowser
from threading import Timer

app = Flask(__name__)
app.config['SECRET_KEY'] = 'gizli-anahtar-buraya'
app.config['DEBUG'] = True

def open_browser():
    webbrowser.open('http://127.0.0.1:5000/')

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    Timer(1.5, open_browser).start()
    app.run(debug=app.config['DEBUG'])
