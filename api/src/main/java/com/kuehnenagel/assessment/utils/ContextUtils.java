package com.kuehnenagel.assessment.utils;

import com.kuehnenagel.assessment.domain.User;
import com.kuehnenagel.assessment.repositories.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class ContextUtils {

    private final UserRepository userRepository;

    public ContextUtils(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserFromSecurityContext() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        return userRepository.getByUsername(userDetails.getUsername());
    }

}
