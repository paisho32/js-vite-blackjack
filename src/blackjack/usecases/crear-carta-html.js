
/**
 * 
 * @param {String} carta  
 * @returns {HTMLImageElement} imagen de retorno
 */

export const crearCartaHtml=(carta)=>{
    if(!carta) throw new Error('la carta es un argumento obligatorio');
    const imgCarta=document.createElement('img');
    imgCarta.classList.add('carta');
    imgCarta.src=`./assets/cartas/${carta}.png`;
    return imgCarta;
}