package grupo6.backendHotel.service.Impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo6.backendHotel.exceptions.ResourceNotFoundException;
import grupo6.backendHotel.model.ReservationDTO;
import grupo6.backendHotel.persistence.entities.Product;
import grupo6.backendHotel.persistence.entities.Reservation;
import grupo6.backendHotel.persistence.repository.IProductRepository;
import grupo6.backendHotel.persistence.repository.IReservationRepository;
import grupo6.backendHotel.service.HotelService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.ResourceAccessException;

import java.util.*;

/**
 * ReservationServiceImpl class is used for request data to the data base implementation with different actions of the
 * CRUD (create, read, update or delete) or others
 *
 * @author Grupo - 6
 *
 */
@Service
@Transactional
public class ReservationsServiceImpl implements HotelService<ReservationDTO> {

    /**
     * Private variable logger for use logger tools in the application
     */
    private static final Logger logger = Logger.getLogger(ProductsServiceImpl.class);

    /**
     * Injection of the class reservationRepository for use JPA operations
     */
    @Autowired
    IReservationRepository reservationRepository;

    @Autowired
    ProductsServiceImpl productsService;

    @Autowired
    UsersServiceImpl userService;

    /**
     * Injection of the class mapper for conversion between DTO's and entities
     */
    ObjectMapper mapper = new ObjectMapper();

    /**
     * <p>
     * This method is used for save a new reservation in the data base for reservations table
     * </p>
     * @param reservationDTO taken from a client
     * @return void
     * @since 1.0
     */
    @Override
    public void save(ReservationDTO reservationDTO) {
        Reservation reservation = mapper.convertValue(reservationDTO, Reservation.class);
        logger.info("It is requested to save a reservation " + reservation.toString());
        reservationRepository.save(reservation);
        logger.info("It is saved the reservation " + reservation.toString());
    }

    /**
     * <p>
     * This method is used for search a reservation by id in the data base for reservations table
     * </p>
     * @param id of the reservation
     * @return response entity with a reservation
     * @since 1.0
     */
    @Override
    public ReservationDTO findById(Long id) {
        ReservationDTO reservationDTO = null;
        logger.info("It is request to search a reservation by id: " + id);
        Optional<Reservation> reservation = reservationRepository.findById(id);
        if(reservation.isPresent()){
            reservationDTO = new ReservationDTO(reservation.get());
            logger.info("Reservation by id " + id + " found");
        }
        return reservationDTO;
    }

    /**
     * <p>
     * This method is used for search all reservations in the data base for reservation table
     * </p>
     * @param
     * @return response entity with an array with the lists of reservation
     * @since 1.0
     */
    @Override
    public Collection<ReservationDTO> listAll() {
        logger.info("It is request to search all reservation");
        List<Reservation> reservations = reservationRepository.findAll();
        Set<ReservationDTO> reservationDTOSet = new HashSet<>();
        for(Reservation reservation : reservations){
            reservationDTOSet.add(new ReservationDTO(reservation));
        }
        logger.info("All reservations found");
        return reservationDTOSet;
    }

    /**
     * <p>
     * This method is used for delete a reservation by id in the data base for reservation table
     * </p>
     * @param Long id of the reserve
     * @return response entity with successfully message
     * @error error with ResourceAccessException with message "Reservation does not exist"
     * @since 1.0
     */
    @Override
    public void deleteById(Long id) {
        logger.info("It is request to delete a reservation by id");
        if(findById(id) == null){
            logger.error("The request does not have an id");
            throw new ResourceAccessException("Reservation does not exist");
        }
        reservationRepository.deleteById(id);
        logger.info("The reservation with " + id + " was deleted");
    }

    /**
     * <p>
     * This method is used for update a reservation by id in the data base for reservation table
     * </p>
     * @param id of the reservation
     * @return response entity with successfully message
     * @error error with ResourceAccessException with message "Reservation does not exist"
     * @since 1.0
     */
    @Override
    public void update(ReservationDTO reservationDTO) throws ResourceNotFoundException {
        logger.info("It is request to update a reservation");
        if(findById(reservationDTO.getId()) == null){
            logger.error("The request does not exists");
            throw new ResourceNotFoundException("Reservation does not exist");
        }
        Reservation reservation = mapper.convertValue(reservationDTO, Reservation.class);
        logger.info("The reservation with " + reservation.toString() + " was deleted");
        reservationRepository.save(reservation);
    }
}
