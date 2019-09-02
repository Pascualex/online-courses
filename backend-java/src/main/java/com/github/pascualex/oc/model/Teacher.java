package com.github.pascualex.oc.model;

public class Teacher {

    private final int id;
    private final String name;
    private final int courseCount;

    public Teacher(int id, String name, int courseCount) {
        this.id = id;
        this.name = name;
        this.courseCount = courseCount;
    }

    public Teacher(int id, String name) {
        this(id, name, -1);
    }

    public Teacher(String name, int courseCount) {
        this(-1, name, courseCount);
    }

    public Teacher(String name) {
        this(-1, name);
    }

    public Teacher() {
        this(-1, "");
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getCourseCount() {
        return courseCount;
    }
}
