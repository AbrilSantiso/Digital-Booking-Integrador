import Categories from "../Categories/Categories";
import Products from "../Products/Products";
import SearchBar from "../SearchBar/SearchBar";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton"
import React, { useEffect, useState } from "react";
import {ALL_PRODUCTS, PRODUCTS_BY_CATEGORY, PRODUCTS_BY_DATES_OR_CITY} from "../../utils/apis";
import GoToTop from "../GoToTop/GoToTop";
const axios = require('axios');

function Home(props) {

  const { setOnPage } = props;
  window.onload = setOnPage("/")
 
  const [products, setProducts] = useState([]);
  const [productRepository, setProductRepository] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");


  useEffect(() => {
    
    axios.get(ALL_PRODUCTS)
           .then((result) => {
                setProducts(result.data);
                setProductRepository(result.data);
            })
           .catch((error) => {
               setErrorMessage(error);
            })
            .finally(() => setLoading(false));
  }, []);

  function captureCity(e) {
    setSelectedCity(e.target.value);
   };

  function captureStartDate(date) {
    setSelectedStartDate(date);
   };

  function captureEndDate(date) {
    setSelectedEndDate(date);
   };
   
   function clearFilters() {
    if (productRepository.length > products.length) {
      setProducts(productRepository);
    };
   };

   function filterByCityAndDates(e) {
    e.preventDefault();
    if(selectedCity || selectedStartDate){
      if(selectedCity) {
        axios.get(`${PRODUCTS_BY_DATES_OR_CITY}city=${selectedCity}&startDate=${selectedStartDate}&endDate=${selectedEndDate}`)
        .then((result) => {
            setProducts(result.data);
            window.scrollTo(0, 1100);
         })
        .catch((error) => {
            setErrorMessage(error);
         })
      }
      else{
        axios.get(`${PRODUCTS_BY_DATES_OR_CITY}startDate=${selectedStartDate}&endDate=${selectedEndDate}`)
        .then((result) => {
            setProducts(result.data);
            window.scrollTo(0, 1100);
         })
        .catch((error) => {
            setErrorMessage(error);
         })
      }
    }
  }
    
   function filterByCategory(id){
    axios.get(`${PRODUCTS_BY_CATEGORY}${id}`)
    .then((result) => {
         setProducts(result.data);
         window.scrollTo(0, 1100);
     })
    .catch((error) => {
        setErrorMessage(error);
     });
}
    
  if (loading) return (
    <>
      <SearchBar setSelectedCity={captureCity} filterByCityAndDates={filterByCityAndDates}/>
      <LoadingSkeleton/>
      
    </>
  ) 
  return (
    <>
      <SearchBar setSelectedCity={captureCity} filterByCityAndDates={filterByCityAndDates} captureStartDate={captureStartDate} captureEndDate={captureEndDate}/>
      <Categories filterByCategory={filterByCategory}/>
      <Products products={products} error={errorMessage} loading={loading} clearFilters={clearFilters}/>
      <GoToTop />
    </>
  )
  }

export default Home;
