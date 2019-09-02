package com.github.pascualex.oc.mapper;

import com.github.pascualex.oc.model.Teacher;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface TeacherMapper {

    List<Teacher> getTeachers();

    List<Teacher> getTeachersById(@Param("id") int id);

    void addTeacher(@Param("teacher") Teacher teacher);

    int removeTeachersById(@Param("id") int id);
}
