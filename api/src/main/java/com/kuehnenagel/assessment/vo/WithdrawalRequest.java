package com.kuehnenagel.assessment.vo;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

public class WithdrawalRequest {

    @NotBlank
    private String walletId;

    @Positive
    private Double amount;

    public WithdrawalRequest() {}

    public WithdrawalRequest(String walletId, Double amount) {
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
