package com.nanozilaz.laundromat.Controller;

import com.nanozilaz.laundromat.Entity.DriverRegistration;
import com.nanozilaz.laundromat.Entity.Vehicle_Registration;
import com.nanozilaz.laundromat.Service.VehicleReg_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/vehicle")
public class VehicleReg_Controller {
    @Autowired
    private VehicleReg_Service vehicleReg_service;

    @PostMapping("/add")
    public String addVehicle(@RequestBody Vehicle_Registration newVehicle){
        try {
            vehicleReg_service.addVehicle(newVehicle);
            return "Vehicle Added Successfully";
        }catch (Exception e){
            return "Vehicle  Addition Failed";
        }
    }
    @GetMapping("/get")
    List<Vehicle_Registration> getAll() {
        return vehicleReg_service.getAllVehicles();
    }
}
