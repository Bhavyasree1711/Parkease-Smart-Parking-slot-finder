package com.parkease.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {

    private static final String SECRET_KEY = "parkease_admin_secret_123";
    private static final long EXPIRY = 30 * 60 * 1000; // 30 minutes

    public String generateAdminToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .claim("role", "ADMIN")
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRY))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }
}
