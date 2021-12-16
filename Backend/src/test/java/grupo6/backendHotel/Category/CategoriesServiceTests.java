package grupo6.backendHotel.Category;

import grupo6.backendHotel.model.CategoryDTO;
import grupo6.backendHotel.service.Impl.CategoriesServiceImpl;
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
public class CategoriesServiceTests {

    @Autowired
    private CategoriesServiceImpl categoriesService;


    public void loadDataSet() {
        categoriesService.save(new CategoryDTO("Hoteles", "Un hotel es un establecimiento que se dedica al alojamiento de huéspedes o viajeros. El término proviene del vocablo francés hôtel, que hace referencia a una “casa adosada", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/8f/13/1b/photo5jpg.jpg?w=1400&h=-1&s=1"));
        categoriesService.save(new CategoryDTO("Hostels", "Se trata de un albergue juvenil que suele caracterizarse por el bajo precio de las habitaciones, camas o literas y por promover el intercambio cultural y social entre los huéspedes.", "https://a.hwstatic.com/image/upload/f_auto,q_auto,t_80,c_fill,g_north/v1/propertyimages/3/33901/qqlubmapoye69fy6hohu"));
        categoriesService.save(new CategoryDTO("Departamentos", "Un apartamento, también denominado departamento o piso, es una unidad de vivienda que comprende una o más habitaciones diseñadas para proporcionar instalaciones completas para un individuo o una pequeña familia.", "https://cf.bstatic.com/xdata/images/hotel/max1280x900/171388681.jpg?k=e08040f7d5d95c6c6cc7cebb5005dcd5ef786aeab003a0894468710e4430fa14&o=&hp=1"));
        categoriesService.save(new CategoryDTO("Bed and breakfast", "Se trata de un alojamiento sencillo en una casa con menos de diez habitaciones disponibles, que ha sido restaurada o acondicionada para estos efectos.", "https://content.r9cdn.net/rimg/himg/f7/01/69/hotelsdotcom-635805088-8f1cc2b9_w-623168.jpg?width=330&height=170&crop=true"));
    }

    @SneakyThrows
    @Test
    public void addCategoryTest() {
        this.loadDataSet();
        categoriesService.save(new CategoryDTO("Beach Resorts", "En muchos casos, se trata de hoteles todo incluido con ubicación junto al mar y enfocados en ofrecer opciones de ocio y relajación.", "https://www.google.com/url?sa=i&url=https%3A%2F%2"));
        Assert.assertNotNull(categoriesService.findById(5L));
    }

    @SneakyThrows
    @Test
    public void deleteCategoryTest() {
        categoriesService.deleteById(4L);
        Assert.assertFalse((categoriesService.findById(4L) != null));

    }

    @SneakyThrows
    @Test
    public void listAllTest() {
        Collection<CategoryDTO> categories = categoriesService.listAll();
        Assert.assertEquals(4, categories.size());
    }
}
