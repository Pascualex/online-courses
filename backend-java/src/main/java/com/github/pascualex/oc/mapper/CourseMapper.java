package com.github.pascualex.oc.mapper;

import com.github.pascualex.oc.model.Course;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface CourseMapper {

    List<Course> getCourses();

    List<Course> getCoursesById(@Param("id") int id);

    void addCourse(@Param("course") Course course);

    void setCoursesActiveById(@Param("id") int id, @Param("active") boolean active);

    int removeCoursesById(@Param("id") int id);
}
