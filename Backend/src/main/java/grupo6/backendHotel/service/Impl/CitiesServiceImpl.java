package grupo6.backendHotel.service.Impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo6.backendHotel.exceptions.ResourceNotFoundException;
import grupo6.backendHotel.model.CityDTO;
import grupo6.backendHotel.persistence.entities.City;
import grupo6.backendHotel.persistence.repository.ICityRepository;
import grupo6.backendHotel.service.HotelService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.ResourceAccessException;

import java.util.*;

/**
 * CitiesServiceImpl class is used for request data to the data base implementation with differents actions of the
 * CRUD (create, read, update or delete) or others
 *
 * @author Grupo - 6
 *
 */
@Service
@Transactional
public class CitiesServiceImpl implements HotelService<CityDTO> {

    /**
     * Private variable logger for use logger tools in the application
     */
    private static final Logger logger = Logger.getLogger(CitiesServiceImpl.class);

    /**
     * Injection of the class cityRepository for use JPA operations
     */
    @Autowired
    ICityRepository cityRepository;

    /**
     * Injection of the class mapper for convertion between DTO's and entities
     */

    ObjectMapper mapper = new ObjectMapper();

    /**
     * <p>
     * This method is used for save a new city in the data base for city table
     * </p>
     * @param cityDTO taken from a client
     * @return void
     * @since 1.0
     */
    @Override
    public void save(CityDTO cityDTO) {
        City city = mapper.convertValue(cityDTO, City.class);
        logger.info("it is requested to save a city " + city.toString());
        cityRepository.save(city);
        logger.info("it is saved the city " + city);
    }

    /**
     * <p>
     * This method is used for search a city by id in the data base for city table
     * </p>
     * @param Long id of the city
     * @return response entity with a city
     * @since 1.0
     */
    @Override
    public CityDTO findById(Long id) throws ResourceNotFoundException {
        CityDTO cityDTO = null;
        logger.info("it is requested to search a city by id: " + id);
        Optional<City> city = cityRepository.findById(id);
        if (city.isEmpty()) {
            throw new ResourceNotFoundException("City does not exist");
        }
        cityDTO = new CityDTO(city.get());
        logger.info("City by id " + id + " found");
        return cityDTO;
    }

    /**
     * <p>
     * This method is used for search all cities in the data base for city table
     * </p>
     * @param none
     * @return response entity with an array with the lists of cities
     * @since 1.0
     */
    @Override
    public Collection<CityDTO> listAll() {
        logger.info("It is request to search all cities");
        List<City> cities = cityRepository.findAll();
        Set<CityDTO> cityDTOSet = new HashSet<>();
        for (City city : cities) {
            cityDTOSet.add(new CityDTO(city));
        }
        logger.info("All cities found");
        return cityDTOSet;
    }

    /**
     * <p>
     * This method is used for delete a city by id in the data base for city table
     * </p>
     * @param Long id of the city
     * @return response entity with successfully message
     * @error error with ResourceAccessException with message "City does not exist"
     * @since 1.0
     */
    @Override
    public void deleteById(Long id) throws ResourceNotFoundException {
        logger.info("It is request to delete a city by id");
        if (findById(id) == null) {
            logger.error("The request does not have an id");
            throw new ResourceAccessException("City does not exist");
        }
        cityRepository.deleteById(id);
        logger.info("The city with " + id + " was deleted");
    }

    /**
     * <p>
     * This method is used for delete a city by id in the data base for city table
     * </p>
     * @param Long id of the city
     * @return response entity with successfully message
     * @error error with ResourceAccessException with message "City does not exist"
     * @since 1.0
     */
    @Override
    public void update(CityDTO cityDTO) throws ResourceNotFoundException {
        logger.info("It is request to update a city");
        if (findById(cityDTO.getId()) == null) {
            logger.error("The request does not exists");
            throw new ResourceNotFoundException("City does not exist");
        }
        City city = mapper.convertValue(cityDTO, City.class);
        logger.info("The city with " + city.toString() + " was deleted");
        cityRepository.save(city);
    }
}
