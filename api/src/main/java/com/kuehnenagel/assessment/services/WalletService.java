package com.kuehnenagel.assessment.services;

import com.kuehnenagel.assessment.domain.User;
import com.kuehnenagel.assessment.domain.Wallet;
import com.kuehnenagel.assessment.repositories.WalletRepository;
import com.kuehnenagel.assessment.utils.ContextUtils;
import com.kuehnenagel.assessment.vo.*;
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

    public Wallet createWallet(CreateWalletRequest createWalletRequest) {
        User user = contextUtils.getUserFromSecurityContext();

        Wallet wallet = new Wallet();
        wallet.setBalance(createWalletRequest.getBalance());
        wallet.setName(createWalletRequest.getName());
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

    public Wallet makeWithdrawal(WithdrawalRequest withdrawalRequest) {
        User user = contextUtils.getUserFromSecurityContext();

        Wallet wallet = walletRepository.getByIdAndOwnerId(
                withdrawalRequest.getWalletId(), user.getId()
        );

        if (wallet == null || wallet.getBalance() < withdrawalRequest.getAmount()) {
            // TODO custom exception
            return wallet;
        }

        Double newBalance = wallet.getBalance() - withdrawalRequest.getAmount();
        wallet.setBalance(newBalance);

        return walletRepository.update(wallet);
    }

    public void deleteWallet(String walletId) {
        User user = contextUtils.getUserFromSecurityContext();

        Wallet wallet = walletRepository.getByIdAndOwnerId(
                walletId, user.getId()
        );

        if (wallet != null) {
            walletRepository.delete(wallet);
        }
    }

    public void transfer(TransferRequest transferRequest) {
        User user = contextUtils.getUserFromSecurityContext();

        Wallet sourceWallet = walletRepository.getByIdAndOwnerId(
                transferRequest.getSourceWalletId(), user.getId()
        );

        Double amount = transferRequest.getAmount();
        if (sourceWallet == null || sourceWallet.getBalance() < amount) {
            // TODO custom exceptions
            return;
        }

        Wallet targetWallet = walletRepository.getById(transferRequest.getTargetWalletId());

        Double newSourceBalance = sourceWallet.getBalance() - amount;
        Double newTargetBalance = targetWallet.getBalance() + amount;

        sourceWallet.setBalance(newSourceBalance);
        targetWallet.setBalance(newTargetBalance);

        walletRepository.update(sourceWallet);
        walletRepository.update(targetWallet);
    }
}
