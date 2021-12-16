package grupo6.backendHotel.Product;

import grupo6.backendHotel.model.ProductDTO;
import grupo6.backendHotel.service.Impl.ProductsServiceImpl;
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
public class ProductsServiceTests {

    @Autowired
    private ProductsServiceImpl productsService;

    @SneakyThrows
    @Test
    public void addProductTest(){
        //productsService.save(new ProductDTO("Hostal Maranatha", "El albergue Hostal Maranatha está situado en el centro de la ciudad de Santa Marta, a 200 metros de la playa, el Museo del Oro y la catedral"));
        //productsService.save(new ProductDTO("Milhouse Hostel Avenue","Milhouse Avenue es un gran sitio para alojarse si no sabes qué ver en Buenos Aires ya que definitivamente es un albergue social."));
        //Assert.assertNotNull((productsService.findById(1L)));
    }

    @SneakyThrows
    @Test
    public void deleteProductTest(){
        //productsService.deleteById(2L);
       // Assert.assertFalse(productsService.findById(2L) != null);
    }

    @SneakyThrows
    @Test
    public void listAllProductsTest(){
        //Collection<ProductDTO> products = productsService.listAll();
        //Assert.assertEquals(1, products.size());
    }
}
