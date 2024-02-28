# Todo App Backend

## Project Structure

* config/db.js<br>
Manages the connection to MongoDB using Mongoose.
Reads the MongoDB connection URL from the environment variables.

* controllers/taskController.js<br>
Handles CRUD operations for tasks.
Exports functions for getting all tasks, getting a task by ID, creating a new task, updating a task, and deleting a task.

* models/task.js<br>
Defines the Mongoose schema for the Task model.
Contains properties such as title, completed, and createdAt.
Defaults completed to false and createdAt to the current date.

* routes/task.js<br>
Defines the Express router for handling task-related API routes.
Maps HTTP methods (GET, POST, PUT, DELETE) to corresponding controller functions.

* server.js<br>
Main entry point for the Express application.
Configures middleware such as CORS, body-parser, and sets up routes.
Connects to MongoDB using the connectDB function from config/db.js.
Listens on a specified port (default is 3002) for incoming HTTP requests.

## Getting Started

## Clone Project
```bash
git clone https://github.com/Sajood415/todo-server
cd todo-server
```

## Install dependencies:

```bash
npm install
```

### Set up MongoDB:

Create a MongoDB instance.
Set the connection URL in the .env file or use the default URL in config/db.js.
```bash
const DATABASE_URL = process.env.DATABASE_URL || "ADD URL HERE";
```

### Run the server:

```bash
npm start
```

