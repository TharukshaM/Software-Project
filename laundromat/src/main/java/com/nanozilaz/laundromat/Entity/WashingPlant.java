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
@Table(name="washingPlant")
public class WashingPlant {
    @Id
    private int locationid;
    private String locationaddress;
    private String capacity;
    private String locationcontact;
    private String inchargeperson;
}
