package grupo6.backendHotel.service.Impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo6.backendHotel.exceptions.ResourceNotFoundException;
import grupo6.backendHotel.model.CharacteristicDTO;
import grupo6.backendHotel.persistence.entities.Characteristic;
import grupo6.backendHotel.persistence.repository.ICharacteristicRepository;
import grupo6.backendHotel.service.HotelService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.ResourceAccessException;

import java.util.*;

/**
 * CharacteristicsServiceImpl class is used for request data to the data base implementation with differents actions of the
 * CRUD (create, read, update or delete) or others
 *
 * @author Grupo - 6
 *
 */
@Service
@Transactional
public class CharacteristicsServiceImpl implements HotelService<CharacteristicDTO> {

    /**
     * Private variable logger for use logger tools in the application
     */
    private static final Logger logger = Logger.getLogger(CharacteristicsServiceImpl.class);

    /**
     * Injection of the class characteristicRepository for use JPA operations
     */
    @Autowired
    ICharacteristicRepository characteristicRepository;

    /**
     * Injection of the class mapper for convertion between DTO's and entities
     */

    ObjectMapper mapper = new ObjectMapper();

    /**
     * <p>
     * This method is used for save a new characteristic in the data base for charactersitics table
     * </p>
     * @param characteristicDTO taken from a client
     * @return void
     * @since 1.0
     */
    @Override
    public void save(CharacteristicDTO characteristicDTO) {
        Characteristic characteristic = mapper.convertValue(characteristicDTO, Characteristic.class);
        logger.info("it is requested to save a characteristic " + characteristic.toString());
        characteristicRepository.save(characteristic);
        logger.info("it is saved the charateristic " + characteristic.toString());
    }

    /**
     * <p>
     * This method is used for search a characteristic by id in the data base for characteristic table
     * </p>
     * @param Long id of the characteristic
     * @return response entity with a characteristic
     * @since 1.0
     */
    @Override
    public CharacteristicDTO findById(Long id) throws ResourceNotFoundException {
        CharacteristicDTO characteristicDTO = null;
        logger.info("it is requested to search a characteristic by id: "+ id);
        Optional<Characteristic> characteristic = characteristicRepository.findById(id);
        if(characteristic.isEmpty()){
            throw new ResourceNotFoundException("Characteristic does not exist");
        }
        characteristicDTO = new CharacteristicDTO(characteristic.get());
        logger.info("Characteristic by id " + id + " found");
        return characteristicDTO;
    }

    /**
     * <p>
     * This method is used for search all characteristics in the data base for characteristics table
     * </p>
     * @param none
     * @return response entity with an array with the lists of charectiristics
     * @since 1.0
     */
    @Override
    public Collection<CharacteristicDTO> listAll() {
        logger.info("It is request to search all characteristics");
        List<Characteristic> characteristics = characteristicRepository.findAll();
        Set<CharacteristicDTO> characteristicDTOSet = new HashSet<>();
        for(Characteristic characteristic : characteristics){
            characteristicDTOSet.add(new CharacteristicDTO(characteristic));
        }
        logger.info("All characteristic found");
        return characteristicDTOSet;
    }

    /**
     * <p>
     * This method is used for delete a charactersitic by id in the data base for characteristics table
     * </p>
     * @param Long id of the characteristics
     * @return response entity with successfully message
     * @error error with ResourceAccessException with message "Characteristic does not exist"
     * @since 1.0
     */
    @Override
    public void deleteById(Long id) throws ResourceNotFoundException {
        logger.info("It is request to delete a characteristic by id");
        if(findById(id) == null){
            logger.error("The request does not have an id");
            throw new ResourceAccessException("Characteristic does not exist");
        }
        characteristicRepository.deleteById(id);
        logger.info("The characteristic with id:" + id + ", was deleted");
    }

    /**
     * <p>
     * This method is used for delete a characteristic by id in the data base for characteristics table
     * </p>
     * @param Long id of the characteristics
     * @return response entity with successfully message
     * @error error with ResourceAccessException with message "Characteristic does not exist"
     * @since 1.0
     */
    @Override
    public void update(CharacteristicDTO characteristicDTO) throws ResourceNotFoundException {
        logger.info("It is request to update a characteristic");
        if(findById(characteristicDTO.getId()) == null){
            logger.error("The request does not exists");
            throw new ResourceNotFoundException("Characteristic does not exist");
        }
        Characteristic characteristic = mapper.convertValue(characteristicDTO, Characteristic.class);
        logger.info("The Characteristic with " + characteristic.toString() + " was deleted");
        characteristicRepository.save(characteristic);
    }
}
