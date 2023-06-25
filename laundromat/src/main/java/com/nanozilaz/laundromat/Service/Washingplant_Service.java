package com.nanozilaz.laundromat.Service;

import com.nanozilaz.laundromat.Entity.WashingPlant;
import com.nanozilaz.laundromat.Repository.Washingplant_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Washingplant_Service {
    @Autowired
    private Washingplant_Repo washingplant_repo;

    public String addWashingPlant(WashingPlant newplant){
       try {
           washingplant_repo.save(newplant);
           return "Washing Plant Added Successfully";
    }catch (Exception e){
           return "Washing Plant Addition Failed";
    }
    }
    public List<WashingPlant> AllWashingPlants(){
        return washingplant_repo.findAll();
    }
}
