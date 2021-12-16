package grupo6.backendHotel.persistence.repository;


import grupo6.backendHotel.persistence.entities.Image;
import grupo6.backendHotel.persistence.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

/**
 * Interface for the image repository with JPA
 *
 * @author Grupo - 6
 *
 */
@Repository
public interface IImageRepository extends JpaRepository<Image, Long> {

    @Query("SELECT i FROM Image i WHERE i.product.id=?1 ")
    Optional<Set<Image>> findAllByProductId(Long id);

}
