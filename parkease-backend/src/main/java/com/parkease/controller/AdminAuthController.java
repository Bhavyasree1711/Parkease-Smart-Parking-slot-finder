package com.parkease.controller;

import com.parkease.dto.AdminLoginRequest;
import com.parkease.dto.AdminLoginResponse;
import com.parkease.entity.Admin;
import com.parkease.security.JwtUtil;
import com.parkease.service.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth/admin")
@CrossOrigin
public class AdminAuthController {

    private final AdminService service;
    private final JwtUtil jwtUtil;

    public AdminAuthController(AdminService service, JwtUtil jwtUtil) {
        this.service = service;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AdminLoginRequest req) {

        Admin admin = service.authenticate(req.getEmail(), req.getPassword());

        if (admin == null) {
            return ResponseEntity.status(401).body("Invalid admin credentials");
        }

        // ✅ CORRECT METHOD NAME
        String token = jwtUtil.generateAdminToken(admin.getEmail());

        return ResponseEntity.ok(new AdminLoginResponse(token, 1800));
    }
}
