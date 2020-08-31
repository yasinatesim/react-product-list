const priceFormatHelper = (priceArray) => {
  if (priceArray[1] !== undefined) {
    return `${priceArray[0]},${priceArray[1]}`;
  }

  return `${priceArray[0]}`;
};

const priceFormat = (price, currency = 'TRY') => {
  const splitPrice = (String(price).split('.'));
  const splittedPrice = priceFormatHelper(splitPrice);

  if (currency === 'TRY') {
    return `${splittedPrice} TL`;
  }
  return splittedPrice;
};

export default priceFormat;
