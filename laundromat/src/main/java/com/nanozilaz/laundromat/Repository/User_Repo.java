package com.nanozilaz.laundromat.Repository;

import com.nanozilaz.laundromat.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;


public interface User_Repo extends JpaRepository<User,String> {
}
