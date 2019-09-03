/* CREATE TEACHERS TABLE */

CREATE TABLE teachers (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	PRIMARY KEY (id)
);

/* CREATE COURSES TABLE */

CREATE TABLE courses (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	title VARCHAR(50) NOT NULL,
	level VARCHAR(12) NOT NULL,
	hours INT UNSIGNED NOT NULL,
	active TINYINT NOT NULL,
	teacher_id INT UNSIGNED NOT NULL,
	CONSTRAINT fk_teacher_id PRIMARY KEY (id),
        FOREIGN KEY (teacher_id) REFERENCES teachers(id)
        ON DELETE CASCADE
);

/* DROP TEACHERS AND COURSES */

DELETE FROM teachers;

/* INSERT TEACHERS */

INSERT INTO teachers (id, name)
VALUES (1, 'Elliot Fraser');

INSERT INTO teachers (id, name)
VALUES (2, 'Ewan Bradley');

INSERT INTO teachers (id, name)
VALUES (3, 'Ethan Dawson');

INSERT INTO teachers (id, name)
VALUES (4, 'Kyle Gordon');

INSERT INTO teachers (id, name)
VALUES (5, 'Charles Doyle');

INSERT INTO teachers (id, name)
VALUES (6, 'Landyn Sullivan');

INSERT INTO teachers (id, name)
VALUES (7, 'Emilio Levine');

INSERT INTO teachers (id, name)
VALUES (8, 'Payton Hutchinson');

INSERT INTO teachers (id, name)
VALUES (9, 'Callen Knapp');

INSERT INTO teachers (id, name)
VALUES (10, 'Branson Walton');

/* INSERT COURSES */

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Learn MySQL", "BASIC", 2, true, 1);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("The Ultimate MySQL Bootcamp", "INTERMEDIATE", 21, true, 1);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("MySQL for Data Analytics", "ADVANCED", 12, true, 1);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Your First Steps in Python", "BASIC", 8, true, 1);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Python: Everything You Need to Know", "INTERMEDIATE", 43, true, 1);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Machine learning with Python", "ADVANCED", 26, true, 1);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("The Python Bible", "INTERMEDIATE", 13, true, 2);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Python 3 Bootcamp", "INTERMEDIATE", 59, true, 2);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Java Step by Step", "BASIC", 21, true, 2);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Java Programming Masterclass", "INTERMEDIATE", 36, true, 2);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Java In-Depth", "ADVANCED", 82, true, 2);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Java for Complete Beginners", "BASIC", 6, true, 3);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("The Complete Java Course", "INTERMEDIATE", 35, true, 3);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Java Memory Management", "ADVANCED", 12, true, 3);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Java: JSP, Servlets and JDBC", "ADVANCED", 14, true, 3);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("C Programming for Beginners", "BASIC", 20, true, 4);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("C Step by Step", "INTERMEDIATE", 29, false, 4);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Advanced C Programming: Pointers", "ADVANCED", 4, true, 4);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("C for Absolute Beginners", "BASIC", 3, true, 5);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("C in Depth: The Complete Guide", "ADVANCED", 47, true, 5);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("30 days of Python", "INTERMEDIATE", 30, true, 6);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Data Structures & Algorithms in Python", "INTERMEDIATE", 14, true, 6);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Angular 8 - The Complete Guide", "INTERMEDIATE", 33, false, 7);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("React - The Complete Guide", "INTERMEDIATE", 32, true, 8);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Build Web Apps with Vue", "INTERMEDIATE", 32, true, 9);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("HTML, CSS and JS for Complete Beginners", "BASIC", 52, true, 10);