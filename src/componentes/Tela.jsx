import React from 'react';
import SlideShow from './slide';
import '../css/tela.css';
import Casa from './Casa'
import { FaLock } from "react-icons/fa";
import { MdOutlineAttachMoney, MdCreditCard } from "react-icons/md";

const Tela = ({ secaoAtual, cliqueSecao }) => {
    return (
        <div className='telas'>
            {secaoAtual === 'home' && (
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
                      <h4><FaLock />  Segurança garantida</h4>
                     </div>


                   </div>
                   <Casa/>
                  
               </div>
            )}

            {secaoAtual === 'perfil' && (
                <div className="secao">
                    <div className="per">
                        <h1>PERFIL</h1>
                    </div>
                </div>
            )}

            {secaoAtual === 'carrinho' && (
                <div className="secao">
                    <h1 style={{ color: 'aliceblue' }}>COMPRAS</h1>
                    <h1 style={{ color: 'aliceblue' }}>Não existem produtos no carrinho...</h1>
                    <button className="botao" onClick={cliqueSecao}>Ir às compras</button>
                </div>
            )}
        </div>
    );
};

export default Tela;
