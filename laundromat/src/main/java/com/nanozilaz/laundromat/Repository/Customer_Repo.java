package com.nanozilaz.laundromat.Repository;

import com.nanozilaz.laundromat.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Customer_Repo extends JpaRepository<Customer,Integer> {
}
