import React, { useState } from "react";
import '../css/perfil.css';
import '../css/pop.css';
import { IoMdPerson, IoMdPersonAdd } from "react-icons/io";
import { FaLock } from "react-icons/fa";

function Perfil() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
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
              <input type="text" className="cadasLogin" />
            </div>

            <div className="senha">
              <h2>Senha:</h2>
              <input type="password" className="cadasLogin" />
              <input type="button" value="Prosseguir" className="botaoCadas" />
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
              <input type="text" className="cadasLogin" />
              <input type="button" value="Cadastrar" className="botaoLogin" onClick={handleButtonClick} />
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
                <input type="text" name="nomeCompleto" required/>
              </label>
              <label>
                E-mail:
                <input type="email" name="email" required/>
              </label>
              <label>
                Senha:
                <input type="password" name="senha" required/>
              </label>
              <label>
                Confirmar Senha:
                <input type="password" name="confirmarSenha" required/>
              </label>
              <label>
                Ano de Nascimento:
                <input type="text" name="anoNascimento" required/>
              </label>
              <label>
                CPF:
                <input type="text" name="cpf" />
              </label>
              <label>
                Celular:
                <input type="text" name="celular" required/>
              </label>
              <input type="submit" value="Cadastrar" />
            </form>
            <button onClick={handleClosePopup}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Perfil;
