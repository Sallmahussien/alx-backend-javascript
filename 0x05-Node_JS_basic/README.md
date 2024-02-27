# Project: 0x05. NodeJS Basics

## Resources

#### Read or watch:

* [Node JS getting started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
* [Process API doc](https://node.readthedocs.io/en/latest/api/process/)
* [Child process](https://nodejs.org/api/child_process.html)
* [Express getting started](https://expressjs.com/en/starter/installing.html)
* [Mocha documentation](https://mochajs.org/)
* [Nodemon documentation](https://github.com/remy/nodemon#nodemon)
## Tasks

| Task | File |
| ---- | ---- |
| 0. Executing basic javascript with Node JS |  |
| 1. Using Process stdin |  |
| 2. Reading a file synchronously with Node JS |  |
| 3. Reading a file asynchronously with Node JS |  |
| 4. Create a small HTTP server using Node's HTTP module |  |
| 5. Create a more complex HTTP server using Node's HTTP module |  |
| 6. Create a small HTTP server using Express | [6-http_express.js](./6-http_express.js) |
| 7. Create a more complex HTTP server using Express | [7-http_express.js](./7-http_express.js) |
| 8. Organize a complex HTTP server using Express | [full_server/utils.js](./full_server/utils.js), [full_server/controllers/AppController.js](./full_server/controllers/AppController.js), [full_server/controllers/StudentsController.js](./full_server/controllers/StudentsController.js), [full_server/routes/index.js](./full_server/routes/index.js), [full_server/server.js](./full_server/server.js) |

[0-console.js](./0-console.js)

Create a function named displayMessage that prints in STDOUT the string argument.

[1-stdin.js](./1-stdin.js)

Create a program that will be executed through command line:
- It should display the message `Welcome to Holberton School, what is your name?` (followed by a new line)
- The user should be able to input their name on a new line
- The program should display `Your name is: INPUT`
- When the user ends the program, it should display `This important software is now closing` (followed by a new line)

**Requirements:**

- Your code will be tested through a child process, make sure you have everything you need for that

[2-read_file.js](./2-read_file.js)

Using the database [database.csv](./database.csv):
- Create a function named `countStudents`. It should accept a path in argument
- The script should attempt to read the database file synchronously
- If the database is not available, it should throw an error with the text `Cannot load the database`
- If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
- It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
- CSV file can contain empty lines (at the end) - and they are not a valid student!

[3-read_file_async.js](./3-read_file_async.js)

Using the database [database.csv](./database.csv):
- Create a function named `countStudents`. It should accept a path in argument (same as in `2-read_file.js`)
- The script should attempt to read the database file asynchronously
- The function should return a Promise
- If the database is not available, it should throw an error with the text `Cannot load the database`
- If the database is available, it should log the following message to the console `Number of students: NUMBER_OF_STUDENTS`
- It should log the number of students in each field, and the list with the following format: `Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES`
- CSV file can contain empty lines (at the end) - and they are not a valid student!

[4-http.js](./4-http.js)

create a small HTTP server using the `http` module:

- It should be assigned to the variable app and this one must be exported
- HTTP server should listen on port 1245
- Displays Hello Holberton School! in the page body for any endpoint as plain text

[5-http.js](./5-http.js)

create a small HTTP server using the http module:

- It should be assigned to the variable app and this one must be exported
- HTTP server should listen on port 1245
- It should return plain text
- When the URL path is `/`, it should display `Hello Holberton School!` in the page body
- When the URL path is `/students`, it should display `This is the list of our students` followed by the same content as the file 3-read_file_async.- js (with and without the database) - the name of the database must be passed as argument of the file
- CSV file can contain empty lines (at the end) - and they are not a valid student!