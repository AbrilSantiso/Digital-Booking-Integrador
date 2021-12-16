package grupo6.backendHotel.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import grupo6.backendHotel.persistence.entities.Rol;
import grupo6.backendHotel.persistence.entities.User;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@JsonIgnoreProperties(ignoreUnknown = true)

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class RolDTO {

    private Long id;

    private String name;

    @JsonIgnoreProperties({"roles", "reservations"})
    private Set<User> users;


    public RolDTO(Rol rol) {
        id = rol.getId();
        name = rol.getName();
        users = rol.getUsers();
        //Set<UserDTO> userDTOS = new HashSet<>();
        //for (User user : rol.getUsers()){
         //   userDTOS.add(new UserDTO(user));
        //}
        //users = userDTOS;
    }

    public Rol toEntity() {
        Rol entity = new Rol();
        entity.setId(id);
        entity.setName(name);
        entity.setUsers(users);
        return entity;
    }

}
