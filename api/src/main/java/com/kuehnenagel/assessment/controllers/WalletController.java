package com.kuehnenagel.assessment.controllers;

import com.kuehnenagel.assessment.domain.Wallet;
import com.kuehnenagel.assessment.services.WalletService;
import com.kuehnenagel.assessment.vo.DepositRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("/wallet")
@RestController
@Validated
public class WalletController {

    private final WalletService walletService;

    public WalletController(WalletService walletService) {
        this.walletService = walletService;
    }

    @PostMapping("/")
    public ResponseEntity<Wallet> createWallet() {
        Wallet wallet = walletService.createWallet();
        return ResponseEntity.ok(wallet);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Wallet>> getAllByUser() {
        List<Wallet> wallets = walletService.getAllWalletsByUser();
        return ResponseEntity.ok(wallets);
    }

    @PutMapping("/deposit")
    public ResponseEntity<Wallet> makeDeposit(@Valid @RequestBody DepositRequest depositRequest) {
        Wallet wallet = walletService.makeDeposit(depositRequest);
        return ResponseEntity.ok(wallet);
    }

}
