package com.nanozilaz.laundromat.Service;

import com.nanozilaz.laundromat.Entity.User;
import com.nanozilaz.laundromat.Entity.UserGroup;
import com.nanozilaz.laundromat.Repository.UserGroup_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserGroup_Service {
    @Autowired
    private UserGroup_Repo usergroup_repo;

    public String addUserGroup(UserGroup newUser){
        usergroup_repo.save(newUser);
        return "Driver Added Successfully";
    }
    public List<UserGroup> getAllUserGroups(){
        return usergroup_repo.findAll();
    }

}
