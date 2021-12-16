package grupo6.backendHotel.persistence.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id", scope = Rol.class)
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name="roles")
public class Rol implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50)
    private String name;

    @ManyToMany(mappedBy = "roles")
    @JsonIgnoreProperties({"roles", "reservations"})
    private Set<User> users = new HashSet<>();

    public Rol(String name) {
        this.name = name;
    }

    public Rol(Long id, String name) {
        this.id = id;
        this.name = name;
    }


}
