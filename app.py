# Test Backend #

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import logging

logging.basicConfig(level=logging.DEBUG)

# Get the directory of the current file
current_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the build directory path
build_dir = os.environ.get('BUILD_DIR', os.path.join(current_dir, 'my-react-app', 'build'))

app = Flask(__name__, static_folder=build_dir, static_url_path='/')

# Determine the environment
ENV = os.getenv('FLASK_ENV', 'development')

if ENV == 'production':
    CORS(app, origins=["https://test-production-5f70.up.railway.app"])
else:
    CORS(app, origins=["http://localhost:3000"])

@app.route('/submit', methods=['GET', 'POST'])
def submit():
    data = request.json
    print(data)
    input_value = data.get('input')
    return_val = _calculate_fibbonacci(int(input_value))
    response_message = f"Your fibbonacci number is: {return_val}"
    return jsonify({'message': response_message})

@app.route('/report-issue', methods=['POST'])
def report_issue():
    data = request.json
    email = data.get('email')
    response_message = f"Thank you for reporting the issue. We will contact you at {email} as soon as possible."
    return jsonify({'message': response_message})

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    try:
        if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
            return send_from_directory(app.static_folder, path)
        else:
            return send_from_directory(app.static_folder, 'index.html')
    except Exception as e:
        logging.error(f"Error serving path {path}: {e}")
        return "Internal Server Error", 500

def _calculate_fibbonacci(integer):
    if integer == 0:
        return 0
    elif integer == 1:
        return 1
    else:
        return _calculate_fibbonacci(integer - 1) + _calculate_fibbonacci(integer - 2)

@app.errorhandler(404)
def not_found(e):
    logging.error(f"404 error: {request.url}")
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)