package com.nanozilaz.laundromat.Service;

import com.nanozilaz.laundromat.Entity.DelivaryLocation;
import com.nanozilaz.laundromat.Entity.DriverRegistration;
import com.nanozilaz.laundromat.Repository.DelivaryLocation_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DelivaryLoc_Service {
    @Autowired
    private DelivaryLocation_Repo  delivaryLocation_repo;

    public String addLocation(DelivaryLocation newLocation){
        delivaryLocation_repo.save(newLocation);
        return "Driver Added Successfully";
    }
    public List<DelivaryLocation> getAllLocation(){
        return delivaryLocation_repo.findAll();
    }

}
