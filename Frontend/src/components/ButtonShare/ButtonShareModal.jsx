import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import "./ButtonShare.css";

function ButtonShareModal(props) {
    const { closeShareModal } = props;

    const closeicon = () => (
        <FaTimesCircle className="close-share-modal" aria-label="close" onClick={closeShareModal} />
    );

    return (
        <div className="share-modal">
            <div className="share-modal-container">
                {closeicon()}
                {props.children}
            </div>
        </div>
    );
};


export default ButtonShareModal;