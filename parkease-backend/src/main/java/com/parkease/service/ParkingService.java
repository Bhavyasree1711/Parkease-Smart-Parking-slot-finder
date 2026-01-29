package com.parkease.service;

import org.springframework.stereotype.Service;

@Service
public class ParkingService {

    public int calculateAmount(long start, long end) {
        long seconds = (end - start) / 1000;
        int hours = (int) Math.ceil(seconds / 3600.0);
        return Math.max(1, hours) * 50;
    }
}
