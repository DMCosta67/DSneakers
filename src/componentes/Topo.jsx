import { useState } from "react";
import '../css/topo.css';
import '../css/baar.css';
import '../css/pop.css';
import Tela from "./Tela";
import { IoPersonSharp, IoLocationSharp } from "react-icons/io5";
import { FaShoppingCart, FaCommentAlt, FaBars, FaSearch } from "react-icons/fa";

function Topo() {
    const [secaoAtual, setSecaoAtual] = useState('home');
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(null);

    const cliqueSecao = () => {
        setSecaoAtual('home');
    };

    const mudarParaPerfil = () => {
        setSecaoAtual('perfil');
    };

    const mudarParaCarrinho = () => {
        setSecaoAtual('carrinho');
    };

    const rolarAteFooter = () => {
        const footerElement = document.getElementById('footer');
        if (footerElement) {
            footerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    //Abre o pop
    const handleButtonClick = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    //busca cep pra buscar frete
    const buscaCep = async (event) => {
        event.preventDefault(); 
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            if (!response.ok) {
                throw new Error('Erro ao buscar o CEP');
            }
            const data = await response.json();
            setEndereco(data);
        } catch (error) {
            console.error('Erro: ', error);
            setEndereco(null);
        }
    };

    return (
        <>
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

                    <div className="searchContainer">
                        <input 
                        type="text" 
                        placeholder="Pesquisar..." 
                        className="barraPesquisa"
                        />
                        <FaSearch className="lupass" />
                    </div>

                    <div className="icons">
                        <div className="Nperfil">
                            <IoPersonSharp className="icon perfil" onClick={mudarParaPerfil} />
                            <h4 className="respon">Perfil</h4>
                        </div>

                        <div className="Natendimento">
                            <FaCommentAlt className="icon atendimento" onClick={rolarAteFooter}/>
                            <h4 className="respon">Atendimento</h4>
                        </div>

                        <div className="Ncarrinho">
                            <FaShoppingCart className="icon carrinho" onClick={mudarParaCarrinho} />
                            <h4 className="respon">Carrinho</h4>
                        </div>
                    </div>
                </div>

                <div className="two">
                    <div className="Ender">
                        <h4 onClick={handleButtonClick}><IoLocationSharp /> Digite seu endereço</h4>
                    </div>

                    <div className="Categoria">
                        <h4><FaBars /> Todas as categorias</h4>
                        <div className="sidebar-menu">
                            <div className="sidebar-item">Cano Alto</div>
                            <div className="sidebar-item">Plataforma</div>
                            <div className="sidebar-item">Bota</div>
                            <div className="sidebar-item">Chuteira</div>
                        </div>
                    </div>

                    <div className="Tipo">
                        <div className="casual">
                            <h5>Casual</h5>
                        </div>
                        <div className="esportivo">
                            <h5>Esportivo</h5>
                        </div>
                        <div className="skate">
                            <h5>Skate</h5>
                        </div>
                        <div className="bask">
                            <h5>Basquete</h5>
                        </div>
                    </div>
                </div> 

                <Tela secaoAtual={secaoAtual} cliqueSecao={cliqueSecao} />
            </header>

            {isPopupVisible && (
                <div className="popup">
                    <div className="popupContent">
                        <h3>Calcular frete:</h3>
                        <form className="formCadastro" onSubmit={buscaCep}>
                            <label>
                                Digite seu CEP:
                                <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} placeholder="Digite o CEP"/>
                                <input type="submit" value="Buscar" />
                            </label>
                            {endereco && (
                                <div className="frete">
                                    <h3>Endereço encontrado</h3>
                                    <p>CEP: {endereco.cep}</p>
                                    <p>Logradouro: {endereco.logradouro}</p>
                                    <p>Bairro: {endereco.bairro}</p>
                                    <p>Cidade: {endereco.localidade}</p>
                                    <p>Estado: {endereco.uf}</p>
                                    <p className="valorFrete">Valor do frete: R$ 100,00</p> {/* valor fixo ;-; */}
                                </div>
                            )}
                        </form>
                        <button onClick={handleClosePopup}>Fechar</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Topo;

