# ML Module Import
import sys

sys.path.append("/app")

try:
    from ml_routes import register_ml_routes

    register_ml_routes(app)
    print("✅ ML routes registered")
except Exception as e:
    print(f"ML module error: {e}")
