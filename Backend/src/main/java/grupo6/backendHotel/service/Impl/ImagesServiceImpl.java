package grupo6.backendHotel.service.Impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo6.backendHotel.exceptions.ResourceNotFoundException;
import grupo6.backendHotel.model.ImageDTO;
import grupo6.backendHotel.model.ProductDTO;
import grupo6.backendHotel.persistence.entities.Image;
import grupo6.backendHotel.persistence.repository.IImageRepository;
import grupo6.backendHotel.service.HotelService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.ResourceAccessException;

import java.util.*;

/**
 * ImagesServiceImpl class is used for request data to the data base implementation with differents actions of the
 * CRUD (create, read, update or delete) or others
 *
 * @author Grupo - 6
 *
 */
@Service
@Transactional
public class ImagesServiceImpl implements HotelService<ImageDTO> {

    /**
     * Private variable logger for use logger tools in the application
     */
    private static final Logger logger = Logger.getLogger(ImagesServiceImpl.class);

    /**
     * Injection of the class imageRepository for use JPA operations
     */
    @Autowired
    IImageRepository imageRepository;

    @Autowired
    ProductsServiceImpl productsService;

    /**
     * Injection of the class mapper for convertion between DTO's and entities
     */

    ObjectMapper mapper = new ObjectMapper();

    /**
     * <p>
     * This method is used for save a new image in the data base for images table
     * </p>
     * @param imageDTO taken from a client
     * @return void
     * @since 1.0
     */
    @Override
    public void save(ImageDTO imageDTO) {
       Image image = mapper.convertValue(imageDTO, Image.class);
        logger.info("it is requested to save a image " + image.toString());
       imageRepository.save(image);
        logger.info("it is saved the image " + image.toString());
    }

    /**
     * <p>
     * This method is used for search a image by id in the data base for images table
     * </p>
     * @param Long id of the image
     * @return response entity with a image
     * @since 1.0
     */
    @Override
    public ImageDTO findById(Long id) throws ResourceNotFoundException {
       ImageDTO imageDTO = null;
        logger.info("it is requested to search a image by id: "+ id);
        Optional<Image> image = imageRepository.findById(id);
        if(image.isEmpty()){
            throw new ResourceNotFoundException("Image does not exist");
        }
        imageDTO = new ImageDTO(image.get());
        logger.info("Image by id " + id + " found");
        return imageDTO;
    }

    /**
     * <p>
     * This method is used for search all images in the data base for images table
     * </p>
     * @param none
     * @return response entity with an array with the lists of images
     * @since 1.0
     */
    @Override
    public Collection<ImageDTO> listAll() {
       logger.info("It is request to search all images");
       List<Image> images = imageRepository.findAll();
       Set<ImageDTO> imageDTOSet = new HashSet<>();
       for(Image image : images){
           imageDTOSet.add(new ImageDTO(image));
       }
       logger.info("All images found");
       return imageDTOSet;
    }

    /**
     * <p>
     * This method is used for delete a image by id in the data base for images table
     * </p>
     * @param Long id of the images
     * @return response entity with successfully message
     * @error error with ResourceAccessException with message "Image does not exist"
     * @since 1.0
     */
    @Override
    public void deleteById(Long id) throws ResourceNotFoundException {
        logger.info("It is request to delete a image by id");
        if(findById(id) == null){
            logger.error("The request does not have an id");
            throw new ResourceAccessException("Image does not exist");
        }
        imageRepository.deleteById(id);
        logger.info("The image with " + id + " was deleted");
    }

    /**
     * <p>
     * This method is used for delete a image by id in the data base for imagess table
     * </p>
     * @param Long id of the images
     * @return response entity with successfully message
     * @error error with ResourceAccessException with message "Image does not exist"
     * @since 1.0
     */
    @Override
    public void update(ImageDTO imageDTO) throws ResourceNotFoundException {
        logger.info("It is request to update a image");
        if(findById(imageDTO.getId()) == null){
            logger.error("The request does not exists");
            throw new ResourceNotFoundException("Image does not exist");
        }
        Image image = mapper.convertValue(imageDTO, Image.class);
        logger.info("The image " + image.toString() + " was deleted");
        imageRepository.save(image);
    }

    public Set<ImageDTO> findAllByProductId(Long id) {
        logger.info("It is request to search all products");
        Optional<Set<Image>> images = imageRepository.findAllByProductId(id);
        Set<ImageDTO> imageDTOSet = new HashSet<>();
        for (Image image: images.get()){
             imageDTOSet.add(mapper.convertValue(image, ImageDTO.class));
       }
       logger.info("All products found");
       return imageDTOSet;
    }

}
