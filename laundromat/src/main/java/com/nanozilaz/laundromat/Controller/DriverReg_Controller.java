package com.nanozilaz.laundromat.Controller;

import com.nanozilaz.laundromat.Entity.DriverRegistration;
import com.nanozilaz.laundromat.Service.DriverReg_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/driver")
public class DriverReg_Controller {
    @Autowired
    private DriverReg_Service driverReg_service;

    @PostMapping("/add")
    public String addDriver(@RequestBody DriverRegistration newDriver){
        try {
            driverReg_service.addDriver(newDriver);
            return "Driver Added Successfully";
        }catch (Exception e){
            return "Driver Addition Failed";
        }
    }
    @GetMapping("/get")
    List<DriverRegistration> getAll() {
        return driverReg_service.getAllDrivers();
    }
}
