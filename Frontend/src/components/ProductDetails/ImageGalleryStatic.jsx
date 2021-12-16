import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "../OverlayComponent/Modal";
import ImageGallery from "../ImageGallery/ImageGallery";
import "./ImageGalleryStatic.css";

function ImageGalleryStatic(props) {
    const { product } = props;
    return (
        <>
            {/* Image´s gallery */}
            <section className="photo-gallery">
                <div className="product-photos">
                    <div className="photos-container">
                        <figure className="photo">
                            <img src={product.images[0].url} alt="imagen del alojamiento" />
                        </figure>
                        <figure className="photo">
                            <img src={product.images[1].url} alt="imagen del alojamiento" />
                        </figure>
                        <figure className="photo">
                            <img src={product.images[2].url} alt="imagen del alojamiento" />
                        </figure>
                        <figure className="photo">
                            <img src={product.images[3].url} alt="imagen del alojamiento" />
                        </figure>
                        <figure className="photo">
                            <img src={product.images[4].url} alt="imagen del alojamiento" />
                        </figure>
                        {/* Image´s gallery pop-up */}
                        <Modal product={product} divider="/"/>
                    </div>

                </div>
            </section>
            <section className="photo-gallery-tablet">
            <ImageGallery productImages={product.images} divider="/" showThumbs={false}/>
            </section>
        </>
    )

}

export default ImageGalleryStatic;