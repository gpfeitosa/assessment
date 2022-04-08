package com.kuehnenagel.assessment.controllers;

import com.kuehnenagel.assessment.domain.Wallet;
import com.kuehnenagel.assessment.services.WalletService;
import com.kuehnenagel.assessment.vo.CreateWalletRequest;
import com.kuehnenagel.assessment.vo.DepositRequest;
import com.kuehnenagel.assessment.vo.TransferRequest;
import com.kuehnenagel.assessment.vo.WithdrawalRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
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
    public ResponseEntity<Wallet> createWallet(@RequestBody CreateWalletRequest createWalletRequest) {
        Wallet wallet = walletService.createWallet(createWalletRequest);
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

    @PutMapping("/withdraw")
    public ResponseEntity<Wallet> makeWithdrawal(@Valid @RequestBody WithdrawalRequest withdrawalRequest) {
        Wallet wallet = walletService.makeWithdrawal(withdrawalRequest);
        return ResponseEntity.ok(wallet);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteWallet(@PathVariable String id) {
        walletService.deleteWallet(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/transfer")
    @Transactional
    public ResponseEntity transfer(@Valid @RequestBody TransferRequest transferRequest) {
        walletService.transfer(transferRequest);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
