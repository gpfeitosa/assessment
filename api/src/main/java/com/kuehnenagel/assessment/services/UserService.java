package com.kuehnenagel.assessment.services;

import com.kuehnenagel.assessment.domain.User;
import com.kuehnenagel.assessment.repositories.UserRepository;
import com.kuehnenagel.assessment.utils.UserServiceUtils;
import com.kuehnenagel.assessment.vo.CreateUserRequest;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserServiceUtils userServiceUtils;

    public UserService(UserRepository userRepository, UserServiceUtils userServiceUtils) {
        this.userRepository = userRepository;
        this.userServiceUtils = userServiceUtils;
    }

    public User createUser(CreateUserRequest createUserRequest) {
        User user = userServiceUtils.convertCreateUserRequestToUser(createUserRequest);
        return userRepository.insert(user);
    }
}
