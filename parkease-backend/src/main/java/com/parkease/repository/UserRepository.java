package com.parkease.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.parkease.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
