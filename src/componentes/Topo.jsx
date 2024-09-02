import { useState } from "react";
import '../css/topo.css';
import Tela from "./Tela";
import { IoPersonSharp, IoLocationSharp } from "react-icons/io5";
import { FaShoppingCart, FaCommentAlt, FaBars } from "react-icons/fa";

function Topo() {
    const [secaoAtual, setSecaoAtual] = useState('home');

    const cliqueSecao = () => {
        setSecaoAtual('home');
    };

    const mudarParaPerfil = () => {
        setSecaoAtual('perfil');
    };

    const mudarParaCarrinho = () => {
        setSecaoAtual('carrinho');
    };

    return (
        <header className={
            secaoAtual === 'home' ? 'header-home' :
            secaoAtual === 'perfil' ? 'header-perfil' :
            secaoAtual === 'carrinho' ? 'header-carrinho' :
            'header-padrao'
        }>
        

            <div className="top">
                
                <div className="logo2">
                <img src="Logo.png" alt="logo" className="logo" onClick={cliqueSecao} />
                </div>

                <input type="text" placeholder="Pesquisar..." />
                
                <div className="icons">

                    <div className="Nperfil">
                    <IoPersonSharp className="icon perfil" onClick={mudarParaPerfil} />
                    <h4>Perfil</h4>
                    </div>

                    <div className="Natendimento">
                    <FaCommentAlt className="icon atendimento"/>
                    <h4>Atendimento</h4>
                    </div>

                    <div className="Ncarrinho">
                    <FaShoppingCart className="icon carrinho" onClick={mudarParaCarrinho} />
                    <h4>Carrinho</h4>
                    </div>

                </div>
                
            </div>

            <div className="two">

            <div className="Ender">
            <h4> <IoLocationSharp /> Digite seu endereço</h4>
            </div>

            <div className="Categoria">
            <h4> <FaBars /> Todas as categorias</h4>
            </div>

            <div className="Tipo">
            <h5>Casual</h5>
            <h5>Esportivo</h5>
            <h5>Skate</h5>
            <h5>Basquete</h5>
            </div>

            </div> 

            <Tela secaoAtual={secaoAtual} cliqueSecao={cliqueSecao} />
        </header>

    );
}

export default Topo;
