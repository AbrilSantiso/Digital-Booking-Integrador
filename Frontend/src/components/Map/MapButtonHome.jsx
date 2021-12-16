import React, { useState } from "react";
import MapModal from "./MapModal";
import Map from "./Map";
import "./Map.css";

function MapButtonHome(props) {
    const { product } = props;
    const [open, setOpen] = useState(false);

    return (
        <>
            {open && (<MapModal closeMapModal={() => setOpen(false)}>
                <div className="map-container">
                    <Map product={product} className="map-modal" />
                </div>
            </MapModal >)
            }
            <button className="map-detail" aria-label="map" onClick={() => setOpen(true)}>
                MOSTRAR EN EL MAPA
            </button>
        </>
    )

}

export default MapButtonHome;