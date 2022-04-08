package com.kuehnenagel.assessment.vo;

import org.springframework.beans.factory.annotation.Value;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.PositiveOrZero;

public class CreateWalletRequest {

    @NotBlank
    String name;

    @PositiveOrZero
    @Value("0.0")
    Double balance;

    public CreateWalletRequest() {}

    public CreateWalletRequest(String name, Double balance) {
        this.name = name;
        this.balance = balance;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }
}
