# Online Courses - Backend in Java

For this backend I used Java with Spring Boot, MyBatis and Maven.

## Comparison with the backend in Node

Because Java creates a new thread to manage each query, it will perform better in situations where the data needs to be heavily processed. In the Node version, all the queries share a single thread, making it perform poorly in these situations.

The downside is that Java will leave each of these threads waiting for their corresponding database answer. Node can make use of its asynchronous capabilities to perform better in situations where the information does not need to be heavily processed and these waiting times represent almost the totality of the lifespan of a thread in the Java version.

## Installation

To get this backend up and running follow these steps:

 - Install Java JDK 8.
 - Install Maven.
 - From your preferred IDE, compile the Maven project and run the application.
