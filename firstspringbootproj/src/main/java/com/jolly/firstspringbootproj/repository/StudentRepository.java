package com.jolly.firstspringbootproj.repository;

import com.jolly.firstspringbootproj.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
// hi pookie
}
