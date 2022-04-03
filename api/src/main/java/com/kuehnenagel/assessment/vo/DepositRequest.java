package com.kuehnenagel.assessment.vo;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

public class DepositRequest {

    @NotBlank
    private String walletId;

    @Positive
    private Double amount;

    public DepositRequest() {}

    public DepositRequest(String walletId, Double amount) {
        this.walletId = walletId;
        this.amount = amount;
    }

    public String getWalletId() {
        return walletId;
    }

    public void setWalletId(String walletId) {
        this.walletId = walletId;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
}
