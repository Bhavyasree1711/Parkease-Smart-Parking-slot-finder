package com.parkease.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
public class Slot {

    @Id
    @GeneratedValue
    private Long id;

    private String city;
    private String location;
    private String slotCode;
    private boolean booked;
}
