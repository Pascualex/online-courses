package com.github.pascualex.oc.utils;

import com.github.pascualex.oc.model.Course;
import com.github.pascualex.oc.model.CourseLevel;

import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Stream;

public final class CourseConditionalFilters {

    public static Stream<Course> bySearch(Stream<Course> courses, String search) {
        if (search == null) return courses;
        String[] words = search.toLowerCase().split("-");
        return courses.filter(course -> {
            String formattedTitle = course.getTitle().toLowerCase();
            for (String word : words) { if (!containsWord(formattedTitle, word)) return false; }
            return true;
        });
    }

    public static Stream<Course> byLevel(Stream<Course> courses, String levelString) {
        if (levelString == null) return courses;
        CourseLevel level = CourseLevel.valueOf(levelString);
        return courses.filter(course -> course.getLevel() == level);
    }

    public static Stream<Course> byActive(Stream<Course> courses, Boolean active) {
        if (active == null) return courses;
        return courses.filter(course -> course.isActive() == active);
    }

    public static Stream<Course> byTeacherId(Stream<Course> courses, Integer teacherId) {
        if (teacherId == null) return courses;
        return courses.filter(course -> course.getTeacher().getId() == teacherId);
    }

    private static boolean containsWord(String string, String word){
        String patternString = "\\b" + word + "\\b";
        Pattern pattern = Pattern.compile(patternString);
        Matcher matcher = pattern.matcher(string);
        return matcher.find();
    }
}
