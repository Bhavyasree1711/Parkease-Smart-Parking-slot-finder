package com.parkease.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue
    private Long id;

    private String email;
    private String password;
}
