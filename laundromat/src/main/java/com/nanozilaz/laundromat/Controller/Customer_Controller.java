package com.nanozilaz.laundromat.Controller;

import com.nanozilaz.laundromat.Entity.Customer;
import com.nanozilaz.laundromat.Service.Customer_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/customer")
public class Customer_Controller {
    @Autowired
    private Customer_Service customer_service;
    @PostMapping("/add")
    public String addCustomer(@RequestBody Customer newCustomer){
        try {
            customer_service.addCustomer(newCustomer);
            return "Customer Added Successfully";
        }catch (Exception e){
            return "Customer Addition Failed";
        }
    }
    @GetMapping("/get")
    List<Customer> getAll() {
        return customer_service.getAllCustomers();
    }
}
