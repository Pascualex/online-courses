package com.github.pascualex.oc.service;

import com.github.pascualex.oc.model.Course;
import com.github.pascualex.oc.model.CourseLevel;
import com.github.pascualex.oc.repository.CourseRepository;
import com.github.pascualex.oc.utils.CourseConditionalFilters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> getCourses(String search, String level, Boolean active, Integer teacherId) {
        Stream<Course> courses = courseRepository.getCourses().stream();

        courses = CourseConditionalFilters.bySearch(courses, search);
        courses = CourseConditionalFilters.byLevel(courses, level);
        courses = CourseConditionalFilters.byActive(courses, active);
        courses = CourseConditionalFilters.byTeacherId(courses, teacherId);

        return courses.collect(Collectors.toList());
    }

    public Course getCourse(int id) {
        return courseRepository.getCourse(id);
    }

    public boolean addCourse(Course course) {
        if (!checkCourseFields(course)) return false;
        courseRepository.addCourse(course);
        return true;
    }

    public Course setCourseActive(int id, boolean active) {
        return courseRepository.setCourseActive(id, active);
    }

    public void removeCourse(int id) {
        courseRepository.removeCourse(id);
    }

    private boolean checkCourseFields(Course course) {
        return (course.getTitle() != null && course.getTitle().length() >= 6 && course.getTitle().length() <= 50
                && course.getLevel() != null && course.getLevel() != CourseLevel.UNKNOWN
                && course.getHours() >= 0
                && course.getTeacher() != null);
    }
}