const Data = {
  //id, description, name, url
  categories: [
    [1, "Descubre hoteles", "HOTEL", "https://digitalbookinggruposseis.s3.amazonaws.com/categories/hoteles.jpg"],
    [2, "Descubre hostels", "HOSTEL", "https://digitalbookinggruposseis.s3.amazonaws.com/categories/hostels.jpg"],
    [3, "Descubre departamentos", "DEPARTAMENTO", "https://digitalbookinggruposseis.s3.amazonaws.com/categories/departamentos.jpeg"],
    [4, "Descubre beds & breakfast", "BED AND BREAKFAST", "https://digitalbookinggruposseis.s3.amazonaws.com/categories/bed-and-breakfast.jpg"],
  ],
  
  //id , city, country
  cities: [
    [1, "Mendoza", "Argentina"],
    [2, "Buenos Aires", "Argentina"],
    [3, "Bogotá", "Colombia"],
    [4, "Medellín", "Colombia"],
    [5, "Bariloche", "Argentina"],
  ],
  
  //id , icon, name
  characteristics: [
    [1, "FaWiFi", "Wifi"],
    [2, "FaSwim", "Piscina"],
    [3, "FaCoffee", "Cafetería"],
    [4, "FaUtensils", "Restaurante"],
    [5, "FaSnowflake", "Aire acondicionado"],
    [6, "FaSmokingBan", "Prohibido fumar"],
    [7, "FaTv", "Televisor"],
    [8, "FaCocktail", "Bar"],
    [9, "FaPaw", "Apto mascotas"],
    [10, "FaCar", "Estacionamiento"],
    [11, "FaConciergeBell", "Servicio de habitación"],
    [12, "FaDumbbell", "Gimnasio"],
    [13, "FaSpa", "Spa"]
  ],

  //id, description, name, idCategory, idCity
  products: [
    [1, "Con su magnífica fachada neoclásica del siglo XX y rodeado por imponentes paisajes de viñedos bajo la Cordillera de los Andes, se convierte en un destino ideal para viajes de placer y negocios.", "Park Hyatt Mendoza", 1, 1],
    [2, "Ubicado en el corazón del distrito de negocios y recientemente remodelado, combina el estilo contemporáneo y vanguardista con la tradición atemporal. Se encuentra cerca del casco antiguo de Usaquén, convirtiéndolo en un lugar ideal para centrarse en los negocios y después relajarse.", "NH Collection Royal", 1, 3],
    [3, "Una casa reformada del siglo XIX que ofrece alojamiento económico, a solo 600 metros del Obelisco. Cuenta con cocina compartida y bar. Habitaciones amplias y luminosas con suelo de parquet y baño privado. Las habitaciones compartidas cuentan con baño compartido.","Milhouse Hostel Avenue", 2, 2],
    [4, "Elegante y exclusivo. Ubicado en un exuberante valle tropical, es una mezcla perfecta de vida urbana y áreas verdes. Habitaciones privadas con diferentes configuraciones y dormitorios para 4, 6 y 8 personas, te garantizamos que encontrarás exactamente lo que buscas.", "Hostal Los Patios", 2, 4],
    [5, "Amplios espacios decorados con gran estilo, únicos por su privacidad, equipamiento y servicios de inmejorable calidad. Espectacular terraza en esquina que ofrece una vista privilegiada y un ambiente soñado para relajarse, descansar, trabajar o compartir reuniones con amigos.", "Soho Point Suites", 3, 2],
    [6, "Ubicado en el 13° piso de torre Bellini, un ambiente luminoso, con diseño y confort. Cama Queen, pequeño living y escritorio con vista a las cúpulas de Buenos Aires. Un lugar versátil tanto para descansar como para quien tenga que estar en la ciudad por actividades laborales.", "Apart con balcón", 3, 2],
    [7, "Situada a 4,3 km del centro de Bariloche, en una mansión de estilo alpino rodeada de un hermoso jardín. A 800 metros del Lago Nahuel Huapi, ofrece habitaciones acogedoras con decoración rústica, TV de pantalla plana y baño privado con ducha.", "Hostería Del Prado",  4, 5],
    [8, "Ubicado en el distrito de Monserrat, a pocos pasos del Palacio Barolo, cerca del Tortoni Cafe, el Obelisco y el teatro Colón. Variadas opciones gastronómicas y una excelente vida nocturna para disfrutar.", "Avenida Tango", 4, 2],
    
  ],
  
  //idProducto, idCharacteristic
  product_characteristic: [
    [1, 1],
    [1, 2],
    [1, 4],
    [1, 5],
    [1, 8],
    [1, 9],
    [1, 10],
    [1, 11],
    [1, 12],
    [1, 13],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 8],
    [2, 10],
    [2, 11],
    [2, 12],
    [2, 13],
    [3, 1],
    [3, 3],
    [3, 4],
    [3, 5],
    [3, 6],
    [3, 7],
    [3, 8],
    [4, 1],
    [4, 3],
    [4, 6],
    [4, 7],
    [4, 8],
    [5, 1],
    [5, 2],
    [5, 5],
    [5, 6],
    [5, 7],
    [6, 1],
    [6, 2],
    [6, 5],
    [6, 6],
    [6, 7],
    [6, 12],
    [7, 1],
    [7, 5],
    [7, 6],
    [7, 7],
    [7, 9],
    [7, 10],
    [8, 1],
    [8, 5],
    [8, 6],
    [8, 7],
    [8, 12]
  ],
  
  //id, title, url, idProduct
  images: [
    [1,"Portada1","https://digitalbookinggruposseis.s3.amazonaws.com/products/product1/portada%2B.jpg",1],
    [2,"img1prod1","https://digitalbookinggruposseis.s3.amazonaws.com/products/product1/img1prod1.webp",1],
    [3,"img2prod1","https://digitalbookinggruposseis.s3.amazonaws.com/products/product1/img2prod1.webp",1],
    [4,"img3prod1","https://digitalbookinggruposseis.s3.amazonaws.com/products/product1/img3prod1.webp",1],
    [5,"img4prod1","https://digitalbookinggruposseis.s3.amazonaws.com/products/product1/img4prod1.webp",1],
    [6,"img5prod1","https://digitalbookinggruposseis.s3.amazonaws.com/products/product1/img5prod1.webp",1],
    [7,"img6prod1","https://digitalbookinggruposseis.s3.amazonaws.com/products/product1/img6prod1.webp",1],
    [8,"img7prod1","https://digitalbookinggruposseis.s3.amazonaws.com/products/product1/img7prod1.webp",1],
    [9,"img8prod1","https://digitalbookinggruposseis.s3.amazonaws.com/products/product1/img8prod1.webp",1],
    [10,"img10prod1","https://digitalbookinggruposseis.s3.amazonaws.com/products/product1/img1prod1.webp",1],
    [20,"Portada2","https://digitalbookinggruposseis.s3.amazonaws.com/products/product2/portada2.webp",2],
    [21,"img9prod2.webpa","https://digitalbookinggruposseis.s3.amazonaws.com/products/product2/img9prod2.webp",2],
    [22,"img8prod2.webp","https://digitalbookinggruposseis.s3.amazonaws.com/products/product2/img8prod2.webp",2],
    [23,"img7prod2.webp","https://digitalbookinggruposseis.s3.amazonaws.com/products/product2/img7prod2.webp",2],
    [24,"img6prod2.webp","https://digitalbookinggruposseis.s3.amazonaws.com/products/product2/img6prod2.webp",2],
    [25,"img5prod2.webp","https://digitalbookinggruposseis.s3.amazonaws.com/products/product2/img5prod2.webp",2],
    [26,"img4prod2.webp","https://digitalbookinggruposseis.s3.amazonaws.com/products/product2/img4prod1.jpg",2],
    [27,"img3prod2.webp","https://digitalbookinggruposseis.s3.amazonaws.com/products/product2/img3prod1.webp",2],
    [28,"img2prod2.webp","https://digitalbookinggruposseis.s3.amazonaws.com/products/product2/img2prod2.jpg",2],
    [29,"img1prod1.webp","https://digitalbookinggruposseis.s3.amazonaws.com/products/product2/img1prod2.webp",2],
    [30, "Portada3", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product3/portada3.jpg", 3],
    [31, "img8prod3", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product3/img8prod3.jpg", 3],
    [32, "img7prod3", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product3/img7prod3.jpg", 3],
    [33, "img6prod3", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product3/img6prod3.jpg", 3],
    [34, "img5prod3", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product3/img5prod3.jpg", 3],
    [35, "img4prod3", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product3/img4prod3.jpg", 3],
    [36, "img3prod3", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product3/img3prod3.jpg", 3],
    [37, "img2prod3", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product3/img2prod3.jpg", 3],
    [38, "img1prod3", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product3/img1prod3.jpg", 3],
    [40,"Portada4","https://digitalbookinggruposseis.s3.amazonaws.com/products/product4/portada4.webp",4],
    [41,"img8prod4.jpg","https://digitalbookinggruposseis.s3.amazonaws.com/products/product4/img8prod4.jpg",4],
    [42,"img7prod4.wepg","https://digitalbookinggruposseis.s3.amazonaws.com/products/product4/img7prod4.webp",4],
    [43,"img6prod4.jpg","https://digitalbookinggruposseis.s3.amazonaws.com/products/product4/img6prod4.jpg",4],
    [44,"img5prod4.jpg","https://digitalbookinggruposseis.s3.amazonaws.com/products/product4/img5prod4.jpeg",4],
    [45,"img4prod4.jpg","https://digitalbookinggruposseis.s3.amazonaws.com/products/product4/img4prod4.jpeg",4],
    [46,"img3prod4.jpg","https://digitalbookinggruposseis.s3.amazonaws.com/products/product4/img3prod4.jpg",4],
    [47,"img2prod4.jpg","https://digitalbookinggruposseis.s3.amazonaws.com/products/product4/img2prod4.jpg",4],
    [48,"img1prod4.wepg","https://digitalbookinggruposseis.s3.amazonaws.com/products/product4/img1prod4.webp",4],
    [50, "Portada5", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product5/portada5.jpg", 5],
    [51, "img7prod5", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product5/img7prod5.jpg", 5],
    [52, "img6prod5", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product5/img6prod5.jpg", 5],
    [53, "img5prod5", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product5/img5prod5.jpg", 5],
    [54, "img4prod5", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product5/img4prod5.jpg", 5],
    [55, "img3prod5", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product5/img3prod5.jpg", 5],
    [56, "img2prod5", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product5/img2prod5.jpg", 5],
    [57, "img1prod5", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product5/img1prod5.jpg", 5],
    [58, "portada6", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product6/portada6.webp", 6],
    [59, "img1prod6", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product6/img1prod6.webp", 6],
    [60, "img2prod6", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product6/img2prod6.webp", 6],
    [61, "img3prod6", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product6/img3prod6.webp", 6],
    [62, "img4prod6", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product6/img4prod6.webp", 6],
    [63, "img5prod6", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product6/img5prod6.webp", 6],
    [64, "img6prod6", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product6/img6prod6.webp", 6],
    [65, "portada7", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product7/portada7.jpg", 7],
    [66, "img1prod7", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product7/img1prod7.jpg", 7],
    [67, "img2prod7", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product7/img2prod7.jpg", 7],
    [68, "img3prod7", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product7/img3prod7.jpg", 7],
    [69, "img4prod7", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product7/img4prod7.jpg", 7],
    [70, "img5prod7", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product7/img5prod7.jpg", 7],
    [71, "img6prod7", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product7/img6prod7.jpg", 7],
    [72, "img7prod7", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product7/img7prod7.jpg", 7],
    [73, "portada8", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product8/portada8.jpg", 8],
    [74, "img1prod8", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product8/img1prod8.jpg", 8],
    [75, "img2prod8", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product8/img2prod8.webp", 8],
    [76, "img3prod8", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product8/img3prod8.webp", 8],
    [77, "img4prod8", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product8/img4prod8.webp", 8],
    [78, "img5prod8", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product8/img5prod8.webp", 8],
    [79, "img6prod8", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product8/img6prod8.jpg", 8],
    [80, "img7prod8", "https://digitalbookinggruposseis.s3.amazonaws.com/products/product8/img7prod8.webp", 8]
  ],

  //id, email, lastName, name, password
  users : [
    [1, "santi@digitalbooking.xyz", "Garlot", "Santiago", "$2a$10$nozpu7y.IBSfRmvMolNoA..Xr056D20U/c34HhV4dW7R2GS6fbgCG"],
    [2, "jhon@digitalbooking.xyz", "Parra", "Jhon", "$2a$10$WF4RqDZ9C8TFM6y7eq33OuRhZgFMkqrj2gq0/HJOcVeQE6UrlEkbm"],
    [3, "abril@digitalbooking.xyz", "Santiso", "Abril", "$2a$10$q5571Slvs6CziTv/vhl9fOAE3byTgPdLSWDNt6Y2WGMLWP2TjAjQa"],
    [4, "sol@digitalbooking.xyz", "Rocca", "Soledad", "$2a$10$3GOHfSq.rqkzP2YBAl17e.L1KnIyijAmCyqrIS.BwnkH4c0D9dHie"],
    [5, "dani@digitalbooking.xyz", "Romero", "Daniel", "$2a$10$8e/xeExIef3FpVZHA6jLw.CS.vBTF4XVpVyoOIfVDf.T1AQbftcWa"]    
  ],
  
  //id, name
  roles: [
    [1, "admin"],
    [2, "user"]
  ],

  //userId, rolId
  user_rol: [
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1]
  ]
};

function sqlGen() {
  for (const entity in Data) {
    for (const element of Data[entity]) {
      console.log(`INSERT INTO ${entity} VALUES (${valuesGen(element)});`);
    }
  }
}


function valuesGen(values) {
  const sql = [];

  for (const value of values) {
    if (Number.isInteger(value)) {
      sql.push(value)
    } else {
      sql.push(`"${value}"`)
    }
  }
  return sql
}

sqlGen();
