package com.nanozilaz.laundromat.Repository;

import com.nanozilaz.laundromat.Entity.Vehicle_Registration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Vehicle_Repo extends JpaRepository<Vehicle_Registration,Integer>{
}
