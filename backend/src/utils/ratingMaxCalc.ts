export function ratingMaxCalc(ratingMax: string, newRating: string){
    let max = parseInt(ratingMax);
    const NewRating = parseInt(newRating)

    max = max+NewRating;

    return max.toString();
}