
### Batch Script: `test_script.bat`

```batch
@echo off
setlocal

:: Define variables
set API_URL=http://localhost:3000/api
set MONGO_URI=mongodb://db:27017/ :: Update with your MongoDB URI
set TODO_ID=674e5d68946185b99ca9beaa :: Replace with a valid todo ID for testing

:: Function to test API endpoints
echo Testing API Endpoints...

:: Test GET Todos
echo GET /gettodos?page=1&limit=5
curl -X GET "%API_URL%/gettodos?page=1&limit=5"
echo.

:: Test POST Todo
echo POST /todos
curl -X POST "%API_URL%/todos" ^
-H "Content-Type: application/json" ^
-d "{\"title\": \"Test Todo\", \"description\": \"This is a test todo\", \"activity\": \"Testing\", \"date\": \"2024-11-27\", \"isCompleted\": false}"
echo.

:: Test DELETE Todo
echo DELETE /todos/%TODO_ID%
curl -X DELETE "%API_URL%/todos/%TODO_ID%"
echo.

:: Function to test database connection
echo Testing Database Connection...

:: Create a temporary Node.js script to test the database connection
(
    echo const mongoose = require('mongoose');
    echo const MONGO_URI = '%MONGO_URI%';
    echo mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    echo   .then(() => { console.log('Database connection successful'); mongoose.connection.close(); })
    echo   .catch(error => { console.error('Database connection error:', error); });
) > testDbConnection.js

:: Run the temporary script
node testDbConnection.js

:: Clean up
del testDbConnection.js

:: Function to run frontend tests
echo Running Frontend Tests...

:: Run Jest tests
npm test

echo All tests completed.
endlocal
pause
```
