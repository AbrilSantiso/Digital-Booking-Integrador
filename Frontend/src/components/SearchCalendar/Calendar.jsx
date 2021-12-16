import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchCalendar.css"

registerLocale("es", es);

export default function Calendar(props) {

  const {captureStartDate, captureEndDate } = props;
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      captureStartDate(parseDates(startDate))
      captureEndDate(parseDates(endDate))
    };
  }, dateRange);
  
  function parseDates(date) {
    return (date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2))
  }
  
  return (
    <DatePicker
      selectsRange={true}
      //Language setting
      locale="es"
      dateFormat="dd 'de' MMM"
      //Show more than one month:
      monthsShown={2}
      //Disable previous dates:
      showDisabledMonthNavigation
      minDate={new Date()}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => { 
        setDateRange(update)
       }}
      withPortal={width <=800 ? true : false }
      isClearable={true}
      //Disable automatic close:
      shouldCloseOnSelect={true}
      placeholderText="Check In - Check Out"
    >
    </DatePicker >
  );
}
