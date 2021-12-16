import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { PRODUCT_DATES_BY_ID } from "../../utils/apis"
import axios from "axios";
import { useParams } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import "./CalendarReservation.css";


registerLocale("es", es);

function CalendarReservation(props) {

  const [unavailableDates, setunavailableDates] = useState([null, null]);
  const { handleChangeStartDate, handleChangeEndDate } = props;
  const { id } = useParams();
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [nextReservation, setNextReservation] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    getDates(id);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    end == null ? setNextReservation(findNextReservation(start)) : setNextReservation(null);
    setEndDate(end);
    if(handleChangeStartDate){
      handleChangeStartDate(start);
      handleChangeEndDate(end);
    }
  };
  
    //Get not available dates from product attribute
    function getDates(id) {
      axios.get(`${PRODUCT_DATES_BY_ID}${id}`)
        .then((result) => {
          setunavailableDates(result.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  
    const notAvailable = unavailableDates.map((date) => {
      return new Date(date);
    })

  function findNextReservation(userStartDate) {
    const notAvailableSorted = notAvailable.sort(function(a,b){
      return a - b;
    });
    if (userStartDate) {
      //  For each date of notAvailablesorted array checks if its next reserved date
      for (const reservedDay of notAvailableSorted) { 
        const dateToCheck = reservedDay; 
        //Calculating date difference
        const utc1 = Date.UTC(userStartDate.getFullYear(), userStartDate.getMonth(), userStartDate.getDate());
        const utc2 = Date.UTC(dateToCheck.getFullYear(), dateToCheck.getMonth(), dateToCheck.getDate());
        const diffDays = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
        //Checks if date is two month appart from now
        if (diffDays < 60 && diffDays > 0) {
          console.log("nextReservation: " + dateToCheck)
          return dateToCheck;
        }
      }
    }
  }
  

  return (
    <DatePicker

      //Language setting
      locale="es"
      dateFormat="dd 'de' MMM"
      //Show more than one month:
      monthsShown={2}

      disabledKeyboardNavigation

      //Disable previous dates:
      showDisabledMonthNavigation

      minDate={new Date()}
      //Calendar locked 
      maxDate={nextReservation}
      //Disables selection of not available dates
      //Change to notAvailable for final version
      excludeDates={notAvailable}
      //Range selection
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={onChange}
      withPortal={width <= 738 ? true : false}
      //Shows only the calendar and not the imput
      inline={width >= 738 ? true : false}
      selected={startDate}
      isClearable={true}
      calendarClassName="reservation-calendar"
      placeholderText="Check In - Check Out"
    ></DatePicker>
  );
}

export default CalendarReservation;

