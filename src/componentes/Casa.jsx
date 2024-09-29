import React, { useState, useEffect, useRef } from 'react';
import CardProduto from './Card';
import '../css/card.css';
import '../css/detalhes.css';
import '../css/detalhesCompra.css';
import { FaCreditCard } from "react-icons/fa";

function ProdutoDetalhes({ produtoSelecionado, setProdutoSelecionado }) {
  const [quantidade, setQuantidade] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [compraConfirmada, setCompraConfirmada] = useState(false);
  const detalhesRef = useRef(null);

  useEffect(() => {
    if (detalhesRef.current) {
      detalhesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [produtoSelecionado]);

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const abrirPopup = () => {
    setIsPopupOpen(true);
  };

  const fecharPopup = () => {
    setIsPopupOpen(false);
    setCompraConfirmada(false);
  };

  const handleConfirmarCompra = (e) => {
    e.preventDefault();
    setCompraConfirmada(true);
  };

  function FormularioCompra({ produto, quantidade, fecharPopup }) {
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          {compraConfirmada ? (
            <div>
              <h2>Pedido Aprovado</h2>
              <p>Seu pedido de {quantidade} par(es) do {produto.title} foi aprovado!</p>
              <button onClick={fecharPopup}>Fechar</button>
            </div>
          ) : (
            <div>
              <h2>Informações de Compra</h2>
              <p>Produto: {produto.title}</p>
              <p>Quantidade: {quantidade}</p>
              <form onSubmit={handleConfirmarCompra}>
                <label>
                  Nome:
                  <input type="text" name="nome" required />
                </label>
                <label>
                  Endereço:
                  <input type="text" name="endereco" required />
                </label>
                <label>
                  Telefone:
                  <input type="text" name="telefone" required />
                </label>
                <label>
                  Cartão de Crédito:
                  <input type="text" name="cartao" required />
                </label>
                <button type="button" onClick={fecharPopup}>Cancelar</button>
                <button type="submit">Confirmar Compra</button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="detalhesProduto" ref={detalhesRef}>
      {produtoSelecionado && (
        <>
          <img className="abertoimg" src={produtoSelecionado.imageURL} alt={produtoSelecionado.altText} />

          <div className='aberto1'>
            <h1 className='titulo'>{produtoSelecionado.title}</h1>
            <p className='money'>{produtoSelecionado.preco}</p>
            <p className='star'>{produtoSelecionado.estrela}</p>
            <p className='pagamentos'><FaCreditCard /> mais formas de pagamento</p>

            <div className='butao'>
              <button className='quantidade-ajustar' onClick={diminuirQuantidade}>-</button>
              <span>{quantidade}</span>
              <button className='quantidade-ajustar' onClick={aumentarQuantidade}>+</button>
              <button className='compras' onClick={abrirPopup}>Comprar</button>
            </div>

            <div className='tamanho'>
              <p>39</p>
              <p>40</p>
              <p>41</p>
              <p>42</p>
              <p>43</p>
              <p>44</p>
            </div>

            <div className='descricao1'>
              <p className='descricao2'>{produtoSelecionado.descricao}</p>
            </div>

            <button className="voltas" onClick={() => setProdutoSelecionado(null)}>Voltar</button>
          </div>

          {isPopupOpen && (
            <FormularioCompra
              produto={produtoSelecionado}
              quantidade={quantidade}
              fecharPopup={fecharPopup}
            />
          )}
        </>
      )}
    </div>
  );
}

function Casa() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const handleCardClick = (produto) => {
    setProdutoSelecionado(produto);
  };

  const produtos = [
    {
      id: 1,
      imageURL: 'NikeDior.jpg',
      altText: 'Nike Dior',
      title: 'Nike Dior',
      estrela: '★★★★★',
      apartir: 'A partir de',
      preco: 'R$ 3499,99',
      vezes: 'ou 6x R$291,50',
      descricao: 'Fazendo a ponte entre roupas esportivas prontas para a rua e moda de luxo, o Dior x Air Jordan 1 High.'
    },
    {
      id: 2,
      imageURL: 'NikeShane.jpg',
      altText: 'Nike Shane',
      title: 'Nike Shane',
      estrela: '★★★★★',
      apartir: 'A partir de',
      preco: 'R$ 807,00',
      vezes: 'ou 5x R$161,40',
      descricao: 'Shane ONeill colocou a mesma atenção aos detalhes em todos os aspectos de seu tênis conceito, da mesma forma como coloca em suas manobras impossíveis.'
    },
    {
      id: 3,
      imageURL: 'NikeAir.png',
      altText: 'Nike Air Jordan',
      title: 'Nike Air Jordan',
      estrela: '★★★★☆',
      apartir: 'A partir de',
      preco: 'R$ 350,00',
      vezes: 'ou 4x R$87,50',
      descricao: 'Inspirado no original que estreou em 1985, o Air Jordan 1 Low oferece um visual clássico e limpo.'
    },
    {
      id: 4,
      imageURL: 'AdidasSpider.jpg',
      altText: 'Adidas Spider',
      title: 'Adidas Spider',
      estrela: '★★★★☆',
      apartir: 'A partir de',
      preco: 'R$ 1699,99',
      vezes: 'ou 12x R$141,66',
      descricao: 'Fazendo a ponte entre o amigo da vizinhança e o melhor que a Adidas tem a oferecer, o Spider-Man x Adidas.'
    },
    {
      id: 5,
      imageURL: 'NikeTravis.jpg',
      altText: 'Nike Travis',
      title: 'Nike Travis',
      estrela: '★★★★★',
      apartir: 'A partir de',
      preco: 'R$ 2000,00',
      vezes: 'ou 6x R$333,50',
      descricao: 'O Air Jordan 1 Low Retro OG SP Travis Scott é a versão mais baixa do aclamado AJ1 High Travis Scott.'
    },
    {
      id: 6,
      imageURL: 'AdidasOff.jpg',
      altText: 'Adidas White',
      title: 'Adidas White',
      estrela: '★★★★★',
      apartir: 'A partir de',
      preco: 'R$ 850,00',
      vezes: 'ou 6x R$141,16',
      descricao: 'O Tênis Adidas Off White Masculino é para os que apreciam o visual clássico em suas produções urbanas, a marca traz o Tênis Adidas Off White.'
    }
  ];

  return (
    <div className="aberto">
      {produtoSelecionado ? (
        <ProdutoDetalhes produtoSelecionado={produtoSelecionado} setProdutoSelecionado={setProdutoSelecionado} />
      ) : (
        <>
          <div className="legenda">
            <h1>MAIS VENDIDOS</h1>
          </div>
          <div className="secaoCard">
            {produtos.slice(0, 3).map((produto) => (
              <div key={produto.id} onClick={() => handleCardClick(produto)}>
                <CardProduto {...produto} />
              </div>
            ))}
          </div>
          <div className="legenda">
            <h1>LANÇAMENTOS</h1>
          </div>
          <div className="secaoCard">
            {produtos.slice(3, 6).map((produto) => (
              <div key={produto.id} onClick={() => handleCardClick(produto)}>
                <CardProduto {...produto} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Casa;

