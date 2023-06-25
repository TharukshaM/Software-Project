package com.nanozilaz.laundromat.Service;

import com.nanozilaz.laundromat.Entity.DriverRegistration;
import com.nanozilaz.laundromat.Entity.Vehicle_Registration;
import com.nanozilaz.laundromat.Repository.Vehicle_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleReg_Service {
    @Autowired
    private Vehicle_Repo vehicle_repo;
    public String addVehicle(Vehicle_Registration newVehicle){
        vehicle_repo.save(newVehicle);
        return "Driver Added Successfully";
    }
    public List<Vehicle_Registration> getAllVehicles(){
        return vehicle_repo.findAll();
    }

}
