import React from "react";
import "./ButtonClearFilter.css";

function ButtonClearFilter(props) {
    const { clearFilters } = props;
    return (
        <button className="clear-filter" aria-label="clear" onClick={clearFilters}>Borrar filtros</button>
    )
}

export default ButtonClearFilter;