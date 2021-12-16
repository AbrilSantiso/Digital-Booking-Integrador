package grupo6.backendHotel.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import grupo6.backendHotel.persistence.entities.City;
import grupo6.backendHotel.persistence.entities.Image;
import grupo6.backendHotel.persistence.entities.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * Category DTO for conversion between entities and DTO for communication aspects for architecture layers
 *
 * @author Grupo - 6
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ImageDTO {
    /**
     * Private variable long for identification of images
     */
    private Long id;

    /**
     * Private variable string for title of the image
     */
    private String title;

    /**
     * Private variable string for url of the image of the image
     */
    private String url;

    /**
     * Private variable Product for the image´s product
     */

    @JsonIgnoreProperties({"description", "category", "characteristics", "images", "city", "reservations"})
    private ProductDTO product;


    /**
     * <p>
     * This method is used for build a object ImageDTO with entity attributes
     * </p>
     * @return void
     * @since 1.0
     */

    public ImageDTO(String title, String url, ProductDTO product) {
        this.title = title;
        this.url = url;
        this.product = product;
    }

    public ImageDTO() {
    }

    public ImageDTO(Image image) {
        id = image.getId();
        title = image.getTitle();
        url = image.getUrl();
        product = new ProductDTO(image.getProduct());
    }

    public Image toEntity() {
        Image entity = new Image();
        entity.setId(id);
        entity.setTitle(title);
        entity.setUrl(url);
        entity.setProduct(product.toEntity());
        return entity;
    }

}
