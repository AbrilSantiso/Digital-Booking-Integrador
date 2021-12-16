import LoadingCard from "./LoadingCard";
import "./LoadingSkeleton.css";

function LoadingSkeleton(props){
    
    const {isProductDetail} = props;
    
    if (isProductDetail) return (
        <div className="loader-container-product-detail">
          <div className="loader-principal-image-container-product-detail">
          <LoadingCard isProductDetail={true} isPrincipalImage={true} hideContent={true}/>
          </div>
         <div className="loader-little-images-container-product-detail">
         <LoadingCard hideContent={true} />
         <LoadingCard hideContent={true} />
         <LoadingCard hideContent={true} />
         <LoadingCard hideContent={true} />
         </div>
      </div>
    )
    return (
        <div className="loader-container">
         <LoadingCard/>
         <LoadingCard/>
         <LoadingCard/>
         <LoadingCard/>
         <LoadingCard/>
         <LoadingCard/>
         <LoadingCard/>
         <LoadingCard/>
         <LoadingCard/>
         <LoadingCard/>
         <LoadingCard/>
         <LoadingCard/>
      </div>
    )
}

export default LoadingSkeleton;

    