Backend - Node.js and Express Server
Description
This is the backend server for managing submissions, built using Node.js and Express. The server stores submissions in a JSON file.

Features
Endpoint to submit a new entry.
Endpoint to read a submission by index.
Endpoint to get the total number of submissions.
CORS support for frontend-backend communication.
Prerequisites
Node.js (12.x or later)
npm
Setup
Clone the repository:

sh
Copy code
git clone <repository-url>
cd <repository-name>/backend
Install dependencies:

sh
Copy code
npm install
Create a db.json file in the src directory with the following structure:

json
Copy code
{
  "submissions": []
}
Start the server:

sh
Copy code
npm start
The server will be running at http://localhost:3000.

API Endpoints
GET /ping: Check server status.
POST /submit: Submit a new entry.
Request body:
json
Copy code
{
    "name": "string",
    "email": "string",
    "phone": "string",
    "github_link": "string",
    "stopwatch_time": "string"
}
GET /read?index={index}: Read a submission by index.
GET /total: Get the total number of submissions.
