# My Profile

A personal profile website built with **React** (frontend) and **FastAPI** (backend).

## Project Structure

```
myprofile/
├── backend/
│   ├── app/
│   │   └── main.py          # FastAPI application & profile data
│   └── requirements.txt
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── components/       # React components (Header, About, Skills, …)
│       ├── App.js
│       ├── App.css
│       ├── index.js
│       └── index.css
└── README.md
```

## Getting Started

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

The API runs at **http://localhost:8000**. Visit `/api/profile` to see the profile JSON.

### Frontend

```bash
cd frontend
npm install
npm start
```

The app opens at **http://localhost:3000** and fetches profile data from the backend.

## Customise

Edit **backend/app/main.py** → `get_profile()` to update your name, bio, skills, experience, education, and contact info.
