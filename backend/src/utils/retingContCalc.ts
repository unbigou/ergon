export function ratingContCalc(ratingCont: string){
    let result = parseInt(ratingCont);

    result = result+1;

    return result.toString();
}