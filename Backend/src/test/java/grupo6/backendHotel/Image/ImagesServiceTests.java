package grupo6.backendHotel.Image;

import grupo6.backendHotel.model.ImageDTO;
import grupo6.backendHotel.service.Impl.ImagesServiceImpl;
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
public class ImagesServiceTests {

    @Autowired
    private ImagesServiceImpl imagesService;


    public void loadDataSet() {

        //imagesService.save(new ImageDTO("Categoria-hoteles-portada", "http://expertoenhoteles.com/wp-content/uploads/2020/01/awasiiguazuarg-1500x844.jpg"));
        //imagesService.save(new ImageDTO("Categoria-hostels-portada", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/0b/84/03/la-tosca-hostel.jpg?w=1200&h=-1&s=1"));
        //imagesService.save(new ImageDTO("Categoria-departamentos-portada", "https://www.inmuebles24.com/noticias/wp-content/uploads/2020/01/departamentos-de-lujo-2-1024x674.jpeg"));
        //imagesService.save(new ImageDTO("Categoria-bed-and-breakfast-portada", "https://astelus.com/wp-content/viajes/alojarse-en-un-bed-and-breakfast-en-londres.jpg" ));

    }

    @SneakyThrows
    @Test
    public void addImageTest() {
        //this.loadDataSet();
        //imagesService.save(new ImageDTO("Categoria-bed-and-breakfast-portada2", "https://astelus.com/wp-content/viajes/alojarse-en-un-bed-and-breakfast-en-londress.jpg" ));
        //Assert.assertNotNull(imagesService.findById(5L));

    }

    @SneakyThrows
    @Test
    public void deleteImageTest() {
        //imagesService.deleteById(4L);
        //Assert.assertFalse((imagesService.findById(4L) != null));

    }

    @SneakyThrows
    @Test
    public void listAllTest() {
        //Collection<ImageDTO> images = imagesService.listAll();
        //Assert.assertEquals(4, images.size());
    }
}
