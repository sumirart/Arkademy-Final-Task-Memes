from flask import Flask, request, Response, json
from flask_cors import CORS
from scrap import *

app = Flask(__name__)
CORS(app)


@app.route('/tribunnews', methods=['GET'])
def All():
    a = getAll()
    return Response(a, mimetype='application/json')