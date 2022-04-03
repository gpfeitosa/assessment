package com.kuehnenagel.assessment.repositories;

import com.kuehnenagel.assessment.domain.User;
import com.kuehnenagel.assessment.domain.Wallet;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class WalletRepository {

    private final MongoOperations mongoOperations;

    public WalletRepository(MongoOperations mongoOperations) {
        this.mongoOperations = mongoOperations;
    }

    public Wallet insert(Wallet wallet) {
        return mongoOperations.insert(wallet);
    }

    public Wallet getById(String walletId) {
        return mongoOperations.findById(walletId, Wallet.class);
    }

    public List<Wallet> getAllByUser(User user) {
        Query query = Query.query(Criteria.where("owner.id").is(user.getId()));

        return mongoOperations.find(query, Wallet.class);
    }

    public Wallet update(Wallet updatedWallet) {
        Query query = Query.query(Criteria.where("_id").is(updatedWallet.getId()));

        Update update = new Update();
        update.set("balance", updatedWallet.getBalance());

        mongoOperations.updateFirst(query, update, Wallet.class);
        return updatedWallet;
    }

    public Wallet getByIdAndOwnerId(String walletId, String ownerId) {
        Query query = Query.query(Criteria.where("_id").is(walletId).and("owner.id").is(ownerId));

        return mongoOperations.findOne(query, Wallet.class);
    }

    public void delete(Wallet wallet) {
        mongoOperations.remove(wallet);
    }
}
