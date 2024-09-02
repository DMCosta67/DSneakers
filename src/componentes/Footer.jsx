// Footer.jsx
import React from "react";
import '../css/footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer1">

        <div className="recomenda">
        <h2>Quem já comprou e recomenda</h2>
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
    </footer>
  );
}

export default Footer;
