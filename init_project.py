from pathlib import Path

BASE = Path("deal-finder")

paths = [
    "backend/app/ingestion",
    "backend/app/processing",
    "backend/app/api",
    "backend/app/services",
    "backend/data",
    "frontend/src/components",
    "frontend/src/pages",
    "frontend/src/services",
    "frontend/src/styles"
]

files = [
    "backend/app/__init__.py",
    "backend/app/main.py",
    "backend/app/database.py",
    "backend/app/models.py",
    "backend/app/config.py",
    "backend/app/ingestion/__init__.py",
    "backend/app/ingestion/copart.py",
    "backend/app/ingestion/facebook.py",
    "backend/app/processing/__init__.py",
    "backend/app/processing/normalize.py",
    "backend/app/processing/pricing.py",
    "backend/app/processing/scoring.py",
    "backend/app/api/__init__.py",
    "backend/app/api/cars.py",
    "backend/app/services/__init__.py",
    "backend/app/services/deal_engine.py",
    "backend/requirements.txt",
    "backend/README.md",
    "frontend/package.json",
    "frontend/README.md",
    "frontend/src/main.jsx",
    "frontend/src/components/CarTable.jsx",
    "frontend/src/components/Filters.jsx",
    "frontend/src/components/ProfitBadge.jsx",
    "frontend/src/pages/Dashboard.jsx",
    "frontend/src/services/api.js"
]

for p in paths:
    (BASE / p).mkdir(parents=True, exist_ok=True)

for f in files:
    file_path = BASE / f
    file_path.parent.mkdir(parents=True, exist_ok=True)
    file_path.touch()

print("✅ Project skeleton created successfully.")

