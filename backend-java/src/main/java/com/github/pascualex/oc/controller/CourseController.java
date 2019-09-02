package com.github.pascualex.oc.controller;

import com.github.pascualex.oc.model.Course;
import com.github.pascualex.oc.service.CourseService;
import com.github.pascualex.oc.utils.ActiveWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class CourseController {

    private final CourseService courseService;

    @Autowired
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/courses")
    public List<Course> getCourses(
        @RequestParam(value = "q", required = false) String search,
        @RequestParam(value = "level", required = false) String level,
        @RequestParam(value = "active", required = false) Boolean active,
        @RequestParam(value = "teacher", required = false) Integer teacherId
    ) {
        return courseService.getCourses(search, level, active, teacherId);
    }

    @GetMapping("/courses/{id}")
    public ResponseEntity<Course> getCourse(@PathVariable int id) {
        Course course = courseService.getCourse(id);
        if (course == null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        return new ResponseEntity<>(course, HttpStatus.OK);
    }

    @PostMapping("/courses")
    public ResponseEntity<Course> addCourse(@RequestBody Course course) {
        if (!courseService.addCourse(course)) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(course, HttpStatus.OK);
    }

    @PutMapping("/courses/{id}/active")
    public Course setCourseActive(@PathVariable int id, @RequestBody ActiveWrapper wrapper) {
        return courseService.setCourseActive(id, wrapper.isActive());
    }

    @DeleteMapping("/courses/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeCourse(@PathVariable int id) {
        courseService.removeCourse(id);
    }
}
