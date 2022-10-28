const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

  const {price, seller} = product;
  console.log(price);
  console.log(seller);

  const propagandaProduto = ({name, price, seller}) => {
    console.log(`Estamos vendendo ${name}, por ${price} reais na loja ${seller}`);
  }

  propagandaProduto(product);