package com.parkease.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.parkease.model.ParkingSession;

public interface ParkingSessionRepository
        extends JpaRepository<ParkingSession, Long> {
}
