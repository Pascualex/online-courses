# Online Courses - Backend in Node

For this backend I used Node JS with TypeScript and Express.

## Comparison with the backend in Java

Because of the asynchronous capabilities of Node JS, this backend is capable of doing a better management of the resources when waiting for a database answer. The Java version leaves a thread waiting for each of the queries to the database, performing worse in situations where the information does not need to be heavily processed and these waiting times represent almost the totality of the lifespan of a thread.

The downside is that all the queries share a single thread, so, if the data needs some heavy processing before it is delivered to the frontend, this option will perform worse than the one implemented in Java.

## Installation

To get this backend up and running follow these steps:

 - Install Node JS.
 - Execute the following commands in the backend-node directory of the project.
       npm install
       npm start
