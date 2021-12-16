package grupo6.backendHotel.Product;

import com.fasterxml.jackson.databind.ObjectMapper;
import grupo6.backendHotel.model.ProductDTO;
import grupo6.backendHotel.service.Impl.ProductsServiceImpl;
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
public class IntegrationProductTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ProductsServiceImpl productsService;
    @Autowired
    ObjectMapper mapper;

    public void loadDataSet(){
        //productsService.save(new ProductDTO("Park Hyatt Mendoza", "Park Hyatt Mendoza, con su magnífica fachada colonial del siglo XIX, es un prestigioso hotel cinco estrellas."));
        //productsService.save(new ProductDTO("NH Collection Royal", "Este exclusivo hotel está situado en pleno Teleport Business Park, rodeado de restaurantes, a 4km de Parque 93."));
        //productsService.save(new ProductDTO("Milhouse Hostel Avenue","Milhouse Avenue es un gran sitio para alojarse si no sabes qué ver en Buenos Aires ya que definitivamente es un albergue social."));
    }

    @SneakyThrows
    @Test
    public void listProducts(){
        //this.loadDataSet();
        //MvcResult response = mockMvc.perform(MockMvcRequestBuilders.get("/products/{id}", 1).accept(MediaType.APPLICATION_JSON))
        //        .andDo(MockMvcResultHandlers.print())
        //        .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

       // Assert.assertFalse(response.getResponse().getContentAsString().isEmpty());
    }

    @SneakyThrows
    @Test
    public void registrarProducts() {
        //loadDataSet();
        //MvcResult response = this.mockMvc.perform(MockMvcRequestBuilders.post("/products")
        //        .contentType(MediaType.APPLICATION_JSON)
        //        .content(mapper.writeValueAsString(productsService.findById(1L))))
        //        .andDo(MockMvcResultHandlers.print())
        //        .andExpect(MockMvcResultMatchers.status().isOk()).andReturn();

        //Assert.assertFalse(response.getResponse().getContentAsString().isEmpty());
    }
}
