export function promotionCalc(price: string, promotionPrice: string){
    const Price = parseFloat(price)
    const PromotionPrice = parseFloat(promotionPrice)

    let NewPrice = (Price*PromotionPrice)/100;

    return NewPrice.toString();

}