package com.parkease.util;

import java.time.Instant;
import java.util.UUID;

public class AdminTokenUtil {

    private static String token;
    private static Instant expiry;

    // Generate token valid for 30 minutes
    public static String generateToken() {
        token = UUID.randomUUID().toString();
        expiry = Instant.now().plusSeconds(1800); // 30 minutes
        return token;
    }

    // Validate admin token
    public static boolean isValid(String providedToken) {
        return token != null
                && token.equals(providedToken)
                && Instant.now().isBefore(expiry);
    }
}
