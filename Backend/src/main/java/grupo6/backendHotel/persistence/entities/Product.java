package grupo6.backendHotel.persistence.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import lombok.*;
import org.hibernate.annotations.SortNatural;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id", scope = Product.class)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name="products")
public class Product implements Serializable {

    /**
     * Private variable long for identification of product, identifier for unique key of the table, generatevalue for sequences of the primary key
     * and sequence generator for sequence and initial count
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /**
     * Private variable string for name of the product
     */
    @Column(length = 300)
    private String name;
    /**
     * Private variable string for description of the product
     */
    @Column(length = 300)
    private String description;

    /**
     * Private variable type Image for images of the product
     * Relationship OneToMany
     */
    @OneToMany(mappedBy = "product")
    @SortNatural
    @OrderBy("id ASC")
    @JsonIgnoreProperties("product")
    private Set<Image> images = new HashSet<>();

    /**
     * Private variable type category for category of the product
     * Relationship ManyToOne
     */
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "category_id", nullable = false)
    @JsonIgnoreProperties({"products", "description", "url"})
    private Category category;

    /**
     * Private variable type city for city of the product
     * Relationship ManyToOne
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "city_id", nullable = false)
    @JsonIgnoreProperties("products")
    private City city;

    /**
     * Private variable type characteristic for characteristic of the product
     * Relationship ManyToMany
     */

    @ManyToMany
    @SortNatural
    @OrderBy("id ASC")
    @JoinTable(name="product_characteristic",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "characteristic_id"))
    @JsonIgnoreProperties("products")
    private Set <Characteristic> characteristics = new HashSet<>();

    /**
     * Private variable type reservation for reservation of the product
     * Relationship OneToMany
     */
    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    @SortNatural
    @OrderBy("id ASC")
    @JsonIgnoreProperties("reservations")
    private Set<Reservation> reservations  = new HashSet<>();

    /**
     * <p>
     * This method is used for build a object ProductDTO with entity attributes
     * </p>
     *
     * @param String name of the product
     * @param String description of the product
     * @param Set of characteristics for the characteristics for the product
     * @param Set of images for the images for the product
     * @param Type Category for the product´s category
     * @param Type City for the produst´s city
     * @return void
     * @since 1.0
     */
    public Product(String name, String description, Set <Characteristic> characteristics, Set<Image> images, Category category, City city ) {
        this.name = name;
        this.description = description;
        this.characteristics = characteristics;
        this.images = images;
        this.category = category;
        this.city = city;
    }
    /**
     * <p>
     * This method is used for build a object ProductDTO with entity attributes
     * </p>
     *
     * @param String name of the product
     * @param String description of the product
     * @param Type Category for the product´s category
     * @param Type City for the produst´s city
     * @return void
     * @since 1.0
     */
    public Product(String name, String description, Category category, City city ) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.city = city;
    }

    /**
     * <p>
     * This method is used for build a object Product with entity attributes
     * </p>
     *
     * @param id     id of the product
     * @param String name of the product
     * @param String description of the product
     * @return void
     * @since 1.0
     */
    public Product(Long id, String name, String description,  Set <Characteristic> characteristics, Set<Image> images, Category category, City city ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.characteristics = characteristics;
        this.images = images;
        this.category = category;
        this.city = city;
    }
}