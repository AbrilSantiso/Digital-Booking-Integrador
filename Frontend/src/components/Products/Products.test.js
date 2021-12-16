import React from 'react'
import Enzyme from "enzyme";
import Products from './Products'

import Adapter from "enzyme-adapter-react-16"

const { shallow } = Enzyme;

Enzyme.configure({ adapter: new Adapter() })

describe('Test for Products', () => {
    test("renders correctly", () => {
        const products = 
            [
                {
                  "id": 1,
                  "category": "HOTEL",
                  "name": "Park Hyatt Mendoza",
                  "city": "Mendoza",
                  "country": "Argentina",
                  "description": "Con su magnífica fachada neoclásica del siglo XX y rodeado por imponentes paisajes de viñedos bajo la Cordillera de los Andes, se convierte en un destino ideal para viajes de placer y negocios.",
                  "notAvailable":[
                    "11-08-2021",
                    "11-09-2021",
                    "11-20-2021"],
                  "images": [
                    "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/06/1708/Park-Hyatt-Mendoza-P022-PISCINA.jpg/Park-Hyatt-Mendoza-P022-PISCINA.16x9.jpg",
                    "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/08/04/1505/Grand-Hyatt-Shenzhen-P245-In-room-Service.jpg/Grand-Hyatt-Shenzhen-P245-In-room-Service.4x3.jpg",
                    "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/02/05/1232/NASGH-P721-King-Room.jpg/NASGH-P721-King-Room.16x9.jpg",
                    "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/06/1708/Park-Hyatt-Mendoza-P078-Terrazas-de-la-Plaza.jpg/Park-Hyatt-Mendoza-P078-Terrazas-de-la-Plaza.16x9.jpg",
                    "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/02/06/1036/Park-Hyatt-Mendoza-P133-Whirlpool.jpg/Park-Hyatt-Mendoza-P133-Whirlpool.16x9.jpg",
                    "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/07/1032/Park-Hyatt-Mendoza-P062-Park-Twin.jpg/Park-Hyatt-Mendoza-P062-Park-Twin.16x9.jpg",
                    "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/06/1832/Park-Hyatt-Mendoza-P075-Park-King.jpg/Park-Hyatt-Mendoza-P075-Park-King.16x9.jpg",
                    "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/02/06/1036/Park-Hyatt-Mendoza-P124-Massage-Room.jpg/Park-Hyatt-Mendoza-P124-Massage-Room.16x9.jpg",
                    "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/02/06/1036/Park-Hyatt-Mendoza-P127-Steam-Room-Chromoterapy.jpg/Park-Hyatt-Mendoza-P127-Steam-Room-Chromoterapy.16x9.jpg",
                    "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/07/1032/Park-Hyatt-Mendoza-P063-Standard-Bathroom.jpg/Park-Hyatt-Mendoza-P063-Standard-Bathroom.16x9.jpg",
                    "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/07/07/1032/Park-Hyatt-Mendoza-P065-Gym.jpg/Park-Hyatt-Mendoza-P065-Gym.16x9.jpg"
                  ]
                },
                {
                  "id": 2,
                  "category": "HOTEL",
                  "name": "NH Collection Royal",
                  "city": "Bogotá",
                  "country": "Colombia",
                  "description": "Ubicado en el corazón del distrito de negocios y recientemente remodelado, combina el estilo contemporáneo y vanguardista con la tradición atemporal. Se encuentra cerca del casco antiguo de Usaquén, convirtiéndolo en un lugar ideal para centrarse en los negocios y después relajarse.",
                  "images": [
                    "https://img.nh-hotels.net/nh_collection_royal_teleport-056-rooms.jpg",
                    "https://img.nh-hotels.net/nh_collection_royal_teleport-013-hotel_facilities.jpg",
                    "https://img.nh-hotels.net/nh_content-037-rooms.jpg?output-quality=80&resize=500:*&composite-to=center,center|500:320",
                    "https://img.nh-hotels.net/nh_collection_royal_teleport-068-hotel_facilities.jpg",
                    "https://img.nh-hotels.net/nh_collection_palazzo_cinquecento-015-details.jpg",
                    "https://img.nh-hotels.net/nh_collection_royal_teleport-067-hotel_facilities.jpg",
                    "https://img.nh-hotels.net/nh_collection_royal_wtc_bogota-043-rooms.jpg",
                    "https://img.nh-hotels.net/nh_collection_royal_teleport-033-rooms.jpg",
                    "https://img.nh-hotels.net/nh_collection_royal_teleport-012-hotel_facilities.jpg",
                    "https://img.nh-hotels.net/nh_collection_royal_teleport-010-other_spaces.jpg",
                    "https://img.nh-hotels.net/nh_collection_royal_teleport-071-restaurant.jpg"
                  ]
                },
                {
                  "id": 3,
                  "category": "HOSTEL",
                  "name": "Milhouse Hostel Avenue",
                  "city": "Ciudad de Bs As",
                  "country": "Argentina",
                  "description": "Una casa reformada del siglo XIX que ofrece alojamiento económico, a solo 600 metros del Obelisco. Cuenta con cocina compartida y bar. Habitaciones amplias y luminosas con suelo de parquet y baño privado. Las habitaciones compartidas cuentan con baño compartido.",
                  "images": [
                    "https://milhousehostel.com/wp-content/uploads/2021/05/Guoli_21_02599C-min.jpg",
                    "https://milhousehostel.com/wp-content/uploads/2021/05/Guoli_21_02932C-min.jpg",
                    "https://milhousehostel.com/wp-content/uploads/2021/03/TWIN-TRIPLE-QUADRUPLE.jpg",
                    "https://milhousehostel.com/wp-content/uploads/2021/05/Guoli_21_02868C-min.jpg",
                    "https://milhousehostel.com/wp-content/uploads/2021/04/4b410dac13a0386662f44f7e8d4e980b.jpg",
                    "https://milhousehostel.com/wp-content/uploads/2021/05/Guoli_21_02893C-min.jpg",
                    "https://milhousehostel.com/wp-content/uploads/2021/05/Guoli_21_02982C-min.jpg",
                    "https://milhousehostel.com/wp-content/uploads/2021/03/CAMA-EN-HABITACION-COMPARTIDA.jpg",
                    "https://milhousehostel.com/wp-content/uploads/2021/03/Milhouse-Avenue-Bathroom-scaled.jpg"
                  ]
                },
                {
                  "id": 4,
                  "category": "HOSTEL",
                  "name": "Hostal Los Patios",
                  "city": "Medellín",
                  "country": "Colombia",
                  "description": "Elegante y exclusivo. Ubicado en un exuberante valle tropical, es una mezcla perfecta de vida urbana y áreas verdes. Habitaciones privadas con diferentes configuraciones y dormitorios para 4,6 y 8 personas, te garantizamos que encontrarás exactamente lo que buscas.",
                  "images": [
                    "https://a.hwstatic.com/image/upload/f_auto,q_auto,t_80,c_fill,g_north/v1/propertyimages/2/273991/fvm1mtzkgjdmorvax2gy",
                    "https://a.hwstatic.com/image/upload/f_auto,q_auto,t_80,c_fill,g_north/v1/propertyimages/2/273991/hzrjnjce7wultj1akibh",
                    "https://lospatioshb.com/los-patios-hostel-redefining-the-medellin-hostel-experience/4.jpg",
                    "https://fastly.4sqi.net/img/general/width960/2212796_v4tT22sumoE6CYJgJ_q4OB6bbLAxxQJD7Q58nxeUwPI.jpg",
                    "https://digitalbookinggruposseis.s3.amazonaws.com/products/product4/img4prod4.jpeg",
                    "https://a.hwstatic.com/image/upload/f_auto,q_auto,t_80,c_fill,g_north/v1/propertyimages/2/273991/uxuzispg1bfihalvy5oi",
                    "https://digitalbookinggruposseis.s3.amazonaws.com/products/product4/img5prod4.jpeg",
                    "https://fastly.4sqi.net/img/general/width960/29618580_X58rULmApOr3DXxZ6--lEX1rIuLn7g89ZDgG-BpVpfI.jpg",
                    "https://media-cdn.tripadvisor.com/media/photo-s/12/d0/7b/78/photo1jpg.jpg"
                  ]
                },
                {
                  "id": 5,
                  "category": "DEPARTAMENTO",
                  "name": "Soho Point Suites",
                  "city": "Ciudad de Bs As",
                  "country": "Argentina",
                  "description": "Amplios espacios decorados con gran estilo, únicos por su privacidad, equipamiento y servicios de inmejorable calidad. Espectacular terraza en esquina que ofrece una vista privilegiada y un ambiente soñado para relajarse, descansar, trabajar o compartir reuniones con amigos.",
                  "images": [
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/290690977.jpg?k=1ea9e1aa73da1ae1484c5e4e4bf180548a86335bf118dc28b9f17222856cc363&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/75552158.jpg?k=7374340ef4f2fb5cf3ebc973f19d0b582cbadbc1bafd4b51c0a5b7738a2f91e0&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/274836926.jpg?k=4cc6664b602b68ad06e2c9348fc22318e12f377a8dc07f5f12660825310b527f&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/274836925.jpg?k=e02b3c2cdc32c155ef6f3a6cb2fdb74ee27a39aed0becefdf33fe9aa765f5aeb&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/290689555.jpg?k=754b470ec24732ad9aafc034acecf62aa63aeedfa6f1fe1937c22a2c4bec5055&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/75744533.jpg?k=6b3e77615bf6af5152c2430bbcb3ce9a323dc02d1daa2a18b7168f38e9c614ff&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/274837254.jpg?k=bd3a8498caf3375dd62061152210cd74366ba8c773ed6674ce5ab2ddf99aafe5&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/75553047.jpg?k=d3054ad4919b3758889cb22b715e0d39f5d03ef460c9835e5d87d52c07d44db0&o=&hp=1"
                  ]
                },
                {
                  "id": 6,
                  "category": "DEPARTAMENTO",
                  "name": "Apart con balcón",
                  "city": "Ciudad de Bs As",
                  "country": "Argentina",
                  "description": "Ubicado en el 13° piso de torre Bellini, un ambiente luminoso, con diseño y confort. Cama Queen, pequeño living y escritorio con vista a las cúpulas de Buenos Aires. Un lugar versátil tanto para descansar como para quien tenga que estar en la ciudad por actividades laborales.",
                  "images": [
                    "https://a0.muscache.com/im/pictures/897f501f-5794-4507-bb8d-25f30b65d336.jpg",
                    "https://a0.muscache.com/im/pictures/5470cd88-8e35-4e69-b46a-e1e38bdb350b.jpg",
                    "https://a0.muscache.com/im/pictures/bdac20d6-8c4d-48c5-ad95-08ecdd4cf9ae.jpg",
                    "https://a0.muscache.com/im/pictures/182bdb39-1419-4fdc-a717-4049ac5cd3d0.jpg",
                    "https://a0.muscache.com/im/pictures/e8688778-5461-4467-86a2-91abddca3b90.jpg",
                    "https://a0.muscache.com/im/pictures/897f501f-5794-4507-bb8d-25f30b65d336.jpg",
                    "https://a0.muscache.com/im/pictures/0eae6ba1-fecf-474f-a036-069af6432daf.jpg",
                    "https://a0.muscache.com/im/pictures/c74c2ea6-75b5-4a77-9e92-5c2926bd5b27.jpg",
                    "https://a0.muscache.com/im/pictures/70ef5384-0c6b-47a1-9e93-300425cd1a78.jpg"
                  ]
                },
                {
                  "id": 7,
                  "category": "BED AND BREAKFAST",
                  "name": "Hostería Del Prado",
                  "city": "Bariloche",
                  "country": "Argentina",
                  "description": "Situada a 4,3 km del centro de Bariloche, en una mansión de estilo alpino rodeada de un hermoso jardín. A 800 metros del Lago Nahuel Huapi, ofrece habitaciones acogedoras con decoración rústica, TV de pantalla plana y baño privado con ducha.",
                  "images": [
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/f0/d1/df/del-prado-bed-and-breakfast.jpg?w=1000&h=-1&s=1",
                    "https://hosteriadelprado.com.ar/s/s109/fotos/foto-4-6.jpg",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/21370236.jpg?k=7a405c3c025104d23b7a8205b88ee4ec2619a1c0b5fa4fb224d81381896eea41&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/230067626.jpg?k=5227bf28ba31a0952dbd1a262d86c6cb276630f73f8a4824bfa208d3b8808e85&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/24768020.jpg?k=98435e47dffa17ecc1ff84ec11862385b46c0a810456ebef8822b31beb4d115e&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/230068937.jpg?k=83e20a5026957e6d394f67462291c3bc624ce5ca03e63a3219351e8585410f17&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/24768374.jpg?k=cba70032aa75ebb550dfc9cebe9bd13cc1e4669ef2b9e5427d9ec06fd6a48c12&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/24768139.jpg?k=5f806789e5b479bb4ce74599599bdeed029e0e059626f4c2ed3d2d7018226a0d&o=&hp=1"
                  ]
                },
                {
                  "id": 8,
                  "category": "BED AND BREAKFAST",
                  "name": "Avenida Tango",
                  "city": "Ciudad de Bs As",
                  "country": "Argentina",
                  "description": "Ubicado en el distrito de Monserrat, a pocos pasos del Palacio Barolo, cerca del Tortoni Cafe, el Obelisco y el teatro Colón. Variadas opciones gastronómicas y una excelente vida nocturna para disfrutar.",
                  "images": [
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/260597518.jpg?k=8c43d75ecbe964874dbb0b54708156995f0a92d586a973808d3a0c4e74ec7b22&o=&hp=1",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/130235246.jpg?k=6f7d596164681789fd0380959c351fb5a4329bd2b8fb26eac63b4d3b04a56f8d&o=&hp=1",
                    "https://exp.cdn-hotels.com/hotels/51000000/50360000/50351200/50351141/b56fad55_z.jpg",
                    "https://exp.cdn-hotels.com/hotels/51000000/50360000/50351200/50351141/09a33c95_z.jpg",
                    "https://exp.cdn-hotels.com/hotels/51000000/50360000/50351200/50351141/5cfba9f4_z.jpg",
                    "https://exp.cdn-hotels.com/hotels/51000000/50360000/50351200/50351141/ec7c24fd_z.jpg",
                    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/130235230.jpg?k=66c60375c1f3eb07f8e8ff0e70895511164c58f7baea935646e178d103041374&o=&hp=1",
                    "https://exp.cdn-hotels.com/hotels/51000000/50360000/50351200/50351141/0d4fc74c_z.jpg"
                  ]
                }
              ]
        shallow(<Products products={products}/>);
    });
});