package grupo6.backendHotel.controller;

import grupo6.backendHotel.exceptions.ResourceNotFoundException;
import grupo6.backendHotel.model.ReservationDTO;
import grupo6.backendHotel.service.Impl.ReservationsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * Product controller is used for expose entry points to different services of product entity
 *
 * @author Grupo - 6
 *
 */
@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT}, allowedHeaders = "*")
@RequestMapping("/reservations")
public class ReservationController {

    /**
     * The service implementation for reservation entity
     */
    @Autowired
    ReservationsServiceImpl reservationService;

    /**
     * <p>
     * This method is used for save a new reservation in the data base for reservation table
     * </p>
     * @param reservationDTO taken from a client
     * @return response entity with successfully message
     * @since 1.0
     */
    @PostMapping("/save")
    public ResponseEntity<?> saveReservation(@RequestBody ReservationDTO reservationDTO){
        reservationService.save(reservationDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body("Reservation  " + reservationDTO.getId() + " created successfully");
    }

    /**
     * <p>
     * This method is used for search all reservation in the data base for reservation table
     * </p>
     * @return response entity with a array with the lists of reservations
     * @since 1.0
     */
    @GetMapping("/all")
    public Collection<ReservationDTO> allReservation(){
        return reservationService.listAll();
    }

    /**
     * <p>
     * This method is used for search a reservation by id in the data base for reservation table
     * </p>
     * @param  id of the reservation
     * @return response entity with a reservation
     * @since 1.0
     */
    @GetMapping("/{id}")
    public ReservationDTO findById(@PathVariable Long id) {
        return reservationService.findById(id);
    }

    /**
     * <p>
     * This method is used for update a new product in the data base for product table
     * </p>
     * @param reservationDTO taken from a client
     * @return response entity with successfully message
     * @since 1.0
     */
    @PutMapping("/update")
    public ResponseEntity<?> updateReservation(@RequestBody ReservationDTO reservationDTO) throws ResourceNotFoundException {
        reservationService.update(reservationDTO);
        return ResponseEntity.status(HttpStatus.OK).body("Reservation " + reservationDTO.getId() + "updated");
    }

    /**
     * <p>
     * This method is used for delete a reservation by id in the data base for reservation table
     * </p>
     * @param id of the reservation
     * @return response entity with successfully message
     * @since 1.0
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) throws ResourceNotFoundException{
        reservationService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Reservation deleted");
    }

}
