import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { UPDATE_USER } from "../../utils/apis";
import axios from "axios";
import "./ButtonFav.css";


function ButtonFav(props) {
    const { isHome, productId } = props;
    const [favorites, setFavorites] = useState();
    const [isFavorite, setIsFavorite] = useState();
    const [isLogged, setIsLogged] = useState();

    
    useEffect(() => {
        let token = localStorage.getItem("token")
        if(token){
            setIsLogged(true)
        }
    }, []);

    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem("favorites")))
    }, []);
    
    
    useEffect(() => {
        let favs = JSON.parse(localStorage.getItem("favorites"));
        if(favs){
            let isFav = favs.some(fav => fav.id === productId);
            if (isFav){
                setIsFavorite(true)
            }
        }
    }, []);

    function updateFavs() {
        if(isLogged){
            if(isFavorite){
                setIsFavorite(false)
            }else{
                setIsFavorite(true)
            }
            const userId = localStorage.getItem("userId");
            
            let newFavorites = toggleFavs();
            let parsedFavs = parsedFavorites(newFavorites);
    
    
            const userData = {
                "id": parseInt(userId),
                "favorites": parsedFavs
            }
            
            console.log(userData)
            if (productId) {
                axios.put(UPDATE_USER, userData)
                    .then(function (res) {
                        localStorage.setItem('favorites', JSON.stringify(newFavorites));
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            };
        }
    };

    function toggleFavs() {
        if(isLogged){
            let isFav = favorites.some(fav => fav.id === productId);
            if (isFav) {
                let newFavs = favorites.filter(fav => fav.id !== productId);
                return newFavs
            } else {
                return ([...favorites, { "id": parseInt(productId) }]);
            };
        }
    };

    function parsedFavorites(favs){
        let parsedFavs = []
        favs.forEach(fav => {
            parsedFavs.push({"id": parseInt(fav.id)})
        });
        return parsedFavs;
    };


    return (
        <FaHeart className={`heart-icon ${isHome ? "heart-icon-products is-fav" : ""} ${isFavorite? "isFavorite" : "isntFavorite"}`} onClick={updateFavs} />
    )
}


export default ButtonFav;