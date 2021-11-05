export const parsePrice = (price: number) => {
  const stringPrice = price.toString();
  const length = stringPrice.length;
  let priceWithGaps = "";

  for (let index = 0; index < length; index++) {
    if ((length - index) % 3 === 0) {
      priceWithGaps += " ";
    }
    priceWithGaps += stringPrice[index];
  }

  return priceWithGaps + " $";
};
