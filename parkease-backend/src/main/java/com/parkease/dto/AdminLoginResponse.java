package com.parkease.dto;

public class AdminLoginResponse {

    private String token;
    private int expiresIn;

    public AdminLoginResponse(String token, int expiresIn) {
        this.token = token;
        this.expiresIn = expiresIn;
    }

    public String getToken() {
        return token;
    }

    public int getExpiresIn() {
        return expiresIn;
    }
}
