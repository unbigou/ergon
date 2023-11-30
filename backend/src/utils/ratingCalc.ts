export function ratingCalc(ratingCont: string, ratingMax: string){
    const RatingCont = parseFloat(ratingCont);
    const RatingMax = parseFloat(ratingMax);

    let result = RatingMax/RatingCont;

    return result.toString();
}