package com.github.pascualex.oc.repository;

import com.github.pascualex.oc.mapper.CourseMapper;
import com.github.pascualex.oc.model.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CourseRepository {

    private final CourseMapper courseMapper;

    @Autowired
    public CourseRepository(CourseMapper courseMapper) {
        this.courseMapper = courseMapper;
    }

    public List<Course> getCourses() {
        return courseMapper.getCourses();
    }

    public Course getCourse(int id) {
        final List<Course> courses = courseMapper.getCoursesById(id);

        if (courses.size() != 1) return null;

        return courses.get(0);
    }

    public void addCourse(Course course) {
        courseMapper.addCourse(course);
    }

    public Course setCourseActive(int id, boolean active) {
        courseMapper.setCoursesActiveById(id, active);
        return getCourse(id);
    }

    public void removeCourse(int id) {
        courseMapper.removeCoursesById(id);
    }
}