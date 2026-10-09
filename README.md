# ExamNotesAI

ExamNotesAI is an AI-powered platform that generates structured, exam-oriented notes from user input. The system is designed to help students quickly convert raw content into concise and useful study material.

---

## Features

* AI-based note generation
* Structured and concise output for exam preparation
* PDF export functionality
* User authentication system
* Credit-based usage model
* RESTful API architecture

---

## Tech Stack

Frontend:

* HTML
* CSS
* JavaScript

Backend:

* Node.js
* Express.js

Database:

* MongoDB

AI Integration:

* Google Gemini API

---

## Project Structure

```
ExamNotesAI/
│── client/        # Frontend
│── server/        # Backend (controllers, routes, services)
```

---

## Installation and Setup

### 1. Clone the repository

```
git clone https://github.com/SanjibKumarOjha/ExamNotesAI.git
cd ExamNotesAI
```

### 2. Setup backend

```
cd server
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `server` folder and add:

```
PORT=5000
MONGO_URI=your_database_url
GEMINI_API_KEY=your_api_key
JWT_SECRET=your_secret
```

### 4. Run the server

```
npm run dev
```

---

## API Endpoints

* POST /auth → User authentication
* POST /generate → Generate notes using AI
* GET /notes → Fetch saved notes
* POST /pdf → Export notes as PDF

---

## Use Case

This project is intended for students who want to:

* Generate quick revision notes
* Convert long content into structured summaries
* Improve efficiency during exam preparation

---

## Future Improvements

* Multiple note formats (brief, detailed)
* Voice-based input
* Improved frontend interface
* Mobile application support

---

## Author

Sanjib Kumar Ojha
https://github.com/SanjibKumarOjha
Sunandan Tripathy
https://github.com/Sunandan7

---

## License

This project is for educational purposes.
