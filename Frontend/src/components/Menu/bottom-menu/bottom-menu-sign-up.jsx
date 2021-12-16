import { Link } from 'react-router-dom';
import SocialFollow from "../../SocialFollow/SocialFollow";
import '../menu.css';

function BottomMenuSignUp() {
    return (
        <>
            <div className="bottom-menu">
                <Link to="/ingresar" className="bottom-menu-text">Iniciar sesión</Link>
                <div className="footer-menu">
                    <SocialFollow isBurgerMenu={true} />
                </div>
            </div>
        </>
    );
};

export default BottomMenuSignUp;