package com.nanozilaz.laundromat.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name="customer")
public class Customer {
    @Id
    private int businessRegNum;
    private String address;
    private String custName;
    private int hotline;
    private String parentCom;
    private String firstName;
    private String lastName;
    private String designation;
    private String email;
    private int contactDetails;
}
