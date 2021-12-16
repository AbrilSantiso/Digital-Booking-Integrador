package grupo6.backendHotel.service;

import grupo6.backendHotel.exceptions.ResourceNotFoundException;
import grupo6.backendHotel.exceptions.ResourseAlreadyExistsException;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public interface HotelService<T> {
    void save(T t) throws ResourseAlreadyExistsException;

    T findById(Long id) throws ResourceNotFoundException;

    Collection<T> listAll();

    void deleteById(Long id) throws ResourceNotFoundException;

    void update(T t) throws ResourceNotFoundException;
}
