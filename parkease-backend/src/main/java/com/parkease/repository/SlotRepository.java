package com.parkease.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.parkease.model.Slot;

import java.util.List;

public interface SlotRepository extends JpaRepository<Slot, Long> {
    List<Slot> findByCityAndLocation(String city, String location);
}
