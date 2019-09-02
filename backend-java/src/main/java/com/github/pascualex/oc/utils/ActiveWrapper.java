package com.github.pascualex.oc.utils;

public class ActiveWrapper {

    private final boolean active;

    public ActiveWrapper(boolean active) {
        this.active = active;
    }

    public ActiveWrapper() {
        this(false);
    }

    public boolean isActive() {
        return active;
    }
}
