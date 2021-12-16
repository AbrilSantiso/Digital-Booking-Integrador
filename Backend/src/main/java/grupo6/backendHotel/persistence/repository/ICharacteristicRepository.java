package grupo6.backendHotel.persistence.repository;

import grupo6.backendHotel.persistence.entities.Characteristic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface for the Characteristic repository with JPA
 *
 * @author Grupo - 6
 *
 */
@Repository
public interface ICharacteristicRepository extends JpaRepository<Characteristic, Long> {


}
