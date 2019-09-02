package com.github.pascualex.oc.model;

public class Course {

    private final int id;
    private final String title;
    private final CourseLevel level;
    private final int hours;
    private final boolean active;
    private final Teacher teacher;

    public Course(int id, String title, CourseLevel level, int hours, boolean active, Teacher teacher) {
        this.id = id;
        this.title = title;
        this.level = level;
        this.hours = hours;
        this.active = active;
        this.teacher = teacher;
    }

    public Course(int id, String title, String level, int hours, boolean active, Teacher teacher) {
        this(id, title, CourseLevel.valueOf(level), hours, active, teacher);
    }

    public Course(String title, CourseLevel level, int hours, boolean active, Teacher teacher) {
        this(-1, title, level, hours, active, teacher);
    }

    public Course() {
        this(-1, "", CourseLevel.UNKNOWN, -1, false, null);
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public CourseLevel getLevel() {
        return level;
    }

    public int getHours() {
        return hours;
    }

    public boolean isActive() {
        return active;
    }

    public Teacher getTeacher() {
        return teacher;
    }
}