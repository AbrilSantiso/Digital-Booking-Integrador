package grupo6.backendHotel.persistence.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

/**
 * City class is used for connect with database entity
 *
 * @author Grupo - 6
 */
@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id", scope = City.class)
@Getter
@Setter
@ToString
@Table(name = "cities")
public class City implements Serializable {

    /**
     * Private variable long for identification of city, identifier for unique key of the table, generatevalue for sequences of the primary key
     * and sequence generator for sequence and initial count
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /**
     * Private variable string for name of the city
     */
    private String name;
    /**
     * Private variable string for nameCountry of the city
     */
    @Column(name = "name_country")
    private String nameCountry;

    /**
     * Private variable type products for city of the product
     * Relationship OneToMany
     */
    @OneToMany(mappedBy = "city", fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"description", "category", "characteristics", "images", "city"})
    private Set<Product> products;

    /**
     * <p>
     * This method is used for build a object City without attributes
     * </p>
     *
     * @param None
     * @return void
     * @since 1.0
     */
    public City() {
    }
    /**
     * <p>
     * This method is used for build a object CityDTO with entity attributes
     * </p>
     *
     * @param String name of the city
     * @param String nameCountry of the city
     * @return void
     * @since 1.0
     */
    public City(String name, String nameCountry) {
        this.name = name;
        this.nameCountry = nameCountry;
    }

    /**
     * <p>
     * This method is used for build a object CityDTO with entity attributes
     * </p>
     *
     * @param String name of the city
     * @param String nameCountry of the city
     * @param Set of Products for products of the city
     * @return void
     * @since 1.0
     */
    public City(String name, String nameCountry, Set<Product> products) {
        this.name = name;
        this.nameCountry = nameCountry;
        this.products = products;
    }

    /**
     * <p>
     * This method is used for build a object City with entity attributes
     * </p>
     *
     * @param id     id of the city
     * @param String name of the city
     * @param String nameCountry of the city
     * @return void
     * @since 1.0
     */
    public City(Long id, String name, String nameCountry, Set<Product> products) {
        this.id = id;
        this.name = name;
        this.nameCountry = nameCountry;
        this.products = products;
    }
}
