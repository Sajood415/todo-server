# Todo App Bakend

## Project Structure
1. config/db.js
Manages the connection to MongoDB using Mongoose.
Reads the MongoDB connection URL from the environment variables.
2. controllers/taskController.js
Handles CRUD operations for tasks.
Exports functions for getting all tasks, getting a task by ID, creating a new task, updating a task, and deleting a task.
3. models/task.js
Defines the Mongoose schema for the Task model.
Contains properties such as title, completed, and createdAt.
Defaults completed to false and createdAt to the current date.
Exports the Mongoose model for the Task schema.
4. routes/task.js
Defines the Express router for handling task-related API routes.
Maps HTTP methods (GET, POST, PUT, DELETE) to corresponding controller functions.
Exports the router for use in the main server file.
5. server.js
Main entry point for the Express application.
Configures middleware such as CORS, body-parser, and sets up routes.
Connects to MongoDB using the connectDB function from config/db.js.
Listens on a specified port (default is 3002) for incoming HTTP requests.

## Getting Started
## Install dependencies:

```bash
npm install
```bash

Set up MongoDB:

Create a MongoDB instance.
Set the connection URL in the .env file or use the default URL in config/db.js.
Run the server:

```bash
npm start
```bash

