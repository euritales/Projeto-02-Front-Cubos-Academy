import './style.css';
import logo from '../../assets/images/logo.svg'
import search from '../../assets/images/search-icon.svg'
import usuario from '../../assets/images/braun-ie.jpeg'

function Navbar({ texto, setTexto }){
    return(
        <div className="navbar">
            <img src={logo} alt="Logomarca"/>
            <button className="busca">
                <input type="text" value={texto} onChange={e=> setTexto(e.target.value)} placeholder="Pesquise filmes..."/>
                <img src={search} alt="" />
            </button>
            <div className="usuario">
                <p>Bem vindo, Usuario</p>
                <img src={usuario} alt="Usuário" />
            </div>
        </div>
    );
}

export default Navbar;