package com.nanozilaz.laundromat.Controller;

import com.nanozilaz.laundromat.Entity.User;
import com.nanozilaz.laundromat.Service.User_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/user")
public class User_Controller {
    @Autowired
    private User_Service user_service;

    @PostMapping({"/add"})
    public String newCustomer(@RequestBody User newCustomers) {
        return user_service.addUser(newCustomers);
    }

    @GetMapping({"/get"})
    List<User> getAllCustomers() {
        return user_service.getAllVehicles();
    }
}
