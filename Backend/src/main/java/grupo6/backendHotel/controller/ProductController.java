package grupo6.backendHotel.controller;

import grupo6.backendHotel.exceptions.ResourceNotFoundException;
import grupo6.backendHotel.model.ProductDTO;
import grupo6.backendHotel.model.UserDTO;
import grupo6.backendHotel.service.Impl.ProductsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Collection;

/**
 * Product controller is used for expose entry points to different services of product entity
 *
 * @author Grupo - 6
 *
 */
@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/products")
public class ProductController {

    /**
     * The service implementation for products entity
     */
    @Autowired
    ProductsServiceImpl productsService;

    /**
     * <p>
     * This method is used for save a new product in the data base for product table
     * </p>
     * @param productDTO taken from a client
     * @return response entity with successfully message
     * @since 1.0
     */
    @PostMapping("/save")
    public ResponseEntity<?> saveProduct(@RequestBody ProductDTO productDTO){
        productsService.save(productDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("Product " + productDTO.getName() + " created successfully");
    }

    /**
     * <p>
     * This method is used for search all products in the data base for product table
     * </p>
     * @return response entity with a array with the lists of products
     * @since 1.0
     */
    @GetMapping("/all")
    public Collection<ProductDTO> allProducts(){
        return productsService.listAll();
    }

    /**
     * <p>
     * This method is used for search all products by its category in the data base for product table
     * </p>
     * @return response entity with a array with the lists of products
     * @since 1.0
     */


    @GetMapping("/category/{categoryId}")
    public Collection<ProductDTO> findAllByCategoryId(@PathVariable Long categoryId){
        return productsService.findAllByCategoryId(categoryId);
    }
    /**
     * <p>
     * This method is used for search all products by its city in the data base for product table
     * </p>
     * @return response entity with a array with the lists of products
     * @since 1.0
     */

    @GetMapping("/city/{cityId}")
    public Collection<ProductDTO> findAllByCityId(@PathVariable Long cityId){

        return productsService.findAllByCityId(cityId);
    }
    /**
     * <p>
     * This method is used for search all products by name city in the data base for product table
     * </p>
     * @return response entity with a array with the lists of products
     * @since 1.0
     */

    @GetMapping("/city/name/{cityName}")
    public Collection<ProductDTO> findAllByCityName(@PathVariable String cityName){
        return productsService.findAllByCityName(cityName);
    }
    /**
     * <p>
     * This method is used for search all products by start and end date of reservation in the data base for product table
     * </p>
     * @return response entity with a array with the lists of products
     * @since 1.0
     */

    @GetMapping("/available")
    @ResponseBody
    public Collection<ProductDTO> findAllByCityIdAndOrAvailability(@RequestParam(required = false) String city,
                                                              @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
                                                              @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)LocalDate endDate) throws Exception{
        Collection<ProductDTO> products = productsService.findAllByCityIdAndOrAvailability(city, startDate, endDate);
        return products;
    }

    @GetMapping("/availability/{Id}")
    public Collection<LocalDate> productAvailabilityById(@PathVariable Long Id){
        return productsService.productAvailability(Id);
    }

    /**
     * <p>
     * This method is used for search a product by id in the data base for product table
     * </p>
     * @param  id of the product
     * @return response entity with a product
     * @since 1.0
     */
    @GetMapping("/{id}")
    public ProductDTO findById(@PathVariable Long id) throws ResourceNotFoundException {
        return productsService.findById(id);
    }

    /**
     * <p>
     * This method is used for update a new product in the data base for product table
     * </p>
     * @param productDTO taken from a client
     * @return response entity with successfully message
     * @since 1.0
     */
    @PutMapping("/update")
    public ResponseEntity<?> updateProduct(@RequestBody ProductDTO productDTO) throws ResourceNotFoundException {
        productsService.update(productDTO);
        return ResponseEntity.status(HttpStatus.OK).body("Product " + productDTO.getName() + "updated");
    }

    /**
     * <p>
     * This method is used for delete a product by id in the data base for product table
     * </p>
     * @param id of the product
     * @return response entity with successfully message
     * @since 1.0
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) throws ResourceNotFoundException{
        productsService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Product deleted");
    }
}
