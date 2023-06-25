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
public class DelivaryLocation {
    @Id
    private int businessRegNum;
    private String address;
    private String description;
    private int hotline;
    private String collectionType;
    private String parentCom;
}
