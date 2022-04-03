package com.kuehnenagel.assessment.utils;

import com.kuehnenagel.assessment.domain.User;
import com.kuehnenagel.assessment.vo.CreateUserRequest;
import org.springframework.stereotype.Service;

@Service
public class UserServiceUtils {

    public User convertCreateUserRequestToUser(CreateUserRequest createUserRequest) {
        User user = new User();
        user.setName(createUserRequest.getName());
        user.setUsername(createUserRequest.getUsername());
        user.setPassword(createUserRequest.getPassword());

        return user;
    }

}
