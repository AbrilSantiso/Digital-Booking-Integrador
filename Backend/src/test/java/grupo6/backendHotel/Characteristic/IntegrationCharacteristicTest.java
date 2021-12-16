package grupo6.backendHotel;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo6.backendHotel.model.CategoryDTO;
import grupo6.backendHotel.model.CharacteristicDTO;
import grupo6.backendHotel.service.Impl.CategoriesServiceImpl;
import grupo6.backendHotel.service.Impl.CharacteristicsServiceImpl;
import lombok.SneakyThrows;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class IntegrationCharacteristicTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private CharacteristicsServiceImpl characteristicsService;
    @Autowired
    ObjectMapper mapper;

    public void loadDataSet() {
        characteristicsService.save(new CharacteristicDTO("wifi", "simbolito de wifi"));
        characteristicsService.save(new CharacteristicDTO("piscina", "simbolito de piscina"));
        characteristicsService.save(new CharacteristicDTO("billar", "simbolito de billar"));
    }

    @SneakyThrows
    @Test
    public void findCharacteristicById(){
        this.loadDataSet();
        MvcResult response = mockMvc.perform(MockMvcRequestBuilders.get("/characteristics/{id}", 1).accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

        Assert.assertFalse(response.getResponse().getContentAsString().isEmpty());
    }

    @SneakyThrows
    @Test
    public void addCharacteristic() {
        loadDataSet();
        MvcResult response = this.mockMvc.perform(MockMvcRequestBuilders.post("/characteristics")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(characteristicsService.findById(1L))))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

        Assert.assertFalse(response.getResponse().getContentAsString().isEmpty());
    }
}
