import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Movies from './data';
import Carrinho from './components/Carrinho';
function App() {

  const [ filmesCarrinho, setFilmesCarrinho ] = useState([]);
  const [ filmes, setFilmes] = useState([]);
  const [texto, setTexto] = useState('');
  
  useEffect(()=>{
    filtroFilmes();
  },[texto]);
  
  function handleFilmesCarrinho(tituloFilme){
    const resultado = Movies.find(item=> item.title === tituloFilme);
    
    const indice = filmesCarrinho.findIndex(item => item === resultado )
    if(indice === -1){
      resultado.amount = 1;
      setFilmesCarrinho([...filmesCarrinho, resultado]);
    }else{
      filmesCarrinho[indice].amount++;
      setFilmesCarrinho([...filmesCarrinho]);
    }
  }

  function aumentarQtdFilme(filme){
    const indice = filmesCarrinho.findIndex(item=> item.title === filme);
    
    filmesCarrinho[indice].amount++;
    setFilmesCarrinho([...filmesCarrinho]);

  }
  function diminuirQtdFilme(filme){
    const indice = filmesCarrinho.findIndex(item=> item.title === filme);
    filmesCarrinho[indice].amount--;

    if(filmesCarrinho[indice].amount === 0){
      filmesCarrinho.splice(indice, 1);
    }

    setFilmesCarrinho([...filmesCarrinho]);
  }

  function somaTotalFilmes(){
    let totalValor = 0;

    for (const filme of filmesCarrinho) {
      totalValor += filme.amount * filme.price;
    }
    console.log(totalValor);
    return totalValor;
  }

  function filtroFilmes(){
    const filmesEncontrados = Movies.filter((filme) => {
      return (
      filme.title
      .toLowerCase()
      .includes(texto.toLowerCase()))
    });
    
    if(!texto){
      setFilmes([ ...Movies ]);
    }else{
      setFilmes([ ...filmesEncontrados ]);
    }
  }


  return (
    <div className="app">
        <Navbar setTexto={setTexto} texto={texto}/>
        <div className="containerCentro">
          <div>
            <div className="containerFilmes">
                <p>Top Filmes</p>
                <div  className="movieList">
                  {filmes.slice(0,5).map((item)=>{
                    return(
                      <Card 
                      titulo={item.title}
                      imagem={item.poster_path} 
                      preco={item.price} 
                      nota={item.vote_average} 
                      handleFilmesCarrinho={handleFilmesCarrinho} />
                    )
                  })}
              </div>
            </div>
            <div className="containerFilmes">
                <p>Filmes</p>
                <div  className="movieList">
                  {filmes.map((item)=>{
                    return(
                      <Card 
                      titulo={item.title}
                      imagem={item.poster_path} 
                      preco={item.price} 
                      nota={item.vote_average} 
                      handleFilmesCarrinho={handleFilmesCarrinho} />
                    )
                  })}
              </div>
            </div>
          </div>
          <Carrinho moviesList={filmesCarrinho}
          aumentarQtdFilme={aumentarQtdFilme}
          diminuirQtdFilme={diminuirQtdFilme}
          somaTotalFilmes={somaTotalFilmes}/>
        </div>
    </div>
  );
}

export default App;
