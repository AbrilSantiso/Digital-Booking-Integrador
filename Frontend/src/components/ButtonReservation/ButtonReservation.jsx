import { useHistory } from 'react-router-dom';
import "./ButtonReservation.css"

function StartReservationButton(props) {

    const { id } = props;
    const history = useHistory();

    function isLogged() {
        let token = localStorage.getItem("token");
        return token != null;
    };

    function startReservation(e) {

        e.preventDefault();

        if (isLogged()) {
            history.push(`/producto/${id}/reserva`);
        } else {
            localStorage.setItem("LoggedToReserve", "false");
            history.push(`/ingresar`, { from: 'product-detail-page', id: id });
        }

    };

    return (<button type="submit" className="button-reservation" onClick={startReservation}>Iniciar Reserva</button>)

};

export default StartReservationButton;