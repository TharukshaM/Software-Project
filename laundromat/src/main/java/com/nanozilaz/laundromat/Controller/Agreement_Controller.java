package com.nanozilaz.laundromat.Controller;

import com.nanozilaz.laundromat.Entity.Agreement;
import com.nanozilaz.laundromat.Entity.ItemRegistartion;
import com.nanozilaz.laundromat.Repository.Agreement_Repo;
import com.nanozilaz.laundromat.Service.Agreement_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/agreement")
public class Agreement_Controller {

    @Autowired
    private Agreement_Service agreement_service;

    @PostMapping("/add")
    public Agreement newAgreement(@RequestBody Agreement newAgreement){
        return agreement_service.addAgreement(newAgreement);
    }
    @GetMapping("/get")
    List<Agreement> getAllItems(){
        return agreement_service.getAgreements();
    }
    @GetMapping("/get/{id}")
    public Agreement getAgreement (@PathVariable String id){
        return agreement_service.getAgreementById(id);
    }
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable String id){
        return agreement_service.DeleteBYId(id);
    }
    @PutMapping("/update/{id}")
    public @ResponseBody String  updateAgreement(@RequestBody Agreement agreement,@PathVariable String id){
            return agreement_service.Update(agreement,id);
    }
}
