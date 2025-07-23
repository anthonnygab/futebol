import { useState } from "react";
import productsData from '../data/products.json'; // JSON local

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
    <div className="p-6">
      {/* Barra de busca */}
      <div className="flex gap-4 mb-6 max-w-xl mx-auto">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Digite o nome do time..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800"
        >
          Buscar
        </button>
      </div>

      {/* Vitrine de produtos */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.length > 0 ? (
          products.map(product => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-purple-700 font-bold mb-2">
                R$ {product.price.toFixed(2)}
              </p>
              <button className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition">
                Adicionar ao Carrinho
              </button>
            </div>
          ))
        ) : (
          <p className="text-center w-full col-span-full text-gray-500">Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
}
