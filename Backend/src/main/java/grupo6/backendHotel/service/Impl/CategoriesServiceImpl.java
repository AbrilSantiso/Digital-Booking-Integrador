package grupo6.backendHotel.service.Impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo6.backendHotel.exceptions.ResourceNotFoundException;
import grupo6.backendHotel.model.CategoryDTO;
import grupo6.backendHotel.persistence.entities.Category;
import grupo6.backendHotel.persistence.repository.ICategoryRepository;
import grupo6.backendHotel.service.HotelService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.ResourceAccessException;

import java.util.*;

/**
 * CategoriesServiceImpl class is used for request data to the data base implementation with differents actions of the
 * CRUD (create, read, update or delete) or others
 *
 * @author Grupo - 6
 *
 */
@Service
@Transactional
public class CategoriesServiceImpl implements HotelService<CategoryDTO> {

    /**
     * Private variable logger for use logger tools in the application
     */
    private static final Logger logger = Logger.getLogger(CategoriesServiceImpl.class);

    /**
     * Injection of the class categoryRepository for use JPA operations
     */
    @Autowired
    ICategoryRepository categoryRepository;

    /**
     * Injection of the class mapper for convertion between DTO's and entities
     */

    ObjectMapper mapper = new ObjectMapper();

    /**
     * <p>
     * This method is used for save a new category in the data base for category table
     * </p>
     * @param categoryDTO taken from a client
     * @return void
     * @since 1.0
     */
    @Override
    public void save(CategoryDTO categoryDTO) {
        Category category = mapper.convertValue(categoryDTO, Category.class);
        logger.info("it is requested to save a category " + category.toString());
        categoryRepository.save(category);
        logger.info("it is saved the category " + category.toString());
    }

    /**
     * <p>
     * This method is used for search a category by id in the data base for category table
     * </p>
     * @param Long id of the category
     * @return response entity with a category
     * @since 1.0
     */
    @Override
    public CategoryDTO findById(Long id) throws ResourceNotFoundException {
        CategoryDTO categoryDTO = null;
        logger.info("it is requested to search a category by id: "+ id);
        Optional<Category> category = categoryRepository.findById(id);
        if(category.isEmpty()){
            throw new ResourceNotFoundException("Category does not exist");
        }
        categoryDTO = new CategoryDTO(category.get());
        logger.info("Category by id " + id + " found");
        return categoryDTO;
    }

    /**
     * <p>
     * This method is used for search all categories in the data base for category table
     * </p>
     * @param none
     * @return response entity with an array with the lists of categories
     * @since 1.0
     */
    @Override
    public Collection<CategoryDTO> listAll() {
       logger.info("It is request to search all categories");
       List<Category> categories = categoryRepository.findAll();
       Set<CategoryDTO> categoryDTOSet = new HashSet<>();
       for(Category category : categories){
           categoryDTOSet.add(new CategoryDTO(category));
       }
       logger.info("All categories found");
       return categoryDTOSet;
    }

    /**
     * <p>
     * This method is used for delete a category by id in the data base for category table
     * </p>
     * @param Long id of the category
     * @return response entity with successfully message
     * @error error with ResourceAccessException with message "Category does not exist"
     * @since 1.0
     */
    @Override
    public void deleteById(Long id) throws ResourceNotFoundException {
        logger.info("It is request to delete a category by id");
        if(findById(id) == null){
            logger.error("The request does not have an id");
            throw new ResourceAccessException("Category does not exist");
        }
        categoryRepository.deleteById(id);
        logger.info("The category with " + id + " was deleted");
    }

    /**
     * <p>
     * This method is used for delete a category by id in the data base for category table
     * </p>
     * @param Long id of the category
     * @return response entity with successfully message
     * @since 1.0
     */
    @Override
    public void update(CategoryDTO categoryDTO) throws ResourceNotFoundException {
        logger.info("It is request to update a category");
        if(findById(categoryDTO.getId()) == null){
            logger.error("The request does not exists");
            throw new ResourceNotFoundException("Category does not exist");
        }
        Category category = mapper.convertValue(categoryDTO, Category.class);
        logger.info("The category with " + category.toString() + " was deleted");
        categoryRepository.save(category);
    }
}
