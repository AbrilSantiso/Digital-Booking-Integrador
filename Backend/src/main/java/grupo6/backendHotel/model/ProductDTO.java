package grupo6.backendHotel.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import grupo6.backendHotel.persistence.entities.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Product DTO for conversion between entities and DTO for communication aspects for architecture layers
 *
 * @author Grupo - 6
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)

@AllArgsConstructor
@Getter
@Setter
@ToString
public class ProductDTO {
    /**
     * Private variable long for identification of product
     */
    private Long id;

    /**
     * Private variable string for name of the product
     */
    private String name;

    /**
     * Private variable string for description of the product
     */
    private String description;
    /**
     * Private variable type Image for images of the product
     * Relationship OneToMany
     */
    @JsonIgnoreProperties("product")
    private Set<Image> images;


    /**
     * Private variable type category for category of the product
     * Relationship ManyToOne
     */
    @JsonIgnoreProperties({"products", "description", "url"})
    private CategoryDTO category;

    /**
     * Private variable type characteristic for characteristic of the product
     * Relationship ManyToMany
     */
    @JsonIgnoreProperties("products")
    private Set<CharacteristicDTO> characteristics;

    @JsonIgnoreProperties("products")
    private CityDTO city;

    /**
     * Private variable type Rservation for reservations of the product
     * Relationship OneToMany
     */
    @JsonIgnoreProperties("product")
    private Set<Reservation> reservations;

    /**
     * <p>
     * This method is used for build a object ProductDTO with entity attributes
     * </p>
     *
     * @param name of the product
     * @param description of the product
     * @return void
     * @since 1.0
     */

    public ProductDTO(String name, String description, Set <CharacteristicDTO> characteristics, CategoryDTO category, CityDTO city ) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.city = city;
        this.characteristics = characteristics;
    }

    public ProductDTO(String name, String description, CategoryDTO category ) {
        this.name = name;
        this.description = description;
        this.category = category;
    }

    public ProductDTO() {
    }

    public ProductDTO(Product product) {
        id = product.getId();
        name = product.getName();
        description = product.getDescription();
        images = product.getImages();
        category = new CategoryDTO(product.getCategory());
        city = new CityDTO(product.getCity()) ;
        Set<CharacteristicDTO> characteristicDTOS = new HashSet<>();
        for (Characteristic characteristic : product.getCharacteristics()){
            characteristicDTOS.add(new CharacteristicDTO(characteristic));
        }
        characteristics = characteristicDTOS;
        reservations= product.getReservations();
    }

    public Product toEntity() {
        Product entity = new Product();
        entity.setId(id);
        entity.setName(name);
        entity.setDescription(description);
        //entity.setCharacteristics(characteristics);
        entity.setImages(images);
        entity.setCategory(category.toEntity());
        entity.setCity(city.toEntity());
        entity.setReservations(reservations);
        return entity;
    }

}