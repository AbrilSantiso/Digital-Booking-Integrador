package grupo6.backendHotel.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import grupo6.backendHotel.persistence.entities.Characteristic;
import grupo6.backendHotel.persistence.entities.Product;
import lombok.*;

import java.util.Set;

/**
 * Characteristic DTO for conversion between entities and DTO for communication aspects for architecture layers
 *
 * @author Grupo - 6
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class CharacteristicDTO {
    /**
     * Private variable long for identification of characteristic
     */
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
     * Private variable string for products of the characteristic
     */
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
    public CharacteristicDTO(String name, String icon ) {
        this.name = name;
        this.icon = icon;
    }
    /**
     * <p>
     * This method is used for build a object CharacteristicDTO with entity attributes
     * </p>
     * @param String name of the characteristic
     * @param String icon of the characteristic
     * @param Set of products for products of the Characteristic
     * @return void
     * @since 1.0
     */

    public CharacteristicDTO(String name, String icon, Set<Product> products ) {
        this.name = name;
        this.icon = icon;
        this.products = products;
    }

    public CharacteristicDTO(Characteristic characteristic) {
        id = characteristic.getId();
        name = characteristic.getName();
        icon = characteristic.getIcon();
        products = characteristic.getProducts();
    }


    public Characteristic toEntity() {
        Characteristic entity = new Characteristic();
        entity.setId(id);
        entity.setName(name);
        entity.setIcon(icon);
        entity.setProducts(products);
        return entity;
    }


}
