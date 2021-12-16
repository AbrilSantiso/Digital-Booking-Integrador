package grupo6.backendHotel.service.Impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo6.backendHotel.exceptions.ResourceNotFoundException;
import grupo6.backendHotel.model.ProductDTO;
import grupo6.backendHotel.persistence.entities.Product;
import grupo6.backendHotel.persistence.entities.Reservation;
import grupo6.backendHotel.persistence.repository.IProductRepository;
import grupo6.backendHotel.service.HotelService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.ResourceAccessException;

import java.time.LocalDate;
import java.util.*;

/**
 * ProductsServiceImpl class is used for request data to the data base implementation with differents actions of the
 * CRUD (create, read, update or delete) or others
 *
 * @author Grupo - 6
 *
 */
@Service
@Transactional
public class ProductsServiceImpl implements HotelService<ProductDTO> {

    /**
     * Private variable logger for use logger tools in the application
     */
    private static final Logger logger = Logger.getLogger(ProductsServiceImpl.class);

    /**
     * Injection of the class productRepository for use JPA operations
     */
    @Autowired
    IProductRepository productRepository;

    @Autowired
    ImagesServiceImpl imagesService;

    /**
     * Injection of the class mapper for convertion between DTO's and entities
     */

    ObjectMapper mapper = new ObjectMapper();

    /**
     * <p>
     * This method is used for save a new product in the data base for products table
     * </p>
     *
     * @param productDTO taken from a client
     * @return void
     * @since 1.0
     */
    @Override
    public void save(ProductDTO productDTO) {
        Product product = mapper.convertValue(productDTO, Product.class);
        logger.info("It is requested to save a product " + product.toString());
        productRepository.save(product);
        logger.info("It is saved the product " + product.toString());
    }

    /**
     * <p>
     * This method is used for search a product by id in the data base for products table
     * </p>
     *
     * @param id of the product
     * @return response entity with a product
     * @since 1.0
     */
    @Override
    public ProductDTO findById(Long id) throws ResourceNotFoundException {
        ProductDTO productDTO = null;
        logger.info("It is request to search a product by id: " + id);
        Optional<Product> product = productRepository.findById(id);
        if (product.isEmpty()) {
            throw new ResourceNotFoundException("Product does not exist");
        }
        productDTO = new ProductDTO(product.get());
        logger.info("Product by id " + id + " found");
        return productDTO;
    }

    /**
     * <p>
     * This method is used for search all products in the data base for products table
     * </p>
     *
     * @param
     * @return response entity with an array with the lists of products
     * @since 1.0
     */
    @Override
    public Collection<ProductDTO> listAll() {
        logger.info("It is request to search all products");
        List<Product> products = productRepository.findAll();
        Set<ProductDTO> productDTOSet = new HashSet<>();
        for (Product product : products) {
            productDTOSet.add(new ProductDTO(product));
        }
        logger.info("All products found");
        return productDTOSet;
    }

    /**
     * <p>
     * This method is used for search all products in the data base by its category for products table
     * </p>
     *
     * @return response entity with an array with the lists of products
     * @since 1.0
     */
    public Collection<ProductDTO> findAllByCategoryId(Long id) {
        logger.info("It is request to search all products");
        List<Product> products = productRepository.findAllByCategoryId(id).orElse(new ArrayList<>());
        Set<ProductDTO> productDTOSet = new HashSet<>();
        for (Product product : products) {
            productDTOSet.add(new ProductDTO(product));
        }
        logger.info("All products found");
        return productDTOSet;
    }

    /**
     * <p>
     * This method is used for search all products in the data base by its city for products table
     * </p>
     *
     * @return response entity with an array with the lists of products
     * @since 1.0
     */
    public Collection<ProductDTO> findAllByCityId(Long id) {
        logger.info("It is request to search all products");
        List<Product> products = productRepository.findAllByCityId(id).orElse(new ArrayList<>());
        Set<ProductDTO> productDTOSet = new HashSet<>();
        for (Product product : products) {
            productDTOSet.add(new ProductDTO(product));
        }
        logger.info("All products found");
        return productDTOSet;
    }

    /**
     * <p>
     * This method is used for search all products in the data base by name city for products table
     * </p>
     *
     * @return response entity with an array with the lists of products
     * @since 1.0
     */
    public Collection<ProductDTO> findAllByCityName(String name) {
        logger.info("It is request to search all products");
        List<Product> products = productRepository.findAllByCityName(name).orElse(new ArrayList<>());
        Set<ProductDTO> productDTOSet = new HashSet<>();
        for (Product product : products) {
            productDTOSet.add(new ProductDTO(product));
        }
        logger.info("All products found");
        return productDTOSet;
    }

    /**
     * <p>
     * This method is used to filter products by city name or/and reservation dates
     * </p>
     * @param cityName of the city
     * @param startDate of the chosen range
     * @param endDate of the chosen range
     * @return response entity with successfully message
     * @error error with ResourceAccessException with message "Product does not exist"
     * @since 1.0
     */
    public Collection<ProductDTO> findAllByCityIdAndOrAvailability(String cityName, LocalDate startDate, LocalDate endDate) {
        logger.info("It is request to search all products");
        Set<ProductDTO> productsAvailable = new HashSet<>();
        List<Product> allProducts;

        if (cityName != null) {
             allProducts = productRepository.findAllByCityName(cityName).orElse(new ArrayList<>());
        } else {
             allProducts = productRepository.findAll();
        }

        if(startDate != null && endDate != null) {
            for (Product product : allProducts) {
                Set<LocalDate> reserved = productAvailability(product.getId());
                if (!reserved.contains(startDate) && !reserved.contains(endDate))
                    productsAvailable.add(new ProductDTO(product));
            }
        } else {
            for (Product product : allProducts) {
                productsAvailable.add(new ProductDTO(product));
            }
        }
        return productsAvailable;
    }

    /**
     * <p>
     * This method is used for checking the availability of a product
     * </p>
     * @param id of the pruduct
     * @return set of dates in which the requested product it is not available
     * @since 1.0
     */
    public Set<LocalDate> productAvailability(Long id){
        Product product = productRepository.getById(id);

        Set<LocalDate> reserved = new HashSet<>();
        for(Reservation reservation : product.getReservations()){
            LocalDate startDate = reservation.getStartDate();
            LocalDate endDate = reservation.getEndDate();

            while (!startDate.isAfter(endDate)) {
                reserved.add(startDate);
                startDate = startDate.plusDays(1);
            }
        }
            return reserved;
    }

    /**
     * <p>
     * This method is used for delete a product by id in the data base for products table
     * </p>
     * @param id of the products
     * @return response entity with successfully message
     * @error error with ResourceAccessException with message "Product does not exist"
     * @since 1.0
     */
    @Override
    public void deleteById(Long id) throws ResourceNotFoundException{
        logger.info("It is request to delete a product by id");
        if(findById(id) == null){
            logger.error("The request does not have an id");
            throw new ResourceAccessException("Product does not exist");
        }
        productRepository.deleteById(id);
        logger.info("The product with " + id + " was deleted");
    }

    /**
     * <p>
     * This method is used for delete a product by id in the data base for products table
     * </p>
     * @paramid of the product
     * @return response entity with successfully message
     * @error error with ResourceAccessException with message "Product does not exist"
     * @since 1.0
     */
    @Override
    public void update(ProductDTO productDTO) throws ResourceNotFoundException {
        logger.info("It is request to update a product");
        if(findById(productDTO.getId()) == null){
            logger.error("The request does not exists");
            throw new ResourceNotFoundException("Product does not exist");
        }
        Product product = mapper.convertValue(productDTO, Product.class);
        logger.info("The product with " + product.toString() + " was deleted");
        productRepository.save(product);
    }

}
