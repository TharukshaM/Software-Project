package com.nanozilaz.laundromat.Controller;

import com.nanozilaz.laundromat.Entity.WashingPlant;
import com.nanozilaz.laundromat.Service.Washingplant_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/washingplant")
public class Washingplant_Controller {
    @Autowired
    private Washingplant_Service washingplant_service;

    @PostMapping("/add")
    public String addWashingPlant(@RequestBody WashingPlant newplant){
        try {
            washingplant_service.addWashingPlant(newplant);
            return "Washing Plant Added Successfully";
        }catch (Exception e){
            return "Washing Plant Addition Failed";
        }
    }
    @GetMapping("/get")
    List<WashingPlant> getAllWashingPlants(){
        return washingplant_service.AllWashingPlants();
    }
}
