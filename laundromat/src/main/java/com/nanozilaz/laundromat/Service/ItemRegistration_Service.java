package com.nanozilaz.laundromat.Service;

import com.nanozilaz.laundromat.Entity.Agreement;
import com.nanozilaz.laundromat.Entity.ItemRegistartion;
import com.nanozilaz.laundromat.Repository.ItemRegistration_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemRegistration_Service {
    @Autowired
    private ItemRegistration_Repo itemRegistration_repo;

    public ItemRegistartion addItem(ItemRegistartion newItem){
        String Id=newItem.getItemCode();
        if(itemRegistration_repo.findById(Id).isPresent()){
            throw new RuntimeException("Item Exists");
        }else{
            return itemRegistration_repo.save(newItem);
        }
    }
    public List<ItemRegistartion> getAllItems(){
        return itemRegistration_repo.findAll();
    }
    public ItemRegistartion getItemById(String id){
        Optional<ItemRegistartion> item=itemRegistration_repo.findById(id);
        if(item.isPresent()){
            return item.get();
        }else{
            throw new RuntimeException("Item Doesn't exists");
        }
    }
    public String DeleteByID(String Id){
        Optional<ItemRegistartion> item=itemRegistration_repo.findById(Id);
        if(item.isPresent()){
            itemRegistration_repo.delete(item.get());
            return "Item Deleted";
        }else{
                throw new RuntimeException("Item Doesn't exists");
        }
    }
    public String Update(ItemRegistartion Item, String id){
        Optional<ItemRegistartion> item=itemRegistration_repo.findById(id);
        if(item.isPresent()){
            ItemRegistartion existingData=itemRegistration_repo.findById(id).get();
            existingData.setItemCode(Item.getItemCode());
            existingData.setBrand(Item.getBrand());
            existingData.setAvgweight(Item.getAvgweight());
            existingData.setItemName(Item.getItemName());
            existingData.setCustomerName(Item.getCustomerName());
            existingData.setColor(Item.getColor());
            existingData.setDescription(Item.getDescription());
            existingData.setNetAmount(Item.getNetAmount());
            existingData.setOtherCharges(Item.getOtherCharges());
            itemRegistration_repo.save(existingData);
            return "Update success ! ";
        }else{
            throw new RuntimeException("Agreement not exists");
        }
    }

}
