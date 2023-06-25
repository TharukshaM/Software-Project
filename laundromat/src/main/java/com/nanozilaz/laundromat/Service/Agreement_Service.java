package com.nanozilaz.laundromat.Service;

import com.nanozilaz.laundromat.Entity.Agreement;
import com.nanozilaz.laundromat.Repository.Agreement_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Agreement_Service {
    @Autowired
    private Agreement_Repo agreement_repo;

    public Agreement addAgreement(Agreement newAgreement){
        String Id= newAgreement.getAgreementId();
        if(agreement_repo.findById(Id).isPresent()){
            throw new RuntimeException("Item exists");
        }else{
            return agreement_repo.save(newAgreement);
        }
    }
    public Agreement getAgreementById(String id){
        Optional<Agreement> item=agreement_repo.findById(id);
        if(item.isPresent()){
            return item.get();
        }else{
            throw new RuntimeException("Item Doesn't exists");
        }
    }
    public List<Agreement> getAgreements(){
        return agreement_repo.findAll();
    }
    public String DeleteBYId( String Id){
        Optional<Agreement> agreement=agreement_repo.findById(Id);
        if(agreement.isPresent()){
            agreement_repo.delete(agreement.get());
            return "Agreement Deleted";
        }else{
            throw new RuntimeException("Agreement doesn't exists");
        }
    }
    public String Update(Agreement agreement, String id){
        Optional<Agreement> item=agreement_repo.findById(id);
        if(item.isPresent()){
        Agreement existingData=agreement_repo.findById(id).get();
        existingData.setAgreementId(agreement.getAgreementId());
        existingData.setCollectBy(agreement.getCollectBy());
        existingData.setCountBy(agreement.getCountBy());
        existingData.setDeliveryBy(agreement.getDeliveryBy());
        existingData.setCustomerName(agreement.getCustomerName());
        existingData.setInvoiceCreate(agreement.getInvoiceCreate());
        existingData.setInvoicePeriod(agreement.getInvoicePeriod());
        agreement_repo.save(existingData);
        return "Update success ! ";
        }else{
            throw new RuntimeException("Agreement not exists");
        }
    }
}
