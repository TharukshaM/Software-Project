package com.nanozilaz.laundromat.Service;

import com.nanozilaz.laundromat.Entity.DriverRegistration;
import com.nanozilaz.laundromat.Repository.Driver_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DriverReg_Service {
    @Autowired
    private Driver_Repo driver_repo;

    public String addDriver(DriverRegistration newDriver){
        driver_repo.save(newDriver);
        return "Driver Added Successfully";
    }
    public List<DriverRegistration> getAllDrivers(){
        return driver_repo.findAll();
    }


}
