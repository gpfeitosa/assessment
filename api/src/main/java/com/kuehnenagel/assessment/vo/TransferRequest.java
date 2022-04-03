package com.kuehnenagel.assessment.vo;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

public class TransferRequest {

    @NotBlank
    private String sourceWalletId;

    @NotBlank
    private String targetWalletId;

    @Positive
    private Double amount;

    public TransferRequest() {}

    public TransferRequest(String sourceWalletId, String targetWalletId, Double amount) {
        this.sourceWalletId = sourceWalletId;
        this.targetWalletId = targetWalletId;
        this.amount = amount;
    }

    public String getSourceWalletId() {
        return sourceWalletId;
    }

    public void setSourceWalletId(String sourceWalletId) {
        this.sourceWalletId = sourceWalletId;
    }

    public String getTargetWalletId() {
        return targetWalletId;
    }

    public void setTargetWalletId(String targetWalletId) {
        this.targetWalletId = targetWalletId;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
}
