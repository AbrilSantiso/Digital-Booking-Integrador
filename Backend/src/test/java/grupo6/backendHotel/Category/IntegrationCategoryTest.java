package grupo6.backendHotel.Category;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo6.backendHotel.model.CategoryDTO;
import grupo6.backendHotel.service.Impl.CategoriesServiceImpl;
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
public class IntegrationCategoryTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private CategoriesServiceImpl categoriesService;
    @Autowired
    ObjectMapper mapper;

    public void loadDataSet() {
        categoriesService.save(new CategoryDTO("Hoteles", "Un hotel es un establecimiento que se dedica al alojamiento de huéspedes o viajeros.", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/8f/13/1b/photo5jpg.jpg?w=1400&h=-1&s=1"));
        categoriesService.save(new CategoryDTO("Hostels", "Se trata de un albergue juvenil que suele caracterizarse por el bajo precio", "https://a.hwstatic.com/image/upload/f_auto,q_auto,t_80,c_fill,g_north/v1/propertyimages/3/33901/qqlubmapoye69fy6hohu"));
        categoriesService.save(new CategoryDTO("Departamentos", "Un apartamento, también denominado departamento o piso", "https://cf.bstatic.com/xdata/images/hotel/max1280x900/171388681.jpg?k=e08040f7d5d95c6c6cc7cebb5005dcd5ef786aeab003a0894468710e4430fa14&o=&hp=1"));
        categoriesService.save(new CategoryDTO("Bed and breakfast", "Se trata de un alojamiento sencillo en una casa con menos de diez habitaciones disponibles", "https://content.r9cdn.net/rimg/himg/f7/01/69/hotelsdotcom-635805088-8f1cc2b9_w-623168.jpg?width=330&height=170&crop=true"));
    }

    @SneakyThrows
    @Test
    public void findCategoryById(){
        this.loadDataSet();
        MvcResult response = mockMvc.perform(MockMvcRequestBuilders.get("/categories/{id}", 1).accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

        Assert.assertFalse(response.getResponse().getContentAsString().isEmpty());
    }

    @SneakyThrows
    @Test
    public void saveCategory() {
        loadDataSet();
        MvcResult response = this.mockMvc.perform(MockMvcRequestBuilders.post("/categories")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(mapper.writeValueAsString(categoriesService.findById(1L))))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

        Assert.assertFalse(response.getResponse().getContentAsString().isEmpty());
    }
}
