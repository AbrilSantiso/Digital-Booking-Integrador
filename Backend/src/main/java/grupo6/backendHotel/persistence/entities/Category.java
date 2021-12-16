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
 * Category class is used for connect with database entity
 *
 * @author Grupo - 6
 */
@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id", scope = Category.class)
@Getter
@Setter
@ToString
@Table(name="categories")
public class Category implements Serializable {

    /**
     * Private variable long for identification of category, identifier for unique key of the table, generatevalue for sequences of the primary key
     * and sequence generator for sequence and initial count
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /**
     * Private variable string for title of the category
     */
    @Column(length = 300)
    private String title;
    /**
     * Private variable string for description of the category
     */
    @Column(length = 300)
    private String description;
    /**
     * Private variable string for url of the image of the category
     */
    @Column(length = 300)
    private String url;

    /**
     * Private variable type products for category of the product
     * Relationship OneToMany
     */
    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"description", "category", "characteristics", "images", "city"})
    @JsonIgnore
    private Set<Product> products;

    /**
     * <p>
     * This method is used for build a object Category without attributes
     * </p>
     * @param None
     * @return void
     * @since 1.0
     */
    public Category() {
    }
    /**
     * <p>
     * This method is used for build a object CategoryDTO with entity attributes
     * </p>
     * @param String title of the category
     * @param String description of the category
     * @param String url of the category
     * @return void
     * @since 1.0
     */
    public Category(String title, String description, String url) {
        this.title = title;
        this.description = description;
        this.url = url;
    }
    /**
     * <p>
     * This method is used for build a object CategoryDTO with entity attributes
     * </p>
     * @param String title of the category
     * @param String description of the category
     * @param String url of the category
     * @param Set of Products for products for category
     * @return void
     * @since 1.0
     */
    public Category(String title, String description, String url, Set<Product> products) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.products = products;
    }

    /**
     * <p>
     * This method is used for build a object Category with entity attributes
     * </p>
     * @param id id of the category
     * @param String title of the category
     * @param String description of the category
     * @param String url of the category
     * @return void
     * @since 1.0
     */
    public Category(Long id, String title, String description, String url, Set<Product> products) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.products = products;
    }
}
