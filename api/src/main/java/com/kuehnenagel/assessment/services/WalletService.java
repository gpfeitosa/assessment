package com.kuehnenagel.assessment.services;

import com.kuehnenagel.assessment.domain.User;
import com.kuehnenagel.assessment.domain.Wallet;
import com.kuehnenagel.assessment.repositories.WalletRepository;
import com.kuehnenagel.assessment.utils.ContextUtils;
import com.kuehnenagel.assessment.vo.DepositRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WalletService {

    private final WalletRepository walletRepository;
    private final ContextUtils contextUtils;

    public WalletService(WalletRepository walletRepository, ContextUtils contextUtils) {
        this.walletRepository = walletRepository;
        this.contextUtils = contextUtils;
    }

    public Wallet createWallet() {
        User user = contextUtils.getUserFromSecurityContext();

        Wallet wallet = new Wallet();
        wallet.setBalance(0D);
        wallet.setOwner(user);

        return walletRepository.insert(wallet);
    }

    public List<Wallet> getAllWalletsByUser() {
        User user = contextUtils.getUserFromSecurityContext();

        return walletRepository.getAllByUser(user);
    }

    public Wallet makeDeposit(DepositRequest depositRequest) {
        Wallet wallet = walletRepository.getById(depositRequest.getWalletId());

        Double newBalance = wallet.getBalance() + depositRequest.getAmount();
        wallet.setBalance(newBalance);

        return walletRepository.update(wallet);
    }
}
