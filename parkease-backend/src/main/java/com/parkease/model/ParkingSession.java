package com.parkease.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
public class ParkingSession {

    @Id
    @GeneratedValue
    private Long id;

    private Long userId;
    private String slotCode;

    private long startTime;
    private long endTime;

    private int amount;
}
