import Calendar from './Calendar'
import { FaCalendarDay } from "react-icons/fa";
import './SearchCalendar.css'

function SearchCalendar(props) {
    const {captureStartDate, captureEndDate } = props;
    return (
        <section className="calendar">
            <FaCalendarDay className="calendar-icon" />
            <Calendar name="date" label="date" captureStartDate={captureStartDate} captureEndDate={captureEndDate}/>
        </section>
    )
}

export default SearchCalendar;