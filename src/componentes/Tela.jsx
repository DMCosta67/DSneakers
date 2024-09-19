import React, { useState } from 'react';
import SlideShow from './Slide';
import '../css/tela.css';
import '../css/carrinho.css';
import Casa from './Casa';
import { FaLock } from "react-icons/fa";
import { MdOutlineAttachMoney, MdCreditCard } from "react-icons/md";
import Perfil from './Perfil';

const Tela = ({ secaoAtual, cliqueSecao }) => {
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    const handleCardClick = (produto) => {
        setProdutoSelecionado(produto);
    };

    return (
        <div className='telas'>
            {!produtoSelecionado && secaoAtual === 'home' && (
                <div className='figurinha'>
                    <SlideShow />

                    <div className='baixoSlide'>
                        <div className='parcelamento'>
                            <h4><MdCreditCard /> Parcelamento em até 12x se juros!!</h4>
                        </div>

                        <div className='desconto'>
                            <h4><MdOutlineAttachMoney /> 3% de desconto no pix</h4>
                        </div>

                        <div className='seguranca'>
                            <h4><FaLock /> Segurança garantida</h4>
                        </div>
                    </div>
                    <Casa onCardClick={handleCardClick} />
                </div>
            )}

            {produtoSelecionado && (
                <div className="produto-detalhes">
                    <button onClick={() => setProdutoSelecionado(null)}>Voltar</button>
                    <h1>{produtoSelecionado.title}</h1>
                    <img src={produtoSelecionado.imageURL} alt={produtoSelecionado.altText} />
                    <div>{produtoSelecionado.estrela}</div>
                    <div>{produtoSelecionado.apartir}</div>
                    <div>{produtoSelecionado.preco}</div>
                    <div>{produtoSelecionado.vezes}</div>
                </div>
            )}

            {secaoAtual === 'perfil' && (
                <div className="per">
                    <Perfil />
                </div>
            )}

            {secaoAtual === 'carrinho' && (
                <div className="comprass">
                    <div className='produtoss'>
                        <h1>Não existem produtos no carrinho ainda...</h1>
                    </div>
                    <button className="botao23" onClick={cliqueSecao}>Ir às compras</button>
                </div>
            )}
        </div>
    );
};

export default Tela;
