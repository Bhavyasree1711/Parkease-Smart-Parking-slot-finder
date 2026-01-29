package com.parkease.controller;

import com.parkease.model.*;
import com.parkease.repository.*;
import com.parkease.service.ParkingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ApiController {

    private final UserRepository userRepo;
    private final SlotRepository slotRepo;
    private final ParkingSessionRepository sessionRepo;
    private final ParkingService parkingService;

    public ApiController(
            UserRepository userRepo,
            SlotRepository slotRepo,
            ParkingSessionRepository sessionRepo,
            ParkingService parkingService) {

        this.userRepo = userRepo;
        this.slotRepo = slotRepo;
        this.sessionRepo = sessionRepo;
        this.parkingService = parkingService;
    }

    // 🔐 Register
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userRepo.save(user);
    }

    // 🔐 Login
    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return userRepo.findByEmail(user.getEmail());
    }

    // 🅿️ Get slots
    @GetMapping("/slots")
    public List<Slot> getSlots(
            @RequestParam String city,
            @RequestParam String location) {
        return slotRepo.findByCityAndLocation(city, location);
    }

    // ⏱ Start parking
    @PostMapping("/start")
    public ParkingSession start(@RequestBody ParkingSession session) {
        session.setStartTime(System.currentTimeMillis());
        return sessionRepo.save(session);
    }

    // ⏹ Stop parking + calculate bill
    @PostMapping("/stop/{id}")
    public ParkingSession stop(@PathVariable Long id) {
        ParkingSession s = sessionRepo.findById(id).get();
        s.setEndTime(System.currentTimeMillis());

        int amount = parkingService.calculateAmount(
                s.getStartTime(), s.getEndTime());

        s.setAmount(amount);
        return sessionRepo.save(s);
    }
}
