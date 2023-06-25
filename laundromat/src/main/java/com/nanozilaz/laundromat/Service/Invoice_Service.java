package com.nanozilaz.laundromat.Service;

import com.nanozilaz.laundromat.Entity.Invoice;
import com.nanozilaz.laundromat.Repository.Invoice_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Invoice_Service {
    @Autowired
    private Invoice_Repo invoice_repo;

    public Invoice getInvoiceById(long id){
        try {Optional<Invoice> invoice=invoice_repo.findById(id);
            return invoice.get();
        }catch (Exception e){
            throw new RuntimeException("Invoice not found");
        }

    }
}
