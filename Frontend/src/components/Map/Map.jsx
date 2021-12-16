import "./Map.css";

function Map(props) {
    const { product, className } = props;
    return (
        <iframe allowfullscreen={""} loading={"lazy"} className={className}
            src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyCW2rD1iN9Jt7LP0N5R4t2NE5L9QME1bFg&q=" + product.location.address + "," + product.city.name + "," + product.city.nameCountry + "&zoom=18"}
        ></iframe>
    )
}

export default Map;