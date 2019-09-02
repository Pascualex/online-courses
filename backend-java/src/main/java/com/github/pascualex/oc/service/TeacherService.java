package com.github.pascualex.oc.service;

import com.github.pascualex.oc.model.Teacher;
import com.github.pascualex.oc.repository.TeacherRepository;
import com.github.pascualex.oc.utils.TeacherConditionalFilters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class TeacherService {

    private final TeacherRepository teacherRepository;

    @Autowired
    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    public List<Teacher> getTeachers(String search) {
        Stream<Teacher> teachers = teacherRepository.getTeachers().stream();

        teachers = TeacherConditionalFilters.bySearch(teachers, search);

        return teachers.collect(Collectors.toList());
    }

    public Teacher getTeacher(int id) {
        return teacherRepository.getTeacher(id);
    }

    public boolean addTeacher(Teacher teacher) {
        if (!checkTeacherFields(teacher)) return false;
        teacherRepository.addTeacher(teacher);
        return true;
    }

    public void removeTeacher(int id) {
        teacherRepository.removeTeacher(id);
    }

    private boolean checkTeacherFields(Teacher teacher) {
        return (teacher.getName() != null && teacher.getName().length() >= 6 && teacher.getName().length() <= 20);
    }
}
