# Online Courses - Database

For the database of this project, I used Docker and MySQL. The Docker Compose file provided in the db-init folder will automatically create the tables and populate them with data. The data used by Docker for the database persistence will be stored in the db-storage folder.

## Installation

To get the database up and running follow these steps:

- Install Docker.
- Execute the following command in the database directory of the project.
  ```
  docker-compose up -d
  ```
