# Test Backend #

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(os.path.abspath(__file__)), '../my-react-app/build'), static_url_path='/')
CORS(app)

@app.route('/submit', methods=['POST'])
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
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

def _calculate_fibbonacci(integer):
    if integer == 0:
        return 0
    elif integer == 1:
        return 1
    else:
        return _calculate_fibbonacci(integer - 1) + _calculate_fibbonacci(integer - 2)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)