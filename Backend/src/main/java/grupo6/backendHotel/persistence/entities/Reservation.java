package grupo6.backendHotel.persistence.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalTimeSerializer;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id", scope = Reservation.class)
@Getter
@Setter
@ToString
@Table(name="reservations")
public class Reservation implements Serializable {

    /**
     * Private variable long for identification of reservation, identifier for unique key of the table, generatevalue for sequences of the primary key
     * and sequence generator for sequence and initial count
     */
    @Id
    @GeneratedValue(generator = "reservationSequence", strategy = GenerationType.IDENTITY)
    private Long id;
    /**
     * Private variable string for start hour of the reservation
     */
    @Column
    @JsonDeserialize(using = LocalTimeDeserializer.class)
    @JsonSerialize(using = LocalTimeSerializer.class)
    private LocalTime hour;
    /**
     * Private variable LocalDate for start date of the reservation
     */
    @Column(name = "start_date")
    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonSerialize(using = LocalDateSerializer.class)
    private LocalDate startDate;
    /**
     * Private variable LocalDate for end date of the reservation
     */
    @Column(name = "end_date")
    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonSerialize(using = LocalDateSerializer.class)
    private LocalDate endDate;

    /**
     * Private variable type products for products of the reservation
     * Relationship ManyToOne
     */
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "product_id", nullable = false)
    @JsonIgnoreProperties({"description", "category", "characteristics", "images", "city", "reservations"})
    private Product product;

    /**
     * Private variable type user for users in the reservations
     * Relationship ManyToOne
     */
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnoreProperties({"reservations","name", "lastName", "password", "roles"})
    private User user;

    /**
     * <p>
     * This method is used for build a object Reservation without attributes
     * </p>
     *
     * @param None
     * @return void
     * @since 1.0
     */
    public Reservation() {
    }

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
    public Reservation(LocalTime hour, LocalDate startDate, LocalDate endDate, Product product, User user) {
        this.hour = hour;
        this.startDate = startDate;
        this.endDate = endDate;
        this.product = product;
        this.user = user;
    }

    /**
     * <p>
     * This method is used for build a object Product with entity attributes
     * </p>
     *
     * @param id     id of the product
     * @param LocalTime hour of the reservation
     * @param LocalDate start date of the reservation
     * @param LocalDate end date of the reservation
     * @param Type Products for the product´s reservation
     * @param Type Users for the user´s reservation
     * @return void
     * @since 1.0
     */
    public Reservation(Long id, LocalTime hour, LocalDate startDate, LocalDate endDate, Product product, User user) {
        this.id = id;
        this.hour = hour;
        this.startDate = startDate;
        this.endDate = endDate;
        this.product = product;
        this.user = user;
    }
}
