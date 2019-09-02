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
VALUES (1, 'Jaime Palomero');

INSERT INTO teachers (id, name)
VALUES (2, 'Míriam Romero');

INSERT INTO teachers (id, name)
VALUES (3, 'Andrés Cabrera');

/* INSERT COURSES */

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Un primer vistazo a HTML, CSS y JS", "BASIC", 5, false, 1);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Tu primera web con Angular", "INTERMEDIATE", 10, true, 1);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("VUE en profundidad", "ADVANCED", 15, true, 2);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Optimización de peticiones en MySQL", "ADVANCED", 10, true, 1);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Introducción a la programación en Java", "BASIC", 15, true, 3);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Gestión óptima de memoria en C", "INTERMEDIATE", 20, false, 3);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Optimización mediante funciones en ensamblador", "ADVANCED", 15, true, 2);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Programación competitiva: un poco de todo", "INTERMEDIATE", 40, true, 2);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Programación competitiva: SWERC", "ADVANCED", 20, true, 2);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("React, un nuevo planteamiento", "INTERMEDIATE", 30, false, 1);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Acercamiento a la programación con Scratch", "BASIC", 10, true, 3);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("TypeScript, programación web tipada", "INTERMEDIATE", 25, true, 1);

INSERT INTO courses (title, level, hours, active, teacher_id)
VALUES ("Introducción a la programación en C", "BASIC", 20, true, 2);