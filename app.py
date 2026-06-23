from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # This just tells Flask to load your HTML file
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)