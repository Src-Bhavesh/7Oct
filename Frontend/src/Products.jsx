import React from 'react';

function Product({ products }) {
  console.log(products);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
      {
        products?.map((product) => {
          return (
            <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
              {/* Product Image */}
              <img 
                src={product.thumbnail} 
                alt={product.title} 
                style={{ width: '100%', height: '150px', objectFit: 'contain' }} 
              />
              
              {/* Title & Category */}
              <h3>{product.title}</h3>
              <p style={{ color: 'gray', fontSize: '14px' }}>Category: {product.category}</p>
              
              {/* Description */}
              <p style={{ fontSize: '13px' }}>{product.description}</p>
              
              {/* Price & Discount */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'green' }}>
                  ${product.price}
                </span>
                <span style={{ backgroundColor: '#ffcccc', padding: '3px 6px', borderRadius: '4px', fontSize: '12px' }}>
                  -{product.discountPercentage}%
                </span>
              </div>

              {/* Rating & Stock */}
              <div style={{ marginTop: '10px', fontSize: '14px' }}>
                ⭐ {product.rating} / 5 | Stock: {product.stock > 0 ? `${product.stock} left` : 'Out of Stock'}
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default Product;