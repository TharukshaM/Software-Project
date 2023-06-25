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
@Table(name="Items")
public class ItemRegistartion {
    @Id
    private String itemCode;
    private String customerName;
    private String color;
    private String brand;
    private String itemName;
    private float avgweight;
    private float netAmount;
    private float otherCharges;
    private String description;
}
