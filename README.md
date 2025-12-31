[**Live Book Website**](https://sabahat-shakeel.github.io/docuragaibook/)

# Physical AI & Humanoid AI Book

- This book explores the foundations and practical evolution of Physical AI and Humanoid AI, focusing on intelligent systems that can perceive, move, and interact within the physical world. It covers how humanoid AI models human-like behavior, decision-making, and autonomy, and how these technologies are shaping robotics, healthcare, industry, and real-world human–AI collaboration.



# Docusaurus Textbook Project

This repository contains **Docusaurus**, a digital textbook platform with an integrated AI-powered RAG chatbot. The backend is built using **FastAPI** with **OpenAI API** for AI functionality, and the frontend is developed using **React.js**. The project is designed for production-ready deployment with clean, scalable architecture.

---

## Tech Stack
- **Frontend:** React.js
- **Backend:** FastAPI, OpenAI Agent SDK (Python)
- **Deployment:** GitHub Pages for frontend

---

## Frontend Setup (React.js)
1. Install dependencies:
```
npm install
```
### Run development server:

```
npm run dev
```
### Build for production:

```
npm run build
```
### Start production server:


```
npm start
```
#### Default URL:
```
http://localhost:3000
```

## Backend Setup (FastAPI)
Create UV environment:

```
uv init <project-name>
```
cd <project-name>

run : 
```
uv venv 
Activate with: .venv\Scripts\activate

```

### Install dependencies using UV Sync:

run :
```
uv sync
```
install
Run backend server:

```
uvicorn main:app --reload
```
#### Default URL:

```
http://localhost:8000
```
### AI Chatbot
- Backend integrates OpenAI API for RAG-based responses

- Chatbot endpoint is protected and optimized for textbook content queries

- FastAPI handles API requests

#### Deployment Instructions
1. Frontend Deployment to GitHub Pages

```
npm run build
npm run export
Push the out/ directory to the gh-pages branch
```
2. Backend Deployment

- Ensure FastAPI app is hosted on a production server

- Configure domain or port to serve backend API for frontend requests

- API Documentation
- Swagger UI: /docs

- ReDoc: /redoc

3. Project Status
- Production-ready AI textbook platform

- Scalable, maintainable architecture

- Extensible for future AI integrations

-------------------------------------------------------------------


