package grupo6.backendHotel.persistence.repository;

import grupo6.backendHotel.persistence.entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IReservationRepository extends JpaRepository<Reservation, Long> {

}
