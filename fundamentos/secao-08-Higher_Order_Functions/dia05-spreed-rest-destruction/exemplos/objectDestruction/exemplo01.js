const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

  const {name, seller} = product;
  console.log(`O nome do produto é ${name} e está na loja ${seller}`)

  const propagandaProduto = ({name, price, seller}) => {
    console.log(`Estamos vendendo ${name}, por ${price} reais na loja ${seller}`);
  }

  propagandaProduto(product);