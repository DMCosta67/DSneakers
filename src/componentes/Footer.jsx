import React from "react";
import '../css/footer.css';
import { CiClock2 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp, FaFacebookSquare,  FaInstagram  } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer1">

        <div className="recomenda">
        <h2>Quem já comprou e recomenda!!</h2>
        </div>

        <div className="comentarios">

        <div className="ney">
          <div className="fraseNey">
            <h3>Comprei para ir nas festas... Oh neymar</h3>
          </div>
          <div className="fotoNey">
            <img src="Neymar.jpg" alt="Neymar" />
          </div>
          </div>

        <div className="keanu">
          <div className="fraseKeanu">
            <h3>OMG!! It's amazing. Thanks Baby!!</h3>
          </div>
          <div className="fotoKeanu">
            <img src="Keanu.png" alt="Keanu" />
          </div>
        </div>

        <div className="messi">
          <div className="fraseMessi">
            <h3>ajajaja Lo ilevaba en la fiesta del mundial</h3>
          </div>
          <div className="fotoMessi">
            <img src="Messi.jpeg" alt="Messi" />
          </div>
        </div>
        </div>
      </div>

      <div className="footer2">
        <div className="borda">

        <div className="teste">

         <div className="respoFirst">

        
          <div className="horarios">
            <div className="hora">
              <h1>Horários de atendimento:</h1>
            </div>

            <div className="reloDias">
              <div className="relogio">
                <CiClock2 size={30} />
              </div>
              <div className="dias">
                <h2>Segunda a sexta das 8h as 21h.</h2>
                <h2>sábado das 8h as 16h.</h2>
              </div>
            </div>
          </div>

          <div className="forma">
            <div className="pagamento">
              <h1>Formas de pagamento:</h1>
            </div>
            <div className="formas">
              <img src="formass.png" alt="Formas de Pagamento"/>
            </div>
          </div>

        </div>

        <div className="respoSecond">

          <div className="contato">
            <div className="para">
              <h1>E-mail para contato:</h1>
            </div>
            <div className="email">
              <h2><MdOutlineEmail size={25} /> dsneakers67@gmail.com</h2>
            </div>
          </div>


          <div className="wpp">
            <div className="duvida">
              <h1>Dúvidas? Entre em contato por wpp!</h1>
            </div>
            <div className="whats">
              <a href="https://wa.me/5511960726769" target="_blank" rel="noopener noreferrer">
              <h2><FaWhatsapp size={25}/> 11 96072-6769</h2>
              </a>
            </div>
          </div>

          <div className="redes">
            <div className="sociais">
              <h1>Instagram e Facebook:</h1>
            </div>
            <div className="face">
            <a href="https://www.facebook.com/DSeakers"  rel="noopener noreferrer">
              <h2><FaFacebookSquare /> DSeakers</h2>
             </a> 
            </div>
            <div className="insta">
            <a href="https://www.instagram.com/DSneakers_ofc"  rel="noopener noreferrer">
              <h2><FaInstagram/> DSneakers_ofc</h2>
            </a>
            </div>
          </div>

           </div>

          </div>



        </div>
      </div>
    </footer>
  );
}

export default Footer;
