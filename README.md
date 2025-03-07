## Instructions for Running

To run the Recipe Application, you need to start both the frontend and backend servers. Follow the steps below for each part.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Running the Backend Server

1. **Navigate to the backend directory**:
     cd path/to/your/project/server
   
2. **Install backend dependencies**:
    npm install

3.**Set up environment variables**:Create a .env file in the server directory and add the following variables
    PORT=5000
    API_URL=http://localhost:5000
    CLIENT_URL=http://localhost:3000
    API_KEY="1"

4. **Start the backend server**
    npx nodemon

   ### Running the Frontend Server
   
1. **Navigate to the frontend directory**:
    cd path/to/your/project/client
   
3. **Install frontend dependencies**:
    npm install

3.**Set up environment variables**:Create a .env.local file in the client directory and add the following variable
   NEXT_PUBLIC_API_URL=http://localhost:5000
    NEXT_API_KEY="1"

4. **Start the frontend server**:
    npm run dev
   
The frontend server will run on http://localhost:3000.
