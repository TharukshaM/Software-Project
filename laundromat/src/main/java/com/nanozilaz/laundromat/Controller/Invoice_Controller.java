package com.nanozilaz.laundromat.Controller;

import com.nanozilaz.laundromat.Entity.Invoice;
import com.nanozilaz.laundromat.Service.Invoice_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/invoice")
@CrossOrigin
public class Invoice_Controller {
    @Autowired
    private Invoice_Service invoice_service;

    @GetMapping("/get/{id}")
    public Invoice getInvoiceById(@PathVariable long id){
        return invoice_service.getInvoiceById(id);
    }
}
