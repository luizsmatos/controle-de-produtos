const formatPrice = (price: string) => {
  const priceToNumber = Number(price);
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceToNumber);
};

export default formatPrice;
