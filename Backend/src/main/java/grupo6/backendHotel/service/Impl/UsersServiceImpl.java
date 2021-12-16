package grupo6.backendHotel.service.Impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo6.backendHotel.exceptions.ResourceNotFoundException;
import grupo6.backendHotel.exceptions.ResourseAlreadyExistsException;
import grupo6.backendHotel.model.ProductDTO;
import grupo6.backendHotel.model.UserDTO;
import grupo6.backendHotel.persistence.entities.Product;
import grupo6.backendHotel.persistence.entities.Rol;
import grupo6.backendHotel.persistence.entities.User;
import grupo6.backendHotel.persistence.repository.IProductRepository;
import grupo6.backendHotel.persistence.repository.IUserRepository;
import grupo6.backendHotel.service.HotelService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@Transactional
public class UsersServiceImpl implements UserDetailsService, HotelService<UserDTO> {

    private static final Logger logger = Logger.getLogger(UsersServiceImpl.class);

    /**
     * Injection of the class categoryRepository for use JPA operations
     */
    @Autowired
    IUserRepository userRepository;

    @Autowired
    IProductRepository productRepository;

    /**
     * Injection of the class mapper for convertion between DTO's and entities
     */

    ObjectMapper mapper = new ObjectMapper();

    @Autowired
    private PasswordEncoder bCryptPasswordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Optional<User> user = userRepository.getUserByName(email);

        if (user.isEmpty()) {
            throw new UsernameNotFoundException("User not found with username: " + email);
        }
        return new org.springframework.security.core.userdetails.User(user.get().getEmail(), user.get().getPassword(),
                new ArrayList<>());
    }

    public UserDTO loadUserDTOByName(String email) throws UsernameNotFoundException {
        Optional<User> user = userRepository.getUserByName(email);
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.get().getId());
        userDTO.setName(user.get().getName());
        userDTO.setLastName(user.get().getLastName());
        userDTO.setEmail(user.get().getEmail());
        return userDTO;
    };

    @Override
    public void save(UserDTO userDTO) throws ResourseAlreadyExistsException {
        if(userRepository.getUserByName(userDTO.getEmail()).isEmpty()) {
            userDTO.setPassword(bCryptPasswordEncoder.encode(userDTO.getPassword()));
            User user = mapper.convertValue(userDTO, User.class);

            Set<Rol> roles = new HashSet<>();
            roles.add(new Rol(2L,"user"));
            user.setRoles(roles);

            logger.info("it is requested to save a user " + user.toString());
            userRepository.save(user);
            logger.info("The user " + user.toString() + "saved succesfully");
        } else {
            throw new ResourseAlreadyExistsException("An user already registered with email: " + userDTO.getEmail());
        }


    }

    @Override
    public UserDTO findById(Long id) throws ResourceNotFoundException{
        UserDTO userDTO = null;
        logger.info("It is request to search a product by id: " + id);
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty()) {
            throw new ResourceNotFoundException("Product does not exist");
        }
        userDTO = new UserDTO(user.get());
        logger.info("Product by id " + id + " found");
        return userDTO;
    }


    public UserDTO findByIdNp(Long id) throws ResourceNotFoundException {
        UserDTO userDTO = null;
        logger.info("It is request to search a product by id: " + id);
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty()) {
            throw new ResourceNotFoundException("Product does not exist");
        }

        userDTO = new UserDTO();
        userDTO.setId(user.get().getId());
        userDTO.setName(user.get().getName());
        userDTO.setLastName(user.get().getLastName());
        userDTO.setEmail(user.get().getEmail());
        userDTO.setRoles(user.get().getRoles());
        userDTO.setReservations(user.get().getReservations());
        Set<ProductDTO> favoritesDTOS = new HashSet<>();
        for (Product product : user.get().getFavorites()) {
            favoritesDTOS.add(new ProductDTO(product));
        }
        userDTO.setFavorites(favoritesDTOS);

        logger.info("Product by id " + id + " found");
        return userDTO;

    }

    @Override
    public Collection<UserDTO> listAll() {
        return null;
    }

    @Override
    public void deleteById(Long id) {

    }

    @Override
    public void update(UserDTO userDTO) throws ResourceNotFoundException {
        logger.info("It is request to update a user");
        UserDTO userToUpdate = findById(userDTO.getId());

        if(userToUpdate == null){
            logger.error("The request does not exists");
            throw new ResourceNotFoundException("User does not exist");
        }
        if(userDTO.getName() == null){
            userDTO.setName(userToUpdate.getName());
        }
        if(userDTO.getLastName() == null){
            userDTO.setLastName(userToUpdate.getLastName());
        }
        if(userDTO.getEmail() == null){
            userDTO.setEmail(userToUpdate.getEmail());
        }
        if(userDTO.getPassword() == null){
            userDTO.setPassword(userToUpdate.getPassword());
        }
        if(userDTO.getRoles() == null){
            userDTO.setRoles(userToUpdate.getRoles());
        }
        if(userDTO.getReservations() == null){
            userDTO.setReservations(userToUpdate.getReservations());
        }
        if(userDTO.getFavorites() == null){
            userDTO.setFavorites(userToUpdate.getFavorites());
        }

        User user = mapper.convertValue(userDTO, User.class);

        Set<Product> userFavorites = new HashSet<>();
        for (Product product : user.getFavorites()){
            Optional<Product> favorite = productRepository.findById(product.getId());
            userFavorites.add(favorite.get());
        }

        Optional<User> userToSave = userRepository.findById(userDTO.getId());
        //Set attributes to change
        userToSave.get().setFavorites(userFavorites);

        userRepository.save(userToSave.get());
        logger.info("The user with " + user.toString() + " was updated");
    }

}
