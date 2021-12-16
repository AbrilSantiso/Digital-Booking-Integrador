import React, { useState } from "react";
import { FaShareAlt, FaAt, FaFacebook, FaTwitter, FaWhatsapp, FaPinterest } from "react-icons/fa";
import ButtonShareModal from "./ButtonShareModal";
import "./ButtonShare.css";


function ButtonShare(props) {
    const [open, setOpen] = useState(false);
    const { id, isFooter, isBottomMenu } = props;

    function shareUrl() {
        let linksProducto = [`https://www.facebook.com/sharer/sharer.php?u=www.digitalbooking.xyz%2Fproducto%2F${id}`, `https://pinterest.com/pin/create/button/?url=digitalbooking.xyz/producto/${id}&media=https://a0.muscache.com/im/pictures/897f501f-5794-4507-bb8d-25f30b65d336.jpg&description=Este%20alojamiento%20es%20incre%C3%ADble!`, `https://twitter.com/intent/tweet?text=Este%20alojamiento%20es%20incre%C3%ADble!%20%23recomiendo%20www.digitalbooking.xyz/producto/${id}`, `https://api.whatsapp.com/send?text=Este alojamiento es increíble! http%3A//digitalbooking.xyz/producto/${id}`, `mailto:?&subject=&body=Este%20alojamiento%20es%20incre%C3%ADble!%20digitalbooking.xyz/producto/${id}`];
        
        let linksApp = [`https://www.facebook.com/sharer/sharer.php?u=digitalbooking.xyz`, `https://pinterest.com/pin/create/button/?url=digitalbooking.xyz&media=https://a0.muscache.com/im/pictures/897f501f-5794-4507-bb8d-25f30b65d336.jpg&description=Encuentra%20tu%20lugar%20ideal!`, `https://twitter.com/intent/tweet?text=Encuentra%20tu%20lugar%20ideal!%20%23recomiendo%20www.digitalbooking.xyz`, `https://api.whatsapp.com/send?text=Encuentra tu lugar ideal! http%3A//digitalbooking.xyz`, `mailto:?&subject=&body=Encuentra%20tu%20lugar%20ideal!%20digitalbooking.xyz`];

        if (props.shareLinks === "producto") {            
            return linksProducto;
        }
        else if (props.shareLinks === "footer") {
            return linksApp;
        }
    }

    return (
        <>
            {open && (<ButtonShareModal closeShareModal={() => setOpen(false)}>
                <section>
                    <h3 className="share-lodging-title">¡Comparte en redes sociales!</h3>
                    <div className="share-social-media">
                        <a href={shareUrl()[0]} aria-label="facebook" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="share-social-icon-fb" />
                        </a>
                        <a href={shareUrl()[1]} aria-label="pinterest" target="_blank" rel="noopener noreferrer">
                            <FaPinterest className="share-social-icon-pint" />
                        </a>
                        <a href={shareUrl()[2]} aria-label="twitter" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="share-social-icon-tw" />
                        </a>
                        <a href={shareUrl()[3]} aria-label="whatsapp" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="share-social-icon-wsp" />
                        </a>
                        <a href={shareUrl()[4]} aria-label="mail" target="_blank" rel="noopener noreferrer">
                            <FaAt className="share-social-icon-mail" />
                        </a>
                    </div>
                </section>
            </ButtonShareModal >)
            }
            <button className={`share ${isFooter || isBottomMenu ? "share-footer" : ""}`} aria-label="share" onClick={() => setOpen(true)}>
                <FaShareAlt className={`share-icon ${isFooter || isBottomMenu ? "share-icon-footer" : ""}`} />
            </button>
        </>
    );
}

export default ButtonShare;