from flask import Blueprint, jsonify, request

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json() or {}
    return jsonify({
        "message": "Login successful (placeholder)",
        "email": data.get('email')
    }), 200


@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json() or {}
    return jsonify({
        "message": "Signup successful (placeholder)",
        "data_received": data
    }), 201