import React from "react";
import { useLayoutEffect, useState } from 'react'
import { FaChevronUp } from "react-icons/fa";
import "./GoToTop.css";

function GoToTop() {
    const [scrolled, setScrolled] = useState(false);

    useLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else
                setScrolled(false);
        });
    },);

    const backToTop = () => {
        window.scroll({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {scrolled && (
                <button title="Volver arriba" id="scroll-to-top" onClick={() => backToTop()}>
                    <FaChevronUp className="icon-top" />
                </button>
            )}
        </>
    );
}

export default GoToTop;