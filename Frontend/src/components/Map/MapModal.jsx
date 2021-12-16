import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import "./Map.css";

function MapModal(props) {
    const { closeMapModal } = props;

    const closeicon = () => (
        <FaTimesCircle className="close-share-modal" aria-label="close" onClick={closeMapModal} />
    );

    return (
        <div>
            <div className="map-modal-background">
                <div className="map-modal-container">
                    {closeicon()}
                    {props.children}
                </div>
            </div>
        </div>
    );
};


export default MapModal;