package grupo6.backendHotel.persistence.repository;

import grupo6.backendHotel.persistence.entities.Product;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


/**
 * Interface for the product repository with JPA
 *
 * @author Grupo - 6
 *
 */
@Repository
public interface IProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE p.category.id=?1 ")
    Optional<List<Product>> findAllByCategoryId(Long id);

    @Query("SELECT p FROM Product p WHERE p.city.id=?1 ")
    Optional<List<Product>> findAllByCityId(Long id);

    @Query("SELECT p FROM Product p WHERE p.city.name=?1 ")
    Optional<List<Product>> findAllByCityName(String name);
}

