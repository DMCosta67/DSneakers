import React, { useState } from "react";
import '../css/perfil.css';
import '../css/pop.css';
import { IoMdPerson, IoMdPersonAdd } from "react-icons/io";
import { FaLock } from "react-icons/fa";

function Perfil() {
  const [secaoAtual, setSecaoAtual] = useState('identifica');
  const [emails, setEmails] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);

  const cliqueSecao = () => {
    setSecaoAtual('identifica');
  };

  const mudarParaLogado = () => {
    if (!email) {
      alert("O campo de e-mail é obrigatório!");
      return;
    }
    if (!senha) {
      alert("O campo de senha é obrigatório!");
      return;
    }

    setSecaoAtual('logado');
  };

  const handleEmailChange = (e) => {
    setEmails(e.target.value);
  };
  
  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleButtonClick = () => {
    if (!emails) {
      alert("O campo de e-mail é obrigatório!");
      return;
    }
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      {secaoAtual === 'identifica' && (
        <div className="perfil">
          <div className="iden">
            <div className="identificacao">
              <h1>IDENTIFICAÇÃO</h1>
            </div>
            <div className="faca">
              <h2>Faça o seu Login ou crie uma conta caso ainda não possua cadastro</h2>
            </div>
          </div>

          {/* LOGIN E CADASTRO */}
          <div className="loginCadastro">
            <div className="cadastro">
              <div className="souCadastrado">
                <div className="jaSou">
                  <h1><IoMdPerson /> JÁ SOU CADASTRADO</h1>
                </div>
              </div>

              <div className="emailSenha">
                <div className="email2">
                  <h2>E-mail:</h2>
                  <input type="text" className="cadasLogin" value={email} onChange={handleEmailChange} required />
                </div>

                <div className="senha">
                  <h2>Senha:</h2>
                  <input type="password" className="cadasLogin" value={senha} onChange={handleSenhaChange} required />
                  <input type="submit" value="Prosseguir" className="botaoCadas" onClick={mudarParaLogado} />
                </div>

                <div className="esqueceu">
                  <h3><FaLock /> Esqueceu sua senha?</h3>
                </div>
              </div>
            </div>

            <div className="login">
              <div className="souLogin">
                <div className="aindaNao">
                  <h1><IoMdPersonAdd /> AINDA NÃO POSSUO CADASTRO </h1>
                </div>
              </div>

              <div className="possuo">
                <div className="emailCadastrar">
                  <h2>Digite o E-mail que deseja cadastrar:</h2>
                </div>

                <div className="inputss">
                  <label>
                    <input type="text" className="cadasLogin" onChange={handleEmailChange} required />
                    <input type="button" value="Cadastrar" className="botaoLogin" onClick={handleButtonClick} />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {isPopupVisible && (
            <div className="popup">
              <div className="popupContent">
                <h3>Cadastrar E-mail:</h3>
                <form className="formCadastro">
                  <label>
                    Nome Completo:
                    <input type="text" name="nomeCompleto" required />
                  </label>
                  <label>
                    E-mail:
                    <input type="email" name="email" value={emails} readOnly required />
                  </label>
                  <label>
                    Senha:
                    <input type="password" name="senha" required />
                  </label>
                  <label>
                    Ano de Nascimento:
                    <input type="text" name="anoNascimento" required />
                  </label>
                  <label>
                    CPF:
                    <input type="text" name="cpf" />
                  </label>
                  <label>
                    Celular:
                    <input type="text" name="celular" required />
                  </label>
                  <input type="submit" value="Cadastrar" />
                </form>
                <button onClick={handleClosePopup}>Fechar</button>
              </div>
            </div>
          )}
        </div>
      )}
      {secaoAtual === 'logado' && (
        <div className="logado">
          <img src="Logado.png" alt="Foto de Perfil" />
          <h1>Olá, Fulano!</h1>
          <button onClick={cliqueSecao}>Deslogar</button>
        </div>
      )}
    </>
  );
}

export default Perfil;

