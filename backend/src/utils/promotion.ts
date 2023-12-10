export function promotionCalc(price: string, promotionPrice: string) {
  const Price = parseFloat(price);
  const PromotionPrice = parseFloat(promotionPrice);

  if (promotionPrice === "1") return price.toString();

  let NewPrice = Price - (Price * PromotionPrice) / 100;

  return NewPrice.toString();
}
