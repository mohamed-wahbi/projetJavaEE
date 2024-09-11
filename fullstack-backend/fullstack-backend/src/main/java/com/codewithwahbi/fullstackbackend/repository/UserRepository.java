package com.codewithwahbi.fullstackbackend.repository;

import com.codewithwahbi.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
