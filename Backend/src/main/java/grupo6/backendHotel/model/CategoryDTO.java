package grupo6.backendHotel.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import grupo6.backendHotel.persistence.entities.Category;
import grupo6.backendHotel.persistence.entities.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Set;

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
public class CategoryDTO {
    /**
     * Private variable long for identification of category
     */
    private Long id;

    /**
     * Private variable string for title of the category
     */
    private String title;

    /**
     * Private variable string for description of the category
     */
    private String description;

    /**
     * Private variable string for url of the image of the category
     */
    private String url;

    /**
     * Private variable set for the products of the category
     */
    @JsonIgnoreProperties({"description", "category", "characteristics", "images", "city"})
    private Set<Product> products;

    /**
     * <p>
     * This method is used for build a object CategoryDTO with entity attributes
     * </p>
     * @param title of the category
     * @param description of the category
     * @param url of the category
     * @return void
     * @since 1.0
     */
    public CategoryDTO(String title, String description, String url) {
        this.title = title;
        this.description = description;
        this.url = url;
    }

    public CategoryDTO() {
    }

    public CategoryDTO(Category category) {
        id = category.getId();
        title = category.getTitle();
        description = category.getDescription();
        url = category.getUrl();
        products = category.getProducts();
    }

    public Category toEntity() {
        Category entity = new Category();
        entity.setId(id);
        entity.setTitle(title);
        entity.setDescription(description);
        entity.setUrl(url);
        return entity;
    }


}
