# Quiz App Backend

This is the backend component of the Quiz App project. It provides the necessary APIs and functionality to support the Quiz App frontend.

## Getting Started

To get started with the Quiz App backend, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/quiz-app-backend.git`
2. Install the dependencies: `npm install`
3. Set up the environment variables:
     - Create a `.env` file in the root directory
     - Define the following variables in the `.env` file:
         - `MONGODB_URI`: Connection string for your mongoDb database
         -rest of the variables are in the env.txt file
4. Start the server: `npm start`

## API Documentation

The Quiz App backend provides the following APIs:

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Log in an existing user
- `GET /api/quizzes`: Get a list of all quizzes
- `GET /api/quizzes/:id`: Get details of a specific quiz
- `POST /api/quizzes`: Create a new quiz
- `PUT /api/quizzes/:id`: Update an existing quiz
- `DELETE /api/quizzes/:id`: Delete a quiz

For detailed information on each API, refer to the [API Documentation](./API_DOCUMENTATION.md).

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- Mongoose
- Bcrypt

