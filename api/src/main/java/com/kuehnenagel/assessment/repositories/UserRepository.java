package com.kuehnenagel.assessment.repositories;

import com.kuehnenagel.assessment.domain.User;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {

    private final MongoOperations mongoOperations;

    public UserRepository(MongoOperations mongoOperations) {
        this.mongoOperations = mongoOperations;
    }

    public User insert(User user) {
        return mongoOperations.insert(user);
    }

    public User getByUsername(String username) {
        final Query query = Query.query(
                Criteria.where("username").is(username)
        );
        return mongoOperations.findOne(query, User.class);
    }

}
