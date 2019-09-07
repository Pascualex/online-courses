# Online Courses - Backend in Java

For this backend I used Java with Spring Boot. I made the queries to the database through MyBatis and used Maven for the dependency management.

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

## Comparison with the backend in Node

Because Java creates a new thread to manage each query, it will perform better in situations where the data needs to be heavily processed. In the Node version, all the queries share a single thread, making it perform poorly in these situations.

The downside is that Java will leave each of these threads waiting for their corresponding database answer. Node can make use of its asynchronous capabilities to perform better in situations where the information does not need to be heavily processed and these waiting times represent almost the totality of the lifespan of a thread.

## Installation

To get this backend up and running follow these steps:

- Install Java JDK 8.
- Install Maven.
- Execute the following commands in the backend-java directory of the project:
  ```
  mvn clean install
  mvn exec:java
  ```

Note: make sure to set the JAVA_HOME environment variable to a valid JDK of Java 8.
