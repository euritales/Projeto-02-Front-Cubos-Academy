import './style.css'
import sacola from '../../assets/images/sacola.svg';
import person from '../../assets/images/person-illustration.svg';
import minus from './../../assets/images/minus-icon.svg';
import plus from './../../assets/images/plus-icon.svg';
import trash from './../../assets/images/trash-icon.svg';

function Carrinho({ moviesList, aumentarQtdFilme, diminuirQtdFilme, somaTotalFilmes }){
    //fazer função
    moviesList.price = moviesList.price*100;

    return(
        <div className="sacola">
            <div className="cabecalho">
                <img src={sacola} alt="" />
                <h3>Sacola</h3>
            </div>
            <div className="produtosCarrinho">
            {!moviesList.length ? (<>
                <h3>Sua Sacola está vazia </h3>
                <p>Adicione filmes agora (:</p>
                <img src={person} alt="" />
            </>):(<>
            {moviesList.map(moviesList => {
                console.log(moviesList);
                return(
                    <div className="filmeEscolhido">
                        <div className="detalhesFilme">
                            <img src={moviesList.poster_path} alt="" />
                            <div>
                                <p>{moviesList.title}</p>
                                <p>R$ {moviesList.price.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="qtdFilme">
                            <button onClick={()=>aumentarQtdFilme(moviesList.title)}><img src={plus}  alt="" /></button>
                            <span>{moviesList.amount}</span>
                            <button onClick={()=>diminuirQtdFilme(moviesList.title)}><img src={moviesList.amount > 1? minus : trash}  alt="" /></button>
                        </div>
                    </div>
                );   
            })}
            <button><span>Purchase now</span><span>R$ {somaTotalFilmes()}</span></button></>)}
            </div>
        </div>
    );

}

export default Carrinho;