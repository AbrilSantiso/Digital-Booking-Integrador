package grupo6.backendHotel.controller;

import grupo6.backendHotel.exceptions.ResourceNotFoundException;
import grupo6.backendHotel.model.CategoryDTO;
import grupo6.backendHotel.service.Impl.CategoriesServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Category controller is used for expose entry points to different services of category entity
 *
 * @author Grupo - 6
 *
 */
@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/categories")
public class CategoryController {

    /**
     * The service implementation for categories entity
     */
    @Autowired
    CategoriesServiceImpl categoriesService;

    /**
     * <p>
     * This method is used for save a new category in the data base for category table
     * </p>
     * @param categoryDTO taken from a client
     * @return response entity with successfully message
     * @since 1.0
     */
    @PostMapping("/save")
    public ResponseEntity<?> saveCategory(@RequestBody CategoryDTO categoryDTO){
        categoriesService.save(categoryDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("Category " + categoryDTO.getTitle() + " created successfully");
    }

    /**
     * <p>
     * This method is used for search all categories in the data base for category table
     * </p>
     * @param none
     * @return response entity with an array with the lists of categories
     * @since 1.0
     */
    @GetMapping("/all")
    public Collection<CategoryDTO> allCategories(){
        return categoriesService.listAll();
    }

    /**
     * <p>
     * This method is used for search a category by id in the data base for category table
     * </p>
     * @param Long id of the category
     * @return response entity with a category
     * @since 1.0
     */
    @GetMapping("/{id}")
    public CategoryDTO findById(@PathVariable Long id) throws ResourceNotFoundException {
        return categoriesService.findById(id);
    }

    /**
     * <p>
     * This method is used for update a new category in the data base for category table
     * </p>
     * @param categoryDTO taken from a client
     * @return response entity with successfully message
     * @since 1.0
     */
    @PutMapping()
    public ResponseEntity<?> updateCategory(@RequestBody CategoryDTO categoryDTO) throws ResourceNotFoundException {
        categoriesService.update(categoryDTO);
        return ResponseEntity.status(HttpStatus.OK).body("Category " + categoryDTO.getTitle() + "updated");
    }

    /**
     * <p>
     * This method is used for delete a category by id in the data base for category table
     * </p>
     * @param Long id of the category
     * @return response entity with successfully message
     * @since 1.0
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id) throws ResourceNotFoundException{
        categoriesService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Category deleted");
    }
}
