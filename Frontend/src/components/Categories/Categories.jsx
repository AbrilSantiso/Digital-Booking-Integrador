import { useEffect, useState } from "react";
import { ALL_CATEGORIES } from "../../utils/apis";
import LoadingCard from "../LoadingSkeleton/LoadingCard"
import "./Categories.css";
const axios = require('axios');

function Categories(props) {

  const { filterByCategory } = props;

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios.get(ALL_CATEGORIES)
      .then((result) => {
        setCategories(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);


  if (loading) return (
    <div className="loader-container">
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  );

  return (
    <>
      <h2 className="categories-title">Buscar por tipo de alojamiento</h2>
      <section className="categories">
        {categories.map((category) => (
          <div className="category-item" onClick={() => filterByCategory(category.id)}>
            <img
              src={category.url}
              alt={"imagen de categoría" + category.title}
            />
            <div className="category-text">
              <h3 className="category-name">{category.title}</h3>
              <p className="category-count">{category.description}</p>
            </div>
          </div>
        ))}

      </section>
    </>
  );
}

export default Categories;
