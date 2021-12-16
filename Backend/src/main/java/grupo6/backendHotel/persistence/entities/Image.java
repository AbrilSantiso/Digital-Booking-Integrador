package grupo6.backendHotel.persistence.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Category clas is used for connect with data base entity
 *
 * @author Grupo - 6
 *
 */
@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id",scope = Image.class)
@Getter
@Setter
@ToString
@Table(name="images")
public class Image implements Serializable {

    /**
     * Private variable long for identification of image, identifier for unique key of the table, generatevalue for sequences of the primary key
     * and sequence generator for sequence and initial count
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /**
     * Private variable string for title of the image
     */
    @Column(length = 300)
    private String title;

    /**
     * Private variable string for url of the image
     */
    @Column(length = 300)
    private String url;

    /**
     * Private variable type product for image of the product
     * Relationship ManyToOne
     */
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name="product_id", nullable = false)
    @JsonIgnoreProperties({"description", "category", "characteristics", "images", "city", "reservations"})
    private Product product;

    /**
     * <p>
     * This method is used for build a object Image without attributes
     * </p>
     * @param None
     * @return void
     * @since 1.0
     */
    public Image() {
    }

    /**
     * <p>
     * This method is used for build a object ImageDTO with entity attributes
     * </p>
     * @param String title of the image
     * @param String  url of the image
     * @return void
     * @since 1.0
     */
    public Image(String title, String url, Product product) {
        this.title = title;
        this.url = url;
        this.product = product;
    }

    /**
     * <p>
     * This method is used for build a object Image with entity attributes
     * </p>
     * @param id id of the image
     * @param String title of the image
     * @param String  url of the category
     * @return void
     * @since 1.0
     */
    public Image(Long id, String title, String url, Product product) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.product = product;
    }
}
