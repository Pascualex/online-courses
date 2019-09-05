# Online Courses - Backend in Node

For this backend I used Node JS with TypeScript and Express. I decided to go with async functions instead of callbacks or promises because the code is a lot more clear and a lot more similar to the one in Java. This way you can focus on other features of the language, like its performance in different situations, instead of the syntax.

## Endpoints

### Courses

- **/courses**
  - **GET** - Returns all existing courses. A combination of the following filters can be specified:
    - ?q=x+y - Where x and y are full words that must be present in the course title.
    - ?active=x - Where x is TRUE or FALSE.
    - ?level=x - Where x is BASIC, INTERMEDIATE or ADVANCED.
    - ?teacher=x - Where x is the id of the course teacher.
  - **POST** - Creates a new course, given the following structure:
    - title: a string of 50 characters or less characters.
    - level: BASIC, INTERMEDIATE or ADVANCED.
    - hours: an integer.
    - active: a boolean.
    - teacher: a teacher following the structure specified in its own endpoint.
- **/courses/:id**
  - **GET** - Returns, if it exists, the course that matches the id specified.
  - **DELETE** - Deletes, if it exists, the course that matches the id specified.
- **/courses/:id/active**
  - **PUT** - Updates, if the course exists, the active property of the course that matches the id specified, given the following structure:
    - active: a boolean.

### Teachers

- **/teachers**
  - **GET** - Returns all existing teachers. The following filter can be specified:
    - ?q=x+y - Where x and y are strings that must be present in the teacher's name.
  - **POST** - Creates a new teacher, given the following structure:
    - name: a string of 20 characters or less characters.
- **/teachers/:id**
  - **GET** - Returns, if it exists, the teacher that matches the id specified.
  - **DELETE** - Deletes, if it exists, the teacher that matches the id specified.

## Comparison with the backend in Java

Because of the asynchronous capabilities of Node JS, this backend is capable of doing a better management of the resources when waiting for a database answer. The Java version leaves a thread waiting for each of the queries to the database, performing worse in situations where the information does not need to be heavily processed and these waiting times represent almost the totality of the lifespan of a thread.

The downside is that all the queries share a single thread, so, if the data needs some heavy processing before it is delivered to the frontend, this option will perform worse than the one implemented in Java.

## Installation

To get this backend up and running follow these steps:

- Install Node JS.
- Execute the following commands in the backend-node directory of the project:
  ```
  npm install
  npm start
  ```