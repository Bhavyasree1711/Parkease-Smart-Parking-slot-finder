package com.parkease.service;

import com.parkease.entity.Admin;
import com.parkease.repository.AdminRepository;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    private final AdminRepository repo;

    public AdminService(AdminRepository repo) {
        this.repo = repo;
    }

    public Admin authenticate(String email, String password) {
        Admin admin = repo.findByEmail(email);
        if (admin == null) return null;

        // Plain comparison (OK for now)
        if (!admin.getPassword().equals(password)) return null;

        return admin;
    }
}
