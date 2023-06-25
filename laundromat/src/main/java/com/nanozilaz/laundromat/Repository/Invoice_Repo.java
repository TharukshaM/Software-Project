package com.nanozilaz.laundromat.Repository;

import com.nanozilaz.laundromat.Entity.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Invoice_Repo extends JpaRepository<Invoice,Long> {
}
