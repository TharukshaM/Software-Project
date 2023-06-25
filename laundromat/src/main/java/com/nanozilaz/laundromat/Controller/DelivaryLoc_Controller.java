package com.nanozilaz.laundromat.Controller;

import com.nanozilaz.laundromat.Entity.DelivaryLocation;
import com.nanozilaz.laundromat.Entity.DriverRegistration;
import com.nanozilaz.laundromat.Service.DelivaryLoc_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/delivaryloc")
public class DelivaryLoc_Controller{
    @Autowired
    private DelivaryLoc_Service delivaryLoc_service;

    @PostMapping("/add")
    public String addLocation(@RequestBody DelivaryLocation newLocation){
        try {
            delivaryLoc_service.addLocation(newLocation);
            return "New Location Added Successfully";
        }catch (Exception e){
            return "New Location Addition Failed";
        }
    }
    @GetMapping("/get")
    List<DelivaryLocation> getAll() {
        return delivaryLoc_service.getAllLocation();
    }

}
