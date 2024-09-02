import React from 'react';
import '../css/card.css';

const CardProduto = ({ imageURL, altText, title, estrela, apartir, preco, vezes }) => {
    return (
        <div className="card">
            <img src={imageURL} alt={altText} className='imagemProdutos' />
            <div className="tituloProduto">{title}</div>
            <div className="estrela">{estrela}</div>
            <div className="apartir">{apartir}</div>
            <div className="preco">{preco}</div>
            <div className="vezes">{vezes}</div>
        </div>
    );
}

export default CardProduto;

