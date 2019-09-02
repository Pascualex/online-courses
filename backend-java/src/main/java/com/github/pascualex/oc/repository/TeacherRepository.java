package com.github.pascualex.oc.repository;

import com.github.pascualex.oc.mapper.TeacherMapper;
import com.github.pascualex.oc.model.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TeacherRepository {

    private final TeacherMapper teacherMapper;

    @Autowired
    public TeacherRepository(TeacherMapper teacherMapper) {
        this.teacherMapper = teacherMapper;
    }

    public List<Teacher> getTeachers() {
        return teacherMapper.getTeachers();
    }

    public Teacher getTeacher(int id) {
        final List<Teacher> teachers = teacherMapper.getTeachersById(id);

        if (teachers.size() == 0) return null;
        if (teachers.size() > 1) throw new RuntimeException("More than one course found with id=" + id + ".");

        return teachers.get(0);
    }

    public void addTeacher(Teacher teacher) {
        teacherMapper.addTeacher(teacher);
    }

    public void removeTeacher(int id) {
        teacherMapper.removeTeachersById(id);
    }
}
