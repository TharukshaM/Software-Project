package com.nanozilaz.laundromat.Repository;

import com.nanozilaz.laundromat.Entity.DriverRegistration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Driver_Repo extends JpaRepository<DriverRegistration,Integer>{
}
