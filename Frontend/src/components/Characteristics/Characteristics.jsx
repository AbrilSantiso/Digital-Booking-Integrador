import { FaSwimmer, FaWifi, FaCoffee, FaUtensils, FaSnowflake, FaSmokingBan, FaCocktail, FaPaw, FaCar, FaConciergeBell, FaDumbbell, FaSpa, FaTv } from "react-icons/fa";
import "./Characteristics.css";

function Characteristics(props) {

    const { productCharacteristics, page } = props;

    function parseIcons(icon) {
        if (page === "home") {
            switch (icon) {
                case 'FaWiFi':
                    return <FaWifi className="service-icon-home" />
                case 'FaSwim':
                    return <FaSwimmer className="service-icon-home swimmer-icon" />
                case 'FaCoffee':
                    return <FaCoffee className="service-icon-home" />
                case 'FaUtensils':
                    return <FaUtensils className="service-icon-home" />
                case 'FaSnowflake':
                    return <FaSnowflake className="service-icon-home" />
                case 'FaSmokingBan':
                    return <FaSmokingBan className="service-icon-home" />
                case 'FaCocktail':
                    return <FaCocktail className="service-icon-home" />
                case 'FaPaw':
                    return <FaPaw className="service-icon-home" />
                case 'FaCar':
                    return <FaCar className="service-icon-home" />
                case 'FaConciergeBell':
                    return <FaConciergeBell className="service-icon-home" />
                case 'FaDumbbell':
                    return <FaDumbbell className="service-icon-home" />
                case 'FaSpa':
                    return <FaSpa className="service-icon-home" />
                case 'FaTv':
                    return <FaTv className="service-icon-home" />
                default:
                    return;
            }
        } else {
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
                    return;
            }
        }
    };

    if (page === "home") {
        return (
            <ul className="services-icons">
                {productCharacteristics.map((characteristic) => (
                    <li className="service-icon" key={characteristic.id}>
                        {parseIcons(characteristic.icon)}
                    </li>
                ))}
            </ul>
        )
    } else {
        return (
            <ul className="services">
                {productCharacteristics.map((characteristic) => (
                    <li className="service" key={characteristic.id}>
                        {parseIcons(characteristic.icon)}
                        <span>{characteristic.name}</span>
                    </li>
                ))}
            </ul>
        );
    };

};

export default Characteristics;