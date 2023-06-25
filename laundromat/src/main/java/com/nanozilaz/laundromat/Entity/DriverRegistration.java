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
@Table(name="Driver")
public class DriverRegistration {
    @Id
    private int driverid;
    private String drivername;
    private String drivercontact;
    private String residentialaddress;
}
