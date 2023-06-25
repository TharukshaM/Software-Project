package com.nanozilaz.laundromat.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Entity
@NoArgsConstructor
@Data
@AllArgsConstructor
@Table(name = "Agreement")
public class Agreement {
    @Id
    private String agreementId;
    private String customerName;
    private String customeremail;
    private String deliveryBy;
    private String collectBy;
    private String countBy;
    private String invoiceCreate;
    private String invoicePeriod;
    @Column(name = "StartDate")
    private LocalDate date;
    @Column(name = "EndDate")
    private LocalDate endDate;

}
