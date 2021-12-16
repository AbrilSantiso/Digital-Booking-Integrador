package grupo6.backendHotel.City;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo6.backendHotel.model.CityDTO;
import grupo6.backendHotel.service.Impl.CitiesServiceImpl;
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
public class IntegrationCityTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private CitiesServiceImpl citiesService;
    @Autowired
    ObjectMapper mapper;

    public void loadDataSet() {
        citiesService.save(new CityDTO("Capital Federal", "Argentina"));
        citiesService.save(new CityDTO("Mendoza", "Argentina"));
        citiesService.save(new CityDTO("Bariloche", "Argentina"));
        citiesService.save(new CityDTO("Medellín", "Colombia"));
    }

    @SneakyThrows
    @Test
    public void findById(){
        this.loadDataSet();
        MvcResult response = mockMvc.perform(MockMvcRequestBuilders.get("/cities/{id}", 1).accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

        Assert.assertFalse(response.getResponse().getContentAsString().isEmpty());
    }

    @SneakyThrows
    @Test
    public void saveCity() {
        loadDataSet();
        MvcResult response = this.mockMvc.perform(MockMvcRequestBuilders.post("/cities")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(citiesService.findById(1L))))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

        Assert.assertFalse(response.getResponse().getContentAsString().isEmpty());
    }
}
