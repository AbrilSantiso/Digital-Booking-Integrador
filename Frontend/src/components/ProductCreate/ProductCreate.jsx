import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ALL_CATEGORIES, ALL_CITIES, ALL_CHARACTERISTICS, CREATE_PRODUCT } from "../../utils/apis";
import orderCitys from "../../utils/orderCitys"
import ProductLabel from "../ProductLabel/ProductLabel";
import { FaSwimmer, FaWifi, FaCoffee, FaUtensils, FaSnowflake, FaSmokingBan, FaCocktail, FaPaw, FaCar, FaConciergeBell, FaDumbbell, FaSpa, FaTv, FaPlusCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";
import ButtonProductCreate from "../ButtonProductCreate/ButtonProductCreate";
import GoToTop from "../GoToTop/GoToTop";
import Swal from "sweetalert2";
import "./ProductCreate.css";

const axios = require('axios');


function ProductCreate(props) {
    const { setOnPage } = props;

    window.onload = () => {
        checkIfItsAdmin();
    }

    const history = useHistory();
    const [categories, setCategories] = useState([]);
    const [cities, setCities] = useState([]);
    const [characteristics, setCharacteristics] = useState([]);
    const [accommodationName, setAccommodationName] = useState("");
    const [accommodationAddress, setAccommodationAddress] = useState("");
    const [accommodationDescription, setAccommodationDescription] = useState("");
    const [accommodationCategory, setAccommodationCategory] = useState("");
    const [accommodationCity, setAccommodationCity] = useState("");
    const [accommodationCharacteristics, setAccommodationCharacteristics] = useState([]);
    const [accommodationImage, setAccommodationImage] = useState("");
    const [accommodationImages, setAccommodationImages] = useState([]);
    const [accommodationRules, setAccommodationRules] = useState("");
    const [accommodationSanity, setAccommodationSanity] = useState("");
    const [accommodationCancellationPolicy, setAccommodationCancellationPolicy] = useState("");

    function checkIfItsAdmin() {
        const isAdmin = localStorage.getItem("isAdmin")
        if (!isAdmin) {
            history.push(`/`);
        }
    }

    function parseIcons(icon) {
        switch (icon) {
            case 'FaWiFi':
                return <FaWifi className="service-icon" />
            case 'FaSwim':
                return <FaSwimmer className="service-icon swimmer-icon" />
            case 'FaCoffee':
                return <FaCoffee className="service-icon" />
            case 'FaUtensils':
                return <FaUtensils className="service-icon" />
            case 'FaSnowflake':
                return <FaSnowflake className="service-icon" />
            case 'FaSmokingBan':
                return <FaSmokingBan className="service-icon" />
            case 'FaCocktail':
                return <FaCocktail className="service-icon" />
            case 'FaPaw':
                return <FaPaw className="service-icon" />
            case 'FaCar':
                return <FaCar className="service-icon" />
            case 'FaConciergeBell':
                return <FaConciergeBell className="service-icon" />
            case 'FaDumbbell':
                return <FaDumbbell className="service-icon" />
            case 'FaSpa':
                return <FaSpa className="service-icon" />
            case 'FaTv':
                return <FaTv className="service-icon" />
            default:
                return
        }
    };

    useEffect(() => {
        axios.get(ALL_CATEGORIES)
            .then((result) => {
                setCategories(result.data);
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);

    useEffect(() => {
        axios.get(ALL_CITIES)
            .then((result) => {
                const orderedCitys = orderCitys(result.data);
                setCities(orderedCitys);
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);

    useEffect(() => {
        setOnPage("/user-admin-panel");
        axios.get(ALL_CHARACTERISTICS)
            .then((result) => {
                setCharacteristics(result.data);
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);


    function createProduct(e) {

        e.preventDefault();

        if (accommodationImages.length >= 5) {

            const token = localStorage.getItem('token');

            let product = {
                "name": accommodationName,
                "description": accommodationDescription,
                "category": { "id": parseInt(accommodationCategory) },
                "city": { "id": parseInt(accommodationCity) },
                "characteristics": accommodationCharacteristics,
                "images": processImages(),
                "location": {
                    "address": accommodationAddress,
                },
                "policies": {
                    "rules": accommodationRules,
                    "sanitySecurity": accommodationSanity,
                    "cancellationPolicy": accommodationCancellationPolicy,
                }
            }

            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };


            axios.post(CREATE_PRODUCT, product, config)
                .then(function (res) {
                    if (res.status === 201) {
                        successfulProductCreation()
                    } else {
                        failedProductCreation()
                    }
                })
                .catch(function (err) {
                    console.log(err);
                })
        } else {
            imageLimitAlert()
        };


    };


    /*------------- POP OUTS ----------------*/

    function successfulProductCreation() {
        Swal.fire({
            icon: 'success',
            title: '¡Muchas gracias!',
            text: 'La propiedad se ha creado con éxito',
            confirmButtonText: 'Volver',
            heightAuto: false,
            iconColor: "#1DBEB4",
            confirmButtonColor: "#1DBEB4",
            showCloseButton: true,
            customClass: {
                popup: 'popup-successful-reservation',
                title: 'popup-title',
                closeButton: 'popup-close-button',
                icon: 'popup-sweet-icon',
                content: 'popup-sweet-content',
                confirmButton: 'popup-sweet-confirm-button'
            }
        })
            .then((result) => {
                if (result.isConfirmed) {
                    history.push("/");
                }
            })
    }

    function failedProductCreation() {
        Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un error',
            text: 'Lamentablemente la creación del producto no ha podido realizarse. Por favor, intente más tarde',
            confirmButtonText: 'Volver',
            heightAuto: false,
            iconColor: "#CC0000",
            confirmButtonColor: "#1DBEB4",
            showCloseButton: true,
            customClass: {
                popup: 'popup-successful-reservation',
                title: 'popup-title',
                closeButton: 'popup-close-button',
                icon: 'popup-sweet-icon',
                content: 'popup-sweet-content',
                confirmButton: 'popup-sweet-confirm-button'
            }
        })
            .then((result) => {
                if (result.isConfirmed) {
                    history.push("/");
                }
            })
    }

    function imageLimitAlert() {
        Swal.fire({
            icon: 'warning',
            title: 'No ha podido crearse el producto',
            text: 'Debes agregar al menos 5 imágenes para poder crear un producto',
            confirmButtonText: 'Ok',
            position: 'center',
            heightAuto: false,
            iconColor: "#CC0000",
            confirmButtonColor: "#1DBEB4",
            showCloseButton: true,
            customClass: {
                popup: 'popup-successful-reservation',
                title: 'popup-title',
                closeButton: 'popup-close-button',
                icon: 'popup-sweet-icon',
                content: 'popup-sweet-content',
                confirmButton: 'popup-sweet-confirm-button'
            }
        })
    }


    /*------------- HANDLERS CHANGES ----------------*/
    function handleChangeAccommodationName(e) {
        const { value } = e.target
        setAccommodationName(value);
    };

    function handleChangeAccommodationAddress(e) {
        const { value } = e.target
        setAccommodationAddress(value);
    };

    function handleChangeAccommodationDescription(e) {
        const { value } = e.target
        setAccommodationDescription(value);
    };

    function handleChangeAccommodationCategory(e) {
        const { value } = e.target
        setAccommodationCategory(value);
    };

    function handleChangeAccommodationCity(e) {
        const { value } = e.target
        setAccommodationCity(value);
    };

    function handleChangeAccommodationRules(e) {
        const { value } = e.target
        setAccommodationRules(value);
    };

    function handleChangeAccommodationSanity(e) {
        const { value } = e.target
        setAccommodationSanity(value);
    };

    function handleChangeAccommodationCancellationPolicy(e) {
        const { value } = e.target
        setAccommodationCancellationPolicy(value);
    };

    function handleChangeAccommodationImage(e) {
        const { value } = e.target
        setAccommodationImage(value);
    };

    function handleChangeAccommodationCharacteristics(e, characteristic) {

        const { checked } = e.target

        if (checked) {
            setAccommodationCharacteristics([...accommodationCharacteristics, { "id": parseInt(characteristic.id) }])
        } else {
            const isInTheArray = accommodationCharacteristics.some(ch => ch === characteristic.id)
            if (isInTheArray) {
                setAccommodationCharacteristics(accommodationCharacteristics.filter(ch => ch !== characteristic.id))
            };
        };
    };

    /*------------------ADD/REMOVE/PROCESS IMAGES----------------------------------*/

    function removeImage(url) {
        setAccommodationImages(accommodationImages.filter(img => img !== url))
        console.log(accommodationImages)
    };

    function addImage() {
        if (accommodationImage) {
            setAccommodationImages([...accommodationImages, accommodationImage])
            setAccommodationImage("")
        };
    };

    function processImages() {

        const processedImages = accommodationImages.map((url, i) => (
            {
                "title": `${accommodationName.replace(/ /g, "-")}-IMG${i + 1}`,
                "url": url
            }
        ))

        return processedImages
    };

    return (
        <>
            <ProductLabel page={"/administracion"} />
            <section className="background-product-create">
                <h2 className="title-product-create">Agregar propiedad</h2>
                <form id="product-create-form" name="Product Create Form" onSubmit={createProduct}>
                    <section className="product-create-container">
                        <fieldset className="section-inputs-container">
                            <label className="product-create-label">
                                Nombre de la propiedad
                                <input type="text" name="name" title="Ingresa el nombre de la propiedad" aria-label="input name" className="product-create-input" onChange={handleChangeAccommodationName} value={accommodationName} required />
                            </label>
                            <label className="product-create-label">
                                Categoría
                                <select name="category-select" title="Selecciona una categoría en la lista" aria-label="select category" onChange={handleChangeAccommodationCategory} value={accommodationCategory} id="product-create-select" required >
                                    <option hidden value="">Selecciona la categoría</option>
                                    {categories.map((category) => (<option value={category.id} key={category.title}>{category.title}</option>))}
                                </select>
                            </label>
                        </fieldset>
                        <fieldset className="section-inputs-container">
                            <label className="product-create-label">
                                Dirección
                                <input type="text" name="address" title="Ingresa la dirección" aria-label="input address" className="product-create-input" onChange={handleChangeAccommodationAddress} value={accommodationAddress} required />
                            </label>

                            <label className="product-create-label">
                                Ciudad
                                <select name="location-select" title="Selecciona una ciudad en la lista" aria-label="select city" id="product-create-select" onChange={handleChangeAccommodationCity} value={accommodationCity} required >
                                    <option hidden value="">Selecciona la ciudad</option>
                                    {cities.map((city) => (<option value={city.id} key={city.name}>{city.name}</option>))}
                                </select>
                            </label>
                        </fieldset>
                        <label className="product-create-textarea-label">
                            Descripción
                            <textarea name="description" title="Ingresa la descripción del alojamiento" className="product-create-description" onChange={handleChangeAccommodationDescription} value={accommodationDescription} required />
                        </label>
                    </section>

                    <section className="product-create-section">
                        <h2 className="subtitle-product-create">Agregar características</h2>
                        <fieldset className="section-container-characteristics">
                            <ul className="services-product-create">
                                {characteristics.map((characteristic) => (
                                    <li className="service" key={characteristic.id}>
                                        <label for={characteristic.id} aria-label="characteristic service" className="product-create-service">
                                            <input type="checkbox" id="service" name="service" aria-label="characteristic service" value={characteristic.id} onChange={(e) => handleChangeAccommodationCharacteristics(e, characteristic)} />
                                            {parseIcons(characteristic.icon)}
                                            {characteristic.name}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </fieldset>
                    </section>

                    <section className="product-create-section">
                        <h2 className="subtitle-product-create">Políticas del alojamiento</h2>
                        <fieldset className="section-container-policies">
                            <div className="product-create-rules">
                                <h3 className="subtitle-product-policies">Normas de la casa</h3>
                                <label className="product-create-policies-label">
                                    Descripción
                                    <textarea name="description" title="Ingresa las normas del alojamiento" className="product-create-policies" onChange={handleChangeAccommodationRules} value={accommodationRules} required />
                                </label>
                            </div>
                            <div className="product-create-rules">
                                <h3 className="subtitle-product-policies">Salud y seguridad</h3>
                                <label className="product-create-policies-label">
                                    Descripción
                                    <textarea name="description" title="Ingresa la descripción de salud y seguridad" className="product-create-policies" onChange={handleChangeAccommodationSanity} value={accommodationSanity} required />
                                </label>
                            </div>
                            <div className="product-create-rules">
                                <h3 className="subtitle-product-policies">Política de cancelación</h3>
                                <label className="product-create-policies-label">
                                    Descripción
                                    <textarea name="description" title="Ingresa la política de cancelación" className="product-create-policies" onChange={handleChangeAccommodationCancellationPolicy} value={accommodationCancellationPolicy} required />
                                </label>
                            </div>
                        </fieldset>
                    </section>
                    <section className="product-create-section">
                        <h2 className="subtitle-product-create">Agregar fotos</h2>
                        <fieldset className="section-images-container">
                            <div className="images-input">
                                <label className="product-create-label">
                                    <p className="add-links-label">
                                        <span>Mínimo 5 imágenes</span>
                                        <a href="https://imgbb.com/" target="_blank" rel="noopener noreferrer" role="link" aria-label="link para obtener url´s" className="link-to-url"><FaInfoCircle className="icon-info"/>Obtén las URL's a partir de tus fotos aquí</a>
                                    </p>
                                    <input type="text" id="url" name="img" title="Ingresa la foto del alojamiento" placeholder="Insertar https://" className="product-create-input-img" onChange={handleChangeAccommodationImage} value={accommodationImage} />
                                </label>
                                <FaPlusCircle title="Agrega una imagen" role="button" className="icon-add-img" onClick={addImage} />
                            </div>
                            <div className="images-list">
                                <ul className="image-url-items">
                                    {accommodationImages.map((url, i) => (
                                        <li key={i}>
                                            <label className="image-url-item">
                                                <input type="url" id="url" name="img" className="image-url" disabled value={url} />
                                                <FaTimesCircle title="Elimina esta imagen" role="button" className="icon-remove-img" onClick={() => removeImage(url)} />
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </fieldset>
                    </section>
                    <ButtonProductCreate />
                    <GoToTop />
                </form>
            </section>
        </>
    );
}

export default ProductCreate;