package grupo6.backendHotel.controller;

import grupo6.backendHotel.exceptions.ResourceNotFoundException;
import grupo6.backendHotel.model.ImageDTO;
import grupo6.backendHotel.service.Impl.ImagesServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Image controller is used for expose entry points to differents services of image entity
 *
 * @author Grupo - 6
 *
 */
@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/images")
public class ImageController {

    /**
     * The service immplementation for images entity
     */
    @Autowired
    ImagesServiceImpl imagesService;

    /**
     * <p>
     * This method is used for save a new image in the data base for image table
     * </p>
     * @param imageDTO taken from a client
     * @return response entity with sucessfully message
     * @since 1.0
     */
    @PostMapping("/save")
    public ResponseEntity<?> saveImage(@RequestBody ImageDTO imageDTO){
        imagesService.save(imageDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("Image " + imageDTO.getTitle() + " created successfully");
    }

    /**
     * <p>
     * This method is used for search all images in the data base for image table
     * </p>
     * @param none
     * @return response entity with a array with the lists of images
     * @since 1.0
     */
    @GetMapping("/all")
    public Collection<ImageDTO> allImages(){
        return imagesService.listAll();
    }

    /**
     * <p>
     * This method is used for search a image by id in the data base for image table
     * </p>
     * @param Long id of the image
     * @return response entity with a image
     * @since 1.0
     */
    @GetMapping("/{id}")
    public ImageDTO findById(@PathVariable Long id) throws ResourceNotFoundException {
        return imagesService.findById(id);
    }

    /**
     * <p>
     * This method is used for update a new image in the data base for image table
     * </p>
     * @param imageDTO taken from a client
     * @return response entity with sucessfully message
     * @since 1.0
     */
    @PutMapping("/update")
    public ResponseEntity<?> updateImage(@RequestBody ImageDTO imageDTO) throws ResourceNotFoundException {
        imagesService.update(imageDTO);
        return ResponseEntity.status(HttpStatus.OK).body("Image " + imageDTO.getTitle() + "updated");
    }

    /**
     * <p>
     * This method is used for delete a image by id in the data base for image table
     * </p>
     * @param Long id of the image
     * @return response entity with sucessfully message
     * @since 1.0
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteImage(@PathVariable Long id) throws ResourceNotFoundException{
        imagesService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Image deleted");
    }
}
