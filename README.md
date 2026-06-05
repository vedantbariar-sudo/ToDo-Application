# TODO-APP

A simple full-stack todo application built with React, Vite, Express, and MongoDB.

## Features

- View saved tasks
- Add a new task
- Delete an existing task
- Store tasks in MongoDB

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB
- API helpers: CORS, Mongoose

## Project Structure

```text
todo-app/
  backend/
    index.js
    package.json
  src/
    App.jsx
    main.jsx
  package.json
  README.md
```

## Getting Started

### 1. Install frontend dependencies

```bash
npm install
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Start MongoDB

Make sure MongoDB is running locally on:

```text
mongodb://127.0.0.1:27017/todo-app
```

### 4. Start the backend

From the `backend` folder:

```bash
node index.js
```

The backend runs on:

```text
http://localhost:5002
```

### 5. Start the frontend

From the project root:

```bash
npm run dev
```

Open the Vite URL shown in the terminal.

## API Routes

| Method | Route | Description |
| --- | --- | --- |
| GET | `/hello` | Test backend route |
| GET | `/tasks` | Get all tasks |
| POST | `/tasks` | Add a new task |
| DELETE | `/tasks` | Delete a task by id |

## Notes

- The frontend expects the backend to run at `http://localhost:5002`.
- The backend expects MongoDB to run locally.
- Task data is stored in the `todo-app` MongoDB database.
