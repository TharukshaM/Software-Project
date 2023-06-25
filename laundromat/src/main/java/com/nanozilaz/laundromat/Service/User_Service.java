package com.nanozilaz.laundromat.Service;

import com.nanozilaz.laundromat.Entity.User;
import com.nanozilaz.laundromat.Repository.User_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class User_Service {
    @Autowired
    private User_Repo user_repo;
    public String addUser(User newUser){
       user_repo.save(newUser);
       return "Driver Added Successfully";
    }
    public List<User> getAllVehicles(){
        return user_repo.findAll();
    }
}
