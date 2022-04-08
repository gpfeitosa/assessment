package com.kuehnenagel.assessment.domain;

import org.springframework.data.annotation.Id;

public class Wallet {
    @Id
    private String id;

    private User owner;
    private Double balance;
    private String name;

    public Wallet() {}

    public Wallet(String id, User owner, String name, Double balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
