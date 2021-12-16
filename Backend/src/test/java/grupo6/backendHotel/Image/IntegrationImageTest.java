package grupo6.backendHotel.Image;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo6.backendHotel.model.ImageDTO;
import grupo6.backendHotel.persistence.entities.Product;
import grupo6.backendHotel.service.Impl.ImagesServiceImpl;
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

import java.util.HashSet;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
@ActiveProfiles("test")
public class IntegrationImageTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ImagesServiceImpl imagesService;
    @Autowired
    ObjectMapper mapper;

    public void loadDataSet() {
        //imagesService.save(new ImageDTO("Categoria-hoteles-portada", "http://expertoenhoteles.com/wp-content/uploads/2020/01/awasiiguazuarg-1500x844.jpg"));
        //imagesService.save(new ImageDTO("Categoria-hostels-portada", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/0b/84/03/la-tosca-hostel.jpg?w=1200&h=-1&s=1"));
        //imagesService.save(new ImageDTO("Categoria-departamentos-portada", "https://www.inmuebles24.com/noticias/wp-content/uploads/2020/01/departamentos-de-lujo-2-1024x674.jpeg"));
        //imagesService.save(new ImageDTO("Categoria-bed-and-breakfast-portada", "https://astelus.com/wp-content/viajes/alojarse-en-un-bed-and-breakfast-en-londres.jpg" ));

    }

    @SneakyThrows
    @Test
    public void findById(){
        //this.loadDataSet();
        //MvcResult response = mockMvc.perform(MockMvcRequestBuilders.get("/images/{id}", 1).accept(MediaType.APPLICATION_JSON))
        //        .andDo(MockMvcResultHandlers.print())
        //        .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

        //Assert.assertFalse(response.getResponse().getContentAsString().isEmpty());
    }

    @SneakyThrows
    @Test
    public void addImage() {
        //loadDataSet();
        //MvcResult response = this.mockMvc.perform(MockMvcRequestBuilders.post("/images")
        //               .contentType(MediaType.APPLICATION_JSON)
        //                .content(mapper.writeValueAsString(imagesService.findById(1L))))
        //        .andDo(MockMvcResultHandlers.print())
        //        .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

        //Assert.assertFalse(response.getResponse().getContentAsString().isEmpty());
    }
}
