package com.kuehnenagel.assessment.vo;

import javax.validation.constraints.NotBlank;

public class DeleteWalletRequest {

    @NotBlank
    private String walletId;

    public DeleteWalletRequest() {
    }

    public DeleteWalletRequest(String walletId) {
        this.walletId = walletId;
    }

    public String getWalletId() {
        return walletId;
    }

    public void setWalletId(String walletId) {
        this.walletId = walletId;
    }
}
