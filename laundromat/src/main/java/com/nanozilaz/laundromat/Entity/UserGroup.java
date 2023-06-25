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
public class UserGroup {
    @Id
    private String groupname;
    private String groupdescription;
    private String whohasaccess;
    private String privillages;
    private String newprivilage;
}
