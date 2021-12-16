import { FaMapMarkerAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { ALL_CITIES } from "../../utils//apis";
import orderCitys from "../../utils/orderCitys"
import './SearchLocation.css';
const axios = require('axios');

function SearchLocation(props) {

    const { setSelectedCity } = props;
    const [cities, setCities] = useState([]);

    useEffect(() => {
        axios.get(ALL_CITIES)
            .then((result) => {
                const orderedCitys = orderCitys(result.data);
                setCities(orderedCitys);
            })
            .catch((error) => {
                console.log()
            })

    }, []);

    return (
        <section className="location">
            <FaMapMarkerAlt className="search-location-icon" />
            <select name="location-select" id="location-select" aria-label="select city" onChange={setSelectedCity}>
                <option hidden value="">¿A dónde vamos?</option>
                {cities.map((city) => (<option value={city.name} key={city.name}>{city.name}</option>))}
            </select>
        </section>
    )
}

export default SearchLocation;