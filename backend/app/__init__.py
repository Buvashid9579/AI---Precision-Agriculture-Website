from flask import Flask
from flask_cors import CORS
from .config import DevelopmentConfig
from .extensions import db
import os

def create_app():
    app = Flask(__name__)

    # Load configuration
    app.config.from_object(DevelopmentConfig)

    # Initialize extensions
    db.init_app(app)
    CORS(app, resources={r"/api/*": {"origins": "*"}})  # allow frontend for now

    # Register blueprints
    from .routes.auth import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/api/auth')

    # Health check route
    @app.route('/health')
    def health():
        return {"status": "healthy", "message": "Backend is alive!"}

    return app