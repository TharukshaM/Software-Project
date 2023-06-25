package com.nanozilaz.laundromat.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
    @Id
    private String email;
    private String password;
    private Long phonenumber;
    private String addressLine1;
    private String addressLine2;
    private String addressLine3;
    private String fname;
    private String lname;
    private String gender;
    private String position;
}
