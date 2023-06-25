package com.nanozilaz.laundromat.Controller;

import com.nanozilaz.laundromat.Entity.User;
import com.nanozilaz.laundromat.Entity.UserGroup;
import com.nanozilaz.laundromat.Service.UserGroup_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/usergroup")
public class UserGroup_Controller {
    @Autowired
    private UserGroup_Service usergroup_service;

    @PostMapping({"/add"})
    public String newCustomer(@RequestBody UserGroup newUserGroup) {
        return usergroup_service.addUserGroup(newUserGroup);
    }

    @GetMapping({"/get"})
    List<UserGroup> getAllUserGroups() {
        return usergroup_service.getAllUserGroups();
    }
}
