package grupo6.backendHotel.persistence.repository;

import grupo6.backendHotel.persistence.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface for the category repository with JPA
 *
 * @author Grupo - 6
 *
 */
@Repository
public interface ICategoryRepository extends JpaRepository<Category, Long> {


}
