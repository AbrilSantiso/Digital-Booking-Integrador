package grupo6.backendHotel.controller;

import grupo6.backendHotel.exceptions.ResourceNotFoundException;
import grupo6.backendHotel.model.CityDTO;
import grupo6.backendHotel.service.Impl.CitiesServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * City controller is used for expose entry points to different services of city entity
 *
 * @author Grupo - 6
 */
@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/cities")
public class CityController {

    /**
     * The service implementation for cities entity
     */
    @Autowired
    CitiesServiceImpl citiesService;

    /**
     * <p>
     * This method is used for save a new city in the database for city table
     * </p>
     *
     * @param cityDTO taken from a client
     * @return response entity with successfully message
     * @since 1.0
     */
    @PostMapping("/save")
    public ResponseEntity<?> saveCity(@RequestBody CityDTO cityDTO) {
        citiesService.save(cityDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("City " + cityDTO.getName() + " created successfully");
    }

    /**
     * <p>
     * This method is used for search all cities in the database for city table
     * </p>
     *
     * @param none
     * @return response entity with an array with the lists of cities
     * @since 1.0
     */
    @CrossOrigin(origins = "http://localhost:300")
    @GetMapping("/all")
    public Collection<CityDTO> allCities() {
        return citiesService.listAll();
    }

    /**
     * <p>
     * This method is used for search a city by id in the database for city table
     * </p>
     *
     * @param Long id of the city
     * @return response entity with a city
     * @since 1.0
     */
    @GetMapping("/{id}")
    public CityDTO findById(@PathVariable Long id) throws ResourceNotFoundException {
        return citiesService.findById(id);
    }

    /**
     * <p>
     * This method is used for update a new city in the database for city table
     * </p>
     *
     * @param cityDTO taken from a client
     * @return response entity with successfully message
     * @since 1.0
     */
    @PutMapping("/update")
    public ResponseEntity<?> updateCity(@RequestBody CityDTO cityDTO) throws ResourceNotFoundException {
        citiesService.update(cityDTO);
        return ResponseEntity.status(HttpStatus.OK).body("City " + cityDTO.getName() + "updated");
    }

    /**
     * <p>
     * This method is used for delete a city by id in the database for city table
     * </p>
     *
     * @param Long id of the city
     * @return response entity with successfully message
     * @since 1.0
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCity(@PathVariable Long id) throws ResourceNotFoundException {
        citiesService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("City deleted");
    }
}
