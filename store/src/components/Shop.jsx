import { useState } from "react";
import productsData from '../data/products.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../src/styles/Shop.css'

export default function Shop() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  function handleSearch() {
    const filtered = productsData.filter(product =>
      product.team.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filtered);
  }

  return (
  <div className="container">
    {/* Barra de busca */}
    <div className="search-bar">
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite o nome do time..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
          <FontAwesomeIcon icon={faSearch} style={{ marginRight: '6px' }} />  
      </button>

    </div>

    {/* Vitrine de produtos */}
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">R$ {product.price.toFixed(2)}</p>
            <button className="add-to-cart">Adicionar ao Carrinho</button>
          </div>
        ))
      ) : (
        search.trim() === "" ? null : (
          <p className="no-products">A escalação deu errado… nenhum produto disponível pra esse jogo.</p>
        )
      )}
    </div>
  </div>
);

}
