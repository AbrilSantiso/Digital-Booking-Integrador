package grupo6.backendHotel.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalTimeSerializer;
import grupo6.backendHotel.persistence.entities.Reservation;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import java.time.LocalDate;
import java.time.LocalTime;

/**
 * Reservation DTO for conversion between entities and DTO for communication aspects for architecture layers
 *
 * @author Grupo - 6
 *
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ReservationDTO {
    /**
     * Private variable long for identification of reservation
     */
    private Long id;
    /**
     * Private variable LocalTime for hour of the reservation
     */
    @JsonDeserialize(using = LocalTimeDeserializer.class)
    @JsonSerialize(using = LocalTimeSerializer.class)
    private LocalTime hour;
    /**
     * Private variable LocalDate for start date of the reservation
     */
    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonSerialize(using = LocalDateSerializer.class)
    private LocalDate startDate;
    /**
     * Private variable LocalDate for end date of the reservation
     */
    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonSerialize(using = LocalDateSerializer.class)
    private LocalDate endDate;
    /**
     * Private variable type products for products of the reservation
     * Relationship ManyToOne
     */
    @JsonIgnoreProperties({"description", "category", "characteristics", "images", "city", "reservations"})
    private ProductDTO product;
    /**
     * Private variable type user for users in the reservations
     * Relationship ManyToOne
     */
    @JsonIgnoreProperties({"reservations", "name", "lastName", "password", "roles"})
    private UserDTO user;
    /**
     * <p>
     * This method is used for build a object ReservationDTO with entity attributes
     * </p>
     *
     * @param LocalTime hour of the reservation
     * @param LocalDate start date of the reservation
     * @param LocalDate end date of the reservation
     * @param Type Products for the product´s reservation
     * @param Type Users for the user´s reservation
     * @return void
     * @since 1.0
     */
    public ReservationDTO(){
    }

    public ReservationDTO(LocalTime hour, LocalDate startDate, LocalDate endDate, ProductDTO product, UserDTO user ){
        this.hour = hour;
        this.startDate = startDate;
        this.endDate = endDate;
        this.product = product;
        this.user = user;
    }

    public ReservationDTO(Reservation reservation) {
        id = reservation.getId();
        hour = reservation.getHour();
        startDate = reservation.getStartDate();
        endDate = reservation.getEndDate();
        product = new ProductDTO(reservation.getProduct());
        user = new UserDTO(reservation.getUser()) ;
    }

    public Reservation toEntity(){
        Reservation entity = new Reservation();
        entity.setId(id);
        entity.setHour(hour);
        entity.setStartDate(startDate);
        entity.setEndDate(endDate);
        entity.setProduct(product.toEntity());
        entity.setUser(user.toEntity());
        return entity;
    }
}