package com.nanozilaz.laundromat.Service;

import com.nanozilaz.laundromat.Entity.Customer;
import com.nanozilaz.laundromat.Repository.Customer_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Customer_Service {
    @Autowired
    public Customer_Repo customer_repo;

    public String addCustomer(Customer customer){
        customer_repo.save(customer);
        return "Driver Added Successfully";
    }
    public List<Customer> getAllCustomers(){
        return customer_repo.findAll();
    }
}
