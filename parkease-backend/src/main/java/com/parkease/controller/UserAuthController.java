package com.parkease.controller;

import com.parkease.dto.UserLoginRequest;
import com.parkease.dto.UserRegisterRequest;
import com.parkease.entity.User;
import com.parkease.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth/user")
@CrossOrigin
public class UserAuthController {

    private final UserService service;

    public UserAuthController(UserService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserRegisterRequest req) {
        User u = new User();
        u.setName(req.getName());
        u.setEmail(req.getEmail());
        u.setVehicleNumber(req.getVehicleNumber());
        u.setVehicleType(req.getVehicleType());
        u.setPassword(req.getPassword());

        service.register(u);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserLoginRequest req) {
        User user = service.login(req.getVehicleNumber(), req.getPassword());
        if (user == null)
            return ResponseEntity.status(401).body("Invalid credentials");
        return ResponseEntity.ok(user);
    }
}
