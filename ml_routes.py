"""
SMARTEROS ML MODULE - LightGBM Integration
draw.smarterbot.cl ML endpoints
"""

import os
import json
import logging
from typing import Dict, Any, List, Optional
from datetime import datetime

logger = logging.getLogger("ml-module")

try:
    import lightgbm as lgb
    import pandas as pd
    import numpy as np
    from sklearn.model_selection import train_test_split
    from sklearn.preprocessing import LabelEncoder

    LIGHTGBM_AVAILABLE = True
except ImportError as e:
    logger.warning(f"LightGBM not available: {e}")
    LIGHTGBM_AVAILABLE = False

# ============================================
# MODELS REGISTRY
# ============================================

MODELS_REGISTRY = {}

# ============================================
# ML ENDPOINTS
# ============================================


def register_ml_routes(app):
    """Register ML routes with FastAPI app"""

    @app.post("/ml/train", tags=["ML"])
    async def train_model(
        data: Dict[str, Any],
        model_type: str = "classifier",
        target_column: str = "target",
    ):
        """
        Entrena un modelo LightGBM
        """
        if not LIGHTGBM_AVAILABLE:
            raise HTTPException(status_code=503, detail="LightGBM not installed")

        try:
            df = pd.DataFrame(data.get("features", []))

            if target_column not in df.columns:
                raise ValueError(f"Target column {target_column} not found")

            X = df.drop(columns=[target_column])
            y = df[target_column]

            if y.dtype == "object":
                le = LabelEncoder()
                y = le.fit_transform(y)

            X_train, X_test, y_train, y_test = train_test_split(
                X, y, test_size=0.2, random_state=42
            )

            if model_type == "classifier":
                model = lgb.LGBMClassifier(
                    n_estimators=100, learning_rate=0.1, num_leaves=31, random_state=42
                )
            else:
                model = lgb.LGBMRegressor(
                    n_estimators=100, learning_rate=0.1, random_state=42
                )

            model.fit(X_train, y_train)

            train_score = model.score(X_train, y_train)
            test_score = model.score(X_test, y_test)

            model_id = f"model_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
            MODELS_REGISTRY[model_id] = {
                "model": model,
                "label_encoder": le if y.dtype == "object" else None,
                "model_type": model_type,
                "features": list(X.columns),
                "created_at": datetime.now().isoformat(),
            }

            return {
                "model_id": model_id,
                "model_type": model_type,
                "features": list(X.columns),
                "train_score": train_score,
                "test_score": test_score,
                "status": "trained",
            }

        except Exception as e:
            logger.error(f"Training error: {e}")
            raise HTTPException(status_code=500, detail=str(e))

    @app.post("/ml/predict", tags=["ML"])
    async def predict(model_id: str, features: Dict[str, Any]):
        """
        Predice usando un modelo entrenado
        """
        if not LIGHTGBM_AVAILABLE:
            raise HTTPException(status_code=503, detail="LightGBM not installed")

        if model_id not in MODELS_REGISTRY:
            raise HTTPException(status_code=404, detail="Model not found")

        try:
            model_info = MODELS_REGISTRY[model_id]
            model = model_info["model"]
            le = model_info.get("label_encoder")

            df = pd.DataFrame([features])

            prediction = model.predict(df)

            if le:
                prediction = le.inverse_transform(prediction)

            return {
                "model_id": model_id,
                "prediction": prediction[0].tolist()
                if hasattr(prediction[0], "tolist")
                else prediction[0],
                "probabilities": model.predict_proba(df)[0].tolist()
                if hasattr(model, "predict_proba")
                else None,
            }

        except Exception as e:
            logger.error(f"Prediction error: {e}")
            raise HTTPException(status_code=500, detail=str(e))

    @app.get("/ml/models", tags=["ML"])
    async def list_models():
        """
        Lista modelos entrenados
        """
        return {
            "models": [
                {
                    "model_id": k,
                    "model_type": v["model_type"],
                    "features": v["features"],
                    "created_at": v["created_at"],
                }
                for k, v in MODELS_REGISTRY.items()
            ]
        }

    @app.get("/ml/health", tags=["ML"])
    async def ml_health():
        """
        Health check de ML
        """
        return {
            "status": "healthy" if LIGHTGBM_AVAILABLE else "degraded",
            "lightgbm_available": LIGHTGBM_AVAILABLE,
            "models_loaded": len(MODELS_REGISTRY),
        }

    logger.info("✅ ML routes registered")
    return app
