package grupo6.backendHotel.City;

import grupo6.backendHotel.model.CityDTO;
import grupo6.backendHotel.service.Impl.CitiesServiceImpl;
import lombok.SneakyThrows;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Collection;


@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
public class CitiesServiceTests {

    @Autowired
    private CitiesServiceImpl citiesService;


    public void loadDataSet() {
        citiesService.save(new CityDTO("Mendoza", "Argentina"));
        citiesService.save(new CityDTO("Capital Federal", "Argentina"));
        citiesService.save(new CityDTO("Bogotá", "Colombia"));
        citiesService.save(new CityDTO("Bariloche", "Argentina"));
    }

    @SneakyThrows
    @Test
    public void addCityTest() {
        this.loadDataSet();
        citiesService.save(new CityDTO("Iguazú", "Argentina"));
        Assert.assertNotNull(citiesService.findById(5L));
    }

    @SneakyThrows
    @Test
    public void deleteCityTest() {
        citiesService.deleteById(4L);
        Assert.assertFalse((citiesService.findById(4L) != null));
    }

    @SneakyThrows
    @Test
    public void listAllTest() {
        Collection<CityDTO> cities = citiesService.listAll();
        Assert.assertEquals(4, cities.size());
    }
}
