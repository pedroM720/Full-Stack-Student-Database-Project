package com.jolly.firstspringbootproj.service;

import com.jolly.firstspringbootproj.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);

    public List<Student> getAllStudents();
}
