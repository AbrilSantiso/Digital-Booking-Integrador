package grupo6.backendHotel.controller;

import grupo6.backendHotel.exceptions.ResourceNotFoundException;
import grupo6.backendHotel.model.CharacteristicDTO;
import grupo6.backendHotel.service.Impl.CharacteristicsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * characteristic controller is used for expose entry points to differents services of characteristic entity
 *
 * @author Grupo - 6
 *
 */
@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
@RequestMapping("/characteristics")

public class CharacteristicController {

    /**
     * The service immplementation for characteristics entity
     */
    @Autowired
    CharacteristicsServiceImpl characteristicService;

    /**
     * <p>
     * This method is used for save a new characteristic in the data base for characteristic table
     * </p>
     * @param CharacteristicDTO taken from a client
     * @return response entity with sucessfully message
     * @since 1.0
     */
    @PostMapping("/save")
    public ResponseEntity<?> saveCharacteristic(@RequestBody CharacteristicDTO characteristicDTO){
        characteristicService.save(characteristicDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("Characteristic " + characteristicDTO.getName() + " created successfully");
    }

    /**
     * <p>
     * This method is used for search all characteristics in the data base for characteristic table
     * </p>
     * @param none
     * @return response entity with a array with the lists of characteristics
     * @since 1.0
     */
    @GetMapping("/all")
    public Collection<CharacteristicDTO> allCharacteristics(){
        return characteristicService.listAll();
    }

    /**
     * <p>
     * This method is used for search a characteristic by id in the data base for characteristic table
     * </p>
     * @param Long id of the characteristic
     * @return response entity with a characteristic
     * @since 1.0
     */
    @GetMapping("/{id}")
    public CharacteristicDTO findById(@PathVariable Long id) throws ResourceNotFoundException {
        return characteristicService.findById(id);
    }

    /**
     * <p>
     * This method is used for update a new characteristic in the data base for characteristic table
     * </p>
     * @param characteristicDTO taken from a client
     * @return response entity with sucessfully message
     * @since 1.0
     */
    @PutMapping("/update")
    public ResponseEntity<?> updateCharacteristic(@RequestBody CharacteristicDTO characteristicDTO) throws ResourceNotFoundException {
        characteristicService.update(characteristicDTO);
        return ResponseEntity.status(HttpStatus.OK).body("Characteristic " + characteristicDTO.getName() + "updated");
    }

    /**
     * <p>
     * This method is used for delete a characteristic by id in the data base for characteristic table
     * </p>
     * @param Long id of the characteristic
     * @return response entity with sucessfully message
     * @since 1.0
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCharacteristic(@PathVariable Long id) throws ResourceNotFoundException{
        characteristicService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Characteristic deleted");
    }
}
