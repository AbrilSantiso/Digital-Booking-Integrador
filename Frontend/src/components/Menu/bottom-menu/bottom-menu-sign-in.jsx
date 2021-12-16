import { Link } from 'react-router-dom';
import SocialFollow from "../../SocialFollow/SocialFollow";
import '../menu.css';

function BottomMenuSignIn() {
    return (
        <>
            <div className="bottom-menu">
                <Link to="/registrarse" className="bottom-menu-text">Crear Cuenta</Link>
                <div className="footer-menu">
                    <SocialFollow isBurgerMenu={true} />
                </div>
            </div>
        </>
    );
};

export default BottomMenuSignIn;