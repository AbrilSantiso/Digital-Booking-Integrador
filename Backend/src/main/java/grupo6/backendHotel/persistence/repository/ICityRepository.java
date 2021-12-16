package grupo6.backendHotel.persistence.repository;

import grupo6.backendHotel.persistence.entities.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface for the city repository with JPA
 *
 * @author Grupo - 6
 */
@Repository
public interface ICityRepository extends JpaRepository<City, Long> {

}
