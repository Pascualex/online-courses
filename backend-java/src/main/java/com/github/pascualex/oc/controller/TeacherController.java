package com.github.pascualex.oc.controller;

import com.github.pascualex.oc.model.Teacher;
import com.github.pascualex.oc.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class TeacherController {

    private final TeacherService teacherService;

    @Autowired
    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @GetMapping("/teachers")
    public List<Teacher> getTeachers(@RequestParam(value = "q", required = false) String search) {
        return teacherService.getTeachers(search);
    }

    @GetMapping("/teachers/{id}")
    public ResponseEntity<Teacher> getTeacher(@PathVariable int id) {
        Teacher teacher = teacherService.getTeacher(id);
        if (teacher == null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(teacher, HttpStatus.OK);
    }

    @PostMapping("/teachers")
    public ResponseEntity<Teacher> addTeacher(@RequestBody Teacher teacher) {
        if (!teacherService.addTeacher(teacher)) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(teacher, HttpStatus.OK);
    }

    @DeleteMapping("/teachers/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeTeacher(@PathVariable int id) {
        teacherService.removeTeacher(id);
    }
}
