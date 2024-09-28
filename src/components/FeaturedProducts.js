import React from 'react';

function FeaturedProducts() {
  // Produtos mockados, em uma aplicação real, você obteria esses dados de uma API.
  const products = [
    { id: 1, name: 'Produto 1', price: 'R$ 100,00' },
    { id: 2, name: 'Produto 2', price: 'R$ 150,00' },
    { id: 3, name: 'Produto 3', price: 'R$ 200,00' }
  ];

  return (
    <section className="featured-products">
      <h2>Produtos em Destaque</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Comprar</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
