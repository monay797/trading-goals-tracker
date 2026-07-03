from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
# This allows your React app on port 3000 to talk to Flask on port 5000
CORS(app)

@app.route('/api/test', methods=['GET'])
def test_api():
    # Instead of an HTML page, we are sending a raw JSON data packet
    return jsonify({
        "status": "success",
        "message": "Flask API is live and ready for React!"
    })

if __name__ == '__main__':
    app.run(debug=True)