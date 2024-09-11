package com.codewithwahbi.fullstackbackend.repository;

import com.codewithwahbi.fullstackbackend.model.Controller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ControllerRepository extends JpaRepository<Controller, Long> {
    Controller findByEmailAndPassword(String email, String password);
}
