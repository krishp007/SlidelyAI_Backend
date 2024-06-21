
### Backend README

# Backend - Node.js and Express Server

## Description
This is the backend server for managing submissions, built using Node.js and Express. The server stores submissions in a JSON file.

## Features
- Endpoint to submit a new entry.
- Endpoint to read a submission by index.
- Endpoint to get the total number of submissions.
- CORS support for frontend-backend communication.

## Prerequisites
- [Node.js](https://nodejs.org/) (12.x or later)
- [npm](https://www.npmjs.com/)

## Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-name>/backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `db.json` file in the `src` directory with the following structure:
    ```json
    {
      "submissions": []
    }
    ```

4. Start the server:
    ```sh
    npm start
    ```
    The server will be running at `http://localhost:3000`.

## API Endpoints
- **GET /ping**: Check server status.
- **POST /submit**: Submit a new entry.
    - Request body:
        ```json
        {
            "name": "string",
            "email": "string",
            "phone": "string",
            "github_link": "string",
            "stopwatch_time": "string"
        }
        ```
- **GET /read?index={index}**: Read a submission by index.
- **GET /total**: Get the total number of submissions.

