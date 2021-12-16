package grupo6.backendHotel.persistence.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

/**
 * Characteristic clas is used for connect with data base entity
 *
 * @author Grupo - 6
 *
 */
@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id", scope = Characteristic.class)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name="characteristics")
public class Characteristic implements Serializable {

    /**
     * Private variable long for identification of characteristic, identificator for unique key of the table, generatevalue for sequences of the primary key
     * and sequence generator for sequence and initial count
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /**
     * Private variable string for name of the characteristic
     */
    private String name;
    /**
     * Private variable string for icon of the characteristic
     */
    private String icon;

    /**
     * Private variable type product for characteristic of the product
     * Relationship ManyToMany
     */

    @ManyToMany(mappedBy = "characteristics")
    @OrderBy("id ASC")
    @JsonIgnoreProperties({"description", "category", "characteristics", "images", "city"})
    private Set<Product> products;

    /**
     * <p>
     * This method is used for build a object CharacteristicDTO with entity attributes
     * </p>
     * @param String name of the characteristic
     * @param String icon of the characteristic
     * @return void
     * @since 1.0
     */
    public Characteristic(String name, String icon) {
        this.name = name;
        this.icon = icon;
    }
    /**
     * <p>
     * This method is used for build a object CharacteristicDTO with entity attributes
     * </p>
     * @param String name of the characteristic
     * @param String icon of the characteristic
     * @param Set of Products for the products of the characteristic
     * @return void
     * @since 1.0
     */
    public Characteristic(String name, String icon, Set<Product> products) {
        this.name = name;
        this.icon = icon;
        this.products = products;
    }

}
