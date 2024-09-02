import CardProduto from './Card';
import '../css/card.css';

function Casa () {
  return(
    <div className="secao">
                      
                      <div className='legenda'>
                       <h1>MAIS VENDIDOS</h1>  
                       </div>
                         <div className="secaoCard">
                         <CardProduto 
                          imageURL="NikeDior.jpg"
                          altText="NikeDior"
                          title="Nike Dior"
                          estrela="★★★★★"
                          apartir="A partir de"
                          preco="R$ 3499,99"
                          vezes="ou 6x R$291,50"
                        />
                        <CardProduto 
                         imageURL="NikeShane.jpg"
                         altText="NikeShane"
                         title="Nike Shane"
                         estrela="★★★★★"
                         apartir="A partir de"
                         preco="R$ 807,00"
                         vezes="ou 5x R$161,40"
                        />
                        <CardProduto 
                         imageURL="NikeAir.png"
                         altText="NikeAir"
                         title="Nike Air Jordan"
                         estrela="★★★★☆"
                         apartir="A partir de"
                         preco="R$ 350,00"
                         vezes="ou 4x R$87,50"
                        />   
                        </div>

                        <div className='legenda'>
                        <h1>LANÇAMENTOS</h1> 
                        </div>

                        <div className="secaoCard">
                         <CardProduto 
                          imageURL="AdidasSpider.jpg"
                          altText="AdidasSpider"
                          title="Adidas Spider"
                          estrela="★★★★☆"
                          apartir="A partir de"
                          preco="R$ 1699,99"
                          vezes="ou 12x R$141,66"
                        />
                        <CardProduto 
                         imageURL="NikeTravis.jpg"
                         altText="NikeTravis"
                         title="Nike Travis Scott"
                         estrela="★★★★★"
                         apartir="A partir de"
                         preco="R$ 2000,00"
                         vezes="ou 6x R$333,50"
                        />
                        <CardProduto 
                         imageURL="AdidasOff.jpg"
                         altText="AdidasOff"
                         title="Adidas Off-White"
                         estrela="★★★★★"
                         apartir="A partir de"
                         preco="R$ 850,00"
                         vezes="ou 6x R$141,16"
                        />     
                        </div> 
                        </div>
)}

export default Casa;


    
