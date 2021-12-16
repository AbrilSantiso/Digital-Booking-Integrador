import { Link } from 'react-router-dom';
import SocialFollow from "../../SocialFollow/SocialFollow"
import '../menu.css';

function BottomMenuHome () {
    
    return (
        <>
            <div className="bottom-menu">
                <Link to="/registrarse" className="bottom-menu-text">Crear cuenta</Link>
                <div className="line">
                </div>
                <Link to="/ingresar" className="bottom-menu-text">Iniciar sesión</Link>
                <div className="footer-menu">
                    <SocialFollow isBurgerMenu={true} />
                </div>
            </div>
        </>
    );
};

export default BottomMenuHome;