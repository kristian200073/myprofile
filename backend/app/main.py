import os
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

BASE_DIR = Path(__file__).resolve().parent.parent.parent
BUILD_DIR = BASE_DIR / "frontend" / "build"

app = FastAPI(title="Profile API")
# Mount static assets
app.mount("/static", StaticFiles(directory=str(BUILD_DIR / "static")), name="static")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000"],
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/api/profile")
def get_profile():
    return {
        "name": "Wang Ya Li",
        "title": "Senior Embedded Software Engineer",
        "bio": (
            "Passionate software engineer with over 20 years experience in Infineon Germany. Experience with different kinds of software development"
            "I love turning ideas into clean, efficient code."
        ),
        "skills": ["C", "Polyspace", "Cmake", "Python", "React", "FastAPI", "Docker", "SQL", "Openshift", "Gitlab", "Copilot", "Matlab", "Vscode", "Shell", "Linux" ],
        "experience": [
            {
                "role": "Software Engineer",
                "company": "Tech Company",
                "period": "2003 – Present",
                "description": "Embedded software automation, Building scalable web services and APIs.",
            },
        ],       
        "contact": {
            "email": "kristian200073@gmail.com"
        },
    }

# Serve index.html for all non-API routes (catch-all, must be last)
@app.get("/{full_path:path}")
def serve_frontend(full_path: str):
    return FileResponse(str(BUILD_DIR / "index.html"))

if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
