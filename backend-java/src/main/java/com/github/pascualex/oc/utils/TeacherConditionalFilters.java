package com.github.pascualex.oc.utils;

import com.github.pascualex.oc.model.Teacher;

import java.util.stream.Stream;

public final class TeacherConditionalFilters {

    public static Stream<Teacher> bySearch(Stream<Teacher> teachers, String search) {
        if (search == null) return teachers;
        String[] words = search.toLowerCase().split("-");
        return teachers.filter(teacher -> {
            String formattedName = teacher.getName().toLowerCase();
            for (String word : words) { if (!formattedName.contains(word)) return false; }
            return true;
        });
    }
}
