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
@Table(name="vehicle")
public class Vehicle_Registration {
    @Id
    private int vehicleNo;
    private String vehicleType;
    private String capacity;
    private String fuelType;
    private int assignedDriverID;
}
