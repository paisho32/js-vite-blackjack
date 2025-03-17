import { pedirCarta,valorCarta,crearCartaHtml } from ".";


/**
 * 
 * @param {Number} puntosMinimos que la computadoa necesita para ganar 
 * @param {HTMLElement}  puntosHTML html para mostrar puntos 
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar las cadas
 * @param {Array<String>} deck 
 */
 

export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,deck=[]) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son necesario');
    if(!puntosHTML) throw new Error('puntosHTML  es necesario');
    let puntosComputadora=0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHtml(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
