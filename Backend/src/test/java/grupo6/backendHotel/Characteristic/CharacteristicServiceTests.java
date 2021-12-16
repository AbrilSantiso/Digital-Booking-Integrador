package grupo6.backendHotel.Characteristic;

import grupo6.backendHotel.model.CharacteristicDTO;
import grupo6.backendHotel.service.Impl.CharacteristicsServiceImpl;
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
import java.util.Collections;


@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
public class CharacteristicServiceTests {

    @Autowired
    private CharacteristicsServiceImpl characteristicsService;


    public void loadDataSet() {
        characteristicsService.save(new CharacteristicDTO("wifi", "FaWifi"));
        characteristicsService.save(new CharacteristicDTO("swimmer", "FaSwimmer"));
        characteristicsService.save(new CharacteristicDTO("coffe", "FaCoffee"));
        characteristicsService.save(new CharacteristicDTO("utensils","FaUtensils"));
    }

    @SneakyThrows
    @Test
    public void addCharacteristicTest() {
        //this.loadDataSet();
        characteristicsService.save(new CharacteristicDTO("snowflake","FaSnowflake"));
        Assert.assertNotNull(characteristicsService.findById(1L));
    }

    @SneakyThrows
    @Test
    public void deleteCharacteristicTest() {
        characteristicsService.findById(2L);
        Assert.assertFalse((characteristicsService.findById(2L) != null));

    }

    @SneakyThrows
    @Test
    public void listAllTest() {
        Collection<CharacteristicDTO> characteristics = characteristicsService.listAll();
        Assert.assertEquals(1, characteristics.size());
    }
}
