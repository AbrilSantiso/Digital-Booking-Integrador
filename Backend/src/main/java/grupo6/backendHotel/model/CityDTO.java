package grupo6.backendHotel.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import grupo6.backendHotel.persistence.entities.Category;
import grupo6.backendHotel.persistence.entities.Characteristic;
import grupo6.backendHotel.persistence.entities.City;
import grupo6.backendHotel.persistence.entities.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.HashSet;
import java.util.Set;

/**
 * City DTO for conversion between entities and DTO for communication aspects for architecture layers
 *
 * @author Grupo - 6
 */
@JsonIgnoreProperties(ignoreUnknown = true)

@AllArgsConstructor
@Getter
@Setter
@ToString
public class CityDTO {
    /**
     * Private variable long for identification of city
     */
    private Long id;

    /**
     * Private variable string for name of the city
     */
    private String name;

    /**
     * Private variable string for name_country of the city
     */
    private String nameCountry;

    @JsonIgnoreProperties({"description", "category", "characteristics", "images", "city"})
    private Set<Product> products;

    /**
     * <p>
     * This method is used for build a object CityDTO with entity attributes
     * </p>
     *
     * @param name of the city
     * @param nameCountry of the city
     * @return void
     * @since 1.0
     */
    public CityDTO(String name, String nameCountry) {
        this.name = name;
        this.nameCountry = nameCountry;
    }

    /**
     * <p>
     * This method is used for build a object CityDTO with entity attributes
     * </p>
     *
     * @param  name of the city
     * @param  nameCountry of the city
     * @param  products for products of the City
     * @return void
     * @since 1.0
     */

    public CityDTO(String name, String nameCountry, Set<Product> products) {
        this.name = name;
        this.nameCountry = nameCountry;
        this.products = products;
    }

    public CityDTO() {
    }

    public CityDTO(City city) {
        id = city.getId();
        name = city.getName();
        nameCountry = city.getNameCountry();
        products = city.getProducts();
    }

    public City toEntity() {
        City entity = new City();
        entity.setId(id);
        entity.setName(name);
        entity.setNameCountry(nameCountry);
        entity.setProducts(products);
        return entity;
    }
}
