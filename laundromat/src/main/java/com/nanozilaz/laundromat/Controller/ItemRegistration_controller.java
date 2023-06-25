package com.nanozilaz.laundromat.Controller;

import com.nanozilaz.laundromat.Entity.ItemRegistartion;
import com.nanozilaz.laundromat.Service.ItemRegistration_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/item")
public class ItemRegistration_controller {
    @Autowired
    private ItemRegistration_Service itemRegistration_service;

    @PostMapping("/add")
    public ItemRegistartion newItem(@RequestBody ItemRegistartion newItem){
        return itemRegistration_service.addItem(newItem);
    }
    @GetMapping("/get")
    public List<ItemRegistartion> getItems(){
        return itemRegistration_service.getAllItems();
    }
    @GetMapping("/get/{id}")
    public ItemRegistartion getItem(@PathVariable String id){
        return itemRegistration_service.getItemById(id);
    }
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable String id){
        return itemRegistration_service.DeleteByID(id);
    }
    @PutMapping("/update/{id}")
    public @ResponseBody String updateItemDetails(@RequestBody ItemRegistartion itemRegistartion,@PathVariable String id){
        return itemRegistration_service.Update(itemRegistartion,id);
    }
}
