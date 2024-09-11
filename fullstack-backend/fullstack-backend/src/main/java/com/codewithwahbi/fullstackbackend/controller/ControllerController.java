package com.codewithwahbi.fullstackbackend.controller;


import com.codewithwahbi.fullstackbackend.model.Controller;
import com.codewithwahbi.fullstackbackend.repository.ControllerRepository;
import com.sun.jdi.event.StepEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ControllerController {

    @Autowired
    private ControllerRepository controllerRepository;

    @PostMapping("/register")
    public ResponseEntity<Controller> registerController(@RequestBody Controller controller) {
        Controller savedController = controllerRepository.save(controller);
        return new ResponseEntity<>(savedController, HttpStatus.CREATED);
    }


    @PostMapping("/login")
    public ResponseEntity<String> loginController(@RequestBody Controller loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        Controller existingController = controllerRepository.findByEmailAndPassword(email, password);

        if (existingController != null) {
            return new ResponseEntity<>("Login successful", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid email or password", HttpStatus.UNAUTHORIZED);
        }
    }



}
