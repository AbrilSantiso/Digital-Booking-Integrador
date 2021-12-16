import { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { POST_RESERVATION, PRODUCT_BY_ID } from '../../utils/apis';
import UserDataForm from './UserDataForm';
import CalendarReservation from "../SearchCalendar/CalendarReservation";
import CheckInHourSelect from './CheckInHourSelect';
import { FaCalendarDay } from "react-icons/fa";
import axios from "axios";
import Swal from 'sweetalert2';
import "./ReservationForm.css";
import "../SuccessfullyReservation/SuccessfullyReservation.css";
import emailjs from 'emailjs-com';


function ReservationForm(props) {

  const history = useHistory();
  const [city, setCity] = useState("");
  const [checkInHour, setCheckInHour] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [product, setProduct] = useState("");
  const [isVaccinated, setIsVaccinated] = useState("");
  const { id } = useParams();
  const { handleChangeCheckInDateProduct, handleChangeCheckOutDateProduct } = props;

  useEffect(() => {

    handleChangeCheckInDateProduct(checkInDate);
    handleChangeCheckOutDateProduct(checkOutDate)

  }, [checkInDate, checkOutDate]);

  useEffect(() => {
    axios.get(`${PRODUCT_BY_ID}${id}`)
      .then((result) => {
        setProduct(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  function handleChangeCity(e) {
    const { value } = e.target
    setCity(value);
  };

  function handleChangeCheckInHour(e) {
    const { value } = e.target
    setCheckInHour(value);
  };

  function handleChangeCheckInDate(value) {
    setCheckInDate(value)
  };

  function handleChangeCheckOutDate(value) {
    setCheckOutDate(value)
  };

  function handleChangeIsVaccinated(e) {
    const { value } = e.target
    setIsVaccinated(value);
  };


  function startReservation(e) {

    e.preventDefault();

    if (isVaccinated === "no") {
       covidAlert();
    } else {
      let reservation = {
        "hour": checkInHour,
        "startDate": parseDates(checkInDate),
        "endDate": parseDates(checkOutDate),
        "product": { id: parseInt(id) },
        "user": { id: parseInt(localStorage.getItem("userId")) }
      }

      const config = {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      };

      axios.post(POST_RESERVATION, reservation, config)
        .then(function (res) {
          if (res.status === 201) {
            sendConfirmReservationEmail();
            successfulReservation();
          } else {
            failedReservation();
          }
        })
        .catch(function (err) {
          console.log(err);
        })
    }
  };

  function parseDates(date) {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth() + 1;
    const year = new Date(checkOutDate).getFullYear();

    const correctFormatDay = day.toString().length === 1 ? `0${day}` : day;
    const correctFormatMonth = month.toString().length === 1 ? `0${month}` : month;

    return `${year}-${correctFormatMonth}-${correctFormatDay}`

  }


  /*---------- Pop Outs --------*/
  function successfulReservation() {
    Swal.fire({
      icon: 'success',
      title: '¡Muchas gracias!',
      text: 'Su reserva se ha realizado con éxito',
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

  function failedReservation() {
    Swal.fire({
      icon: 'error',
      title: 'Ha ocurrido un error',
      text: 'Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde',
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

  function covidAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Debes tener las 2 vacunas contra el COVID-19',
      text: 'De lo contrario no es posible realizar una reserva',
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
  /*----------------------------------------------------------------*/


  function sendConfirmReservationEmail() {

    const data = {
      name: localStorage.getItem("name"),
      email: localStorage.getItem('email'),
      placeName: product.name,
      city: product.city.name,
      checkInHour: checkInHour,
      checkIn: parseDates(checkInDate),
      checkOut: parseDates(checkOutDate),
    }

    emailjs.send('gmail', 'template_dorr75t', data, 'user_ce4wJStMEg864u0zkRWSo')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form id="reservation-form" name="Reservation Form" className="reservation-form" onSubmit={startReservation}>
      <UserDataForm handleChangeCity={handleChangeCity} city={city} handleChangeIsVaccinated={handleChangeIsVaccinated} />
      <section className="reservation-calendar-section">
        <h2 className="reservation-form-title">Selecciona tu fecha de reserva</h2>
        <div className="calendar-reservation">
          <FaCalendarDay className="calendar-icon-reservation" />
          <CalendarReservation handleChangeStartDate={handleChangeCheckInDate} handleChangeEndDate={handleChangeCheckOutDate} />
        </div>
      </section>
      <CheckInHourSelect handleChangeCheckInHour={handleChangeCheckInHour} checkInHour={checkInHour} />
    </form>
  );
};

export default ReservationForm;