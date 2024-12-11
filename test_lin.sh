#!/bin/bash

# Define variables
API_URL="http://localhost:3000/api"
MONGO_URI="mongodb://db:27017/" # Update with your MongoDB URI
TODO_ID="674e5d68946185b99ca9beaa" # Replace with a valid todo ID for testing

# Function to test API endpoints
test_api_endpoints() {
    echo "Testing API Endpoints..."

    # Test GET Todos
    echo "GET /gettodos?page=1&limit=5"
    curl -X GET "$API_URL/gettodos?page=1&limit=5"
    echo -e "\n"

    # Test POST Todo
    echo "POST /todos"
    curl -X POST "$API_URL/todos" \
    -H "Content-Type: application/json" \
    -d '{
        "title": "Test Todo",
        "description": "This is a test todo",
        "activity": "Testing",
        "date": "2024-11-27",
        "isCompleted": false
    }'
    echo -e "\n"

    # Test DELETE Todo
    echo "DELETE /todos/$TODO_ID"
    curl -X DELETE "$API_URL/todos/$TODO_ID"
    echo -e "\n"
}

# Function to test database connection
test_db_connection() {
    echo "Testing Database Connection..."

    # Create a temporary Node.js script to test the database connection
    echo "const mongoose = require('mongoose');" > testDbConnection.js
    echo "const MONGO_URI = '$MONGO_URI';" >> testDbConnection.js
    echo "mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })" >> testDbConnection.js
    echo "  .then(() => { console.log('Database connection successful'); mongoose.connection.close(); })" >> testDbConnection.js
    echo "  .catch(error => { console.error('Database connection error:', error); });" >> testDbConnection.js

    # Run the temporary script
    node testDbConnection.js

    # Clean up
    rm testDbConnection.js
}

# Function to run frontend tests
run_frontend_tests() {
    echo "Running Frontend Tests..."

    # Run Jest tests
    npm test
}

# Execute functions
test_api_endpoints
test_db_connection
run_frontend_tests

echo "All tests completed."