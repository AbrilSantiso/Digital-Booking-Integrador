package grupo6.backendHotel.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import grupo6.backendHotel.persistence.entities.*;
import grupo6.backendHotel.persistence.repository.IUserRepository;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@JsonIgnoreProperties(ignoreUnknown = true)

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserDTO {

    private Long id;

    private String name;

    private String lastName;

    private String email;

    private String password;

    @JsonIgnoreProperties("users")
    private Set<Rol> roles;

    @JsonIgnoreProperties({"user", "roles", "password"})
    private Set<Reservation> reservations;

    @JsonIgnoreProperties({"reservations", "reviews"})
    private Set<ProductDTO> favorites;


    public UserDTO(String name, String lastName, String email, String password, Set<Rol> roles, Set<Reservation> reservations, Set<ProductDTO> favorites) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.roles = roles;
        this.reservations = reservations;
    }

    public UserDTO(String name, String lastName, String email, String password) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    public UserDTO(User user) {
        id = user.getId();
        name = user.getName();
        lastName = user.getLastName();
        email = user.getEmail();
        password = user.getPassword();
        roles = user.getRoles();
        reservations = user.getReservations();
        Set<ProductDTO> favoritesDTOS = new HashSet<>();
        for (Product product : user.getFavorites()){
            favoritesDTOS.add(new ProductDTO(product));
        }
        favorites = favoritesDTOS;
    }

    public User toEntity() {
        User entity = new User();
        entity.setId(id);
        entity.setName(name);
        entity.setLastName(lastName);
        entity.setEmail(email);
        entity.setPassword(password);
        entity.setRoles(roles);
        return entity;
    }
}

