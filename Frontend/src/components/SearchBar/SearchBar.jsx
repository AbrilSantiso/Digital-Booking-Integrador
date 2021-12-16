import SearchLocation from '../SearchLocation/SearchLocation';
import SearchCalendar from '../SearchCalendar/SearchCalendar';
import './SearchBar.css'

function SearchBar(props) {
    const { setSelectedCity, filterByCityAndDates, captureStartDate, captureEndDate } = props;
    return (
        <section className="search-bar" aria-label="search" onSubmit={filterByCityAndDates}>
            <h1 id="search-title">Busca ofertas en hoteles, casas y mucho más</h1>
            <form id="search-bar-form">
                <SearchLocation setSelectedCity={setSelectedCity} />
                <SearchCalendar captureStartDate={captureStartDate} captureEndDate={captureEndDate}/>
                <button type="submit" id="search-button" aria-label="search button">Buscar</button>
            </form>
        </section>
    )
}

export default SearchBar;
