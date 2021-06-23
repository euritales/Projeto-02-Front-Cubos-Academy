import './style.css';
import star from '../../assets/images/golden-star.svg';

function Card({ imagem, titulo, preco, nota, handleFilmesCarrinho}){

    return(
        <div className="card">
            <img src={imagem} alt="" className="img-character"/>
            <div className="conteudo">
                <div className="info">
                    <h3>{titulo}</h3>
                    <div>
                        <img src={star} alt="" className=""/>
                        <span>{nota}</span>
                    </div>
                </div>
                <button onClick={()=>handleFilmesCarrinho(titulo)}><span>Sacola</span> <span>R$ {preco.toFixed(2)}</span></button>
            </div>
        </div>
    );
}
export default Card;